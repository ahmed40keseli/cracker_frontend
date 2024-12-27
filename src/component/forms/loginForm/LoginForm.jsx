import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginSendData } from "../../../store/slices/loginSlice";
import { jwtDecode } from "jwt-decode";
import Input from "../../input/InputNormal";
import Button from "../../button/ButtonNormal";
import "./loginForm.css";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [user_password, setPassword] = useState("");

  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.formLoginSlice);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const sendUserLoginData = {
      email,
      user_password,
    };
    dispatch(loginSendData(sendUserLoginData)).then(() => {});
  };

  useEffect(() => {
    if (status === "succeeded") {
      try {
        const token = sessionStorage.getItem("authorization");
        if (token) {
          const decodedToken = jwtDecode(token);
          const roleId = decodedToken.roleId;

          if (roleId === 1 || roleId === 2) {
            navigate("/createTask");
          } else if (roleId === 3) {
            navigate("/getTasks");
          }
        }
      } catch (decodeError) {
        console.error("Token decode hatası:", decodeError);
      }
    }
  }, [status, navigate]);

  return (
    <div className="loginForm">
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
