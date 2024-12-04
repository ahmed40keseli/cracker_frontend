import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerSendData } from "../../store/slices/registerSlice";
import Input from "../input/InputNormal";
import Button from "../button/ButtonNormal";

function RegisterForm() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [user_password, setPassword] = useState("");
  const [referansNo, setReferansno] = useState("");

  const dispatch = useDispatch();

  const status = useSelector((state) => state.formRegisterSlice.status);
  const error = useSelector((state) => state.formRegisterSlice.error);

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

  return (
    <div>
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
