import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, selectUser, logout } from "../../store/slices/userSlice";
import Input from "../input/InputNormal"; // defult input içe aktarı mı
import Button from "../button/ButtonNormal"; // defult button içe aktarı mı

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); // ilk başta bu değerlerin içi boş olarak alınır

  const dispatch = useDispatch();

  // const { user, loading, error } = useSelector(selectUser);
  const status = useSelector((state) => state.userSlice.status);
  const error = useSelector((state) => state.userSlice.error);

  const handleSubmit = (e) => {
    e.preventDefault();
    const sendUserLoginData = {
      email,
      password,
    };
    dispatch(loginUser(sendUserLoginData));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   dispatch(loginUser({ email, password }))
  //     .unwrap()
  //     .then((data) => {
  //       localStorage.setItem("token", data.token); // Token'ı saklama
  //       alert("Login successful!");
  //       navigate("/createTask");

  //       const tokenExpiration = 3600 * 1000; // Örnek süre: 1 saat
  //       setTimeout(() => {
  //         localStorage.removeItem("token");
  //         alert("Oturum süreniz doldu. Lütfen tekrar giriş yapın.");
  //         navigate("/");
  //       }, tokenExpiration);
  //     })
  //     .catch((error) => {
  //       console.error("Login error:", error);
  //     });
  // };

  // const handleLogout = () => {
  //   localStorage.removeItem("token"); // Token'ı temizle
  //   dispatch(logout()); // Redux state'i sıfırla
  //   navigate("/");
  // };

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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          ></Input>
        </div>
        <Button type="submit">Giriş Yap</Button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
}

export default LoginForm;
