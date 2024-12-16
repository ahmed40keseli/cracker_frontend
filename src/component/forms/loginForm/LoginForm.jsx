import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginSendData } from "../../../store/slices/loginSlice";
import Input from "../../input/InputNormal";
import Button from "../../button/ButtonNormal";
import "./loginForm.css";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [user_password, setPassword] = useState("");

  const dispatch = useDispatch();
  const status = useSelector((state) => state.formLoginSlice.status);
  const error = useSelector((state) => state.formLoginSlice.error);

  const navigate = useNavigate();

  // useEffect(() => {
  //     const verification = async () => {
  //       try {
  //         if (sessionRoleID == 3){

  //         }
  //         // const action = await dispatch(getData());
  //         // setPersonList(action.payload.newArray || []);
  //       } catch (error) {
  //         console.error("Error:", error);
  //       }
  //     };
  //     verification();
  //   }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const sendUserLoginData = {
      email,
      user_password,
    };
    console.log("sendUserLoginData", sendUserLoginData);
    dispatch(loginSendData(sendUserLoginData)).then(() => {});
  };

  const sessionRoleID = sessionStorage.getItem("roleId");

  useEffect(() => {
    if (status === "succeeded") {
      navigate("/createTask");
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