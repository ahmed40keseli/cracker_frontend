import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginSendData } from "../../store/slices/loginSlice";
import Input from "../input/InputNormal";
import Button from "../button/ButtonNormal";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [user_password, setPassword] = useState("");

  const dispatch = useDispatch();
  const status = useSelector((state) => state.formLoginSlice.status);
  const error = useSelector((state) => state.formLoginSlice.error);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const sendUserLoginData = {
      email,
      user_password,
    };
    dispatch(loginSendData(sendUserLoginData));
    navigate("/createTask");
  };

  return (
    <div>
      <h1>Giriş Ekranı</h1>
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
            type="password"
            placeholder="Password"
            value={user_password}
            onChange={(e) => setPassword(e.target.value)}
            required
          ></Input>
        </div>
        <Button type="submit">Giriş Yap</Button>
        {error && <p style={{ color: "red" }}>{JSON.stringify(error)}</p>}
      </form>
      {status === "loading" && <p>Yükleniyor...</p>}
      {status === "succeeded" && <p>giriş başarı ile gerçekleşti</p>}
      {status === "failed" && (
        <p>Hata: {error?.message || "Bir hata oluştu."}</p>
      )}
    </div>
  );
}

export default LoginForm;
