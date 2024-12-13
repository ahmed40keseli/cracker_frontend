import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerSendData } from "../../../store/slices/registerSlice";
import "./registerForm.css";
import Input from "../../input/InputNormal";
import Button from "../../button/ButtonNormal";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

function RegisterForm() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [user_password, setPassword] = useState("");
  const [referansNo, setReferansno] = useState("");

  const dispatch = useDispatch();
  const status = useSelector((state) => state.formRegisterSlice.status);
  const error = useSelector((state) => state.formRegisterSlice.error);

  // const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email,
      username,
      user_password,
      referansNo,
    };
    console.log(userData);

    dispatch(registerSendData(userData));
  };

  // useEffect(() => {
  //   if (status === "succeeded") {
  //     navigate("/login");
  //   }
  // }, [status, navigate]);

  return (
    <div className="registerForm">
      <h1>Kayıt Ekranı</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          ></Input>
        </div>
        <div>
          <Input
            type="name"
            placeholder="name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          ></Input>
        </div>
        <div>
          <Input
            type="referansNo"
            placeholder="referansNo"
            value={referansNo}
            onChange={(e) => setReferansno(e.target.value)}
            required
          ></Input>
        </div>
        <div>
          <Input
            type="password"
            placeholder="Password"
            value={user_password}
            onChange={(e) => setPassword(e.target.value)}
            required
          ></Input>
        </div>
        <Button type="submit">Kayıt Ol</Button>
        {error && <p style={{ color: "red" }}>{JSON.stringify(error)}</p>}
        <h2>
          Kayıt Olduysanız <Link to="/login">Giriş Yap</Link>
        </h2>
        <h3>
          Şirket Kaydı için <Link to="/Cregister">tıklayın</Link>
        </h3>
      </form>
      {status === "loading" && <p>Yükleniyor...</p>}
      {status === "succeeded" && <p>Veri başarıyla gönderildi!</p>}
      {status === "failed" && (
        <p>Hata: {error?.message || "Bir hata oluştu."}</p>
      )}
    </div>
  );
}

export default RegisterForm;
