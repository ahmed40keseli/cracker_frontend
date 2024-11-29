import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, selectUser, logout } from "../../store/slices/userSlice";
import { useNavigate } from "react-router-dom";
import Input from "../input/InputNormal";
// defult input içe aktarı mı
import Button from "../button/ButtonNormal";
// defult button içe aktarı mı

function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, loading, error } = useSelector(selectUser);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // ilk başta bu değerlerin içi boş olarak alınır

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(loginUser({ email, password }))
      .unwrap()
      .then((data) => {
        localStorage.setItem("token", data.token); // Token'ı saklama
        alert("Login successful!");
        navigate("/createTask");

        // Token süresi dolduğunda otomatik çıkış
        const tokenExpiration = 3600 * 1000; // Örnek süre: 1 saat
        setTimeout(() => {
          localStorage.removeItem("token");
          alert("Oturum süreniz doldu. Lütfen tekrar giriş yapın.");
          navigate("/");
        }, tokenExpiration);
      })
      .catch((error) => {
        console.error("Login error:", error);
      });
  };

  const handleLogout = () => {
    localStorage.removeItem("token"); // Token'ı temizle
    dispatch(logout()); // Redux state'i sıfırla
    navigate("/");
  };

  return (
    <div>
      {user ? (
        <div>
          <h2>Welcome, {user.name}!</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
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
          <Button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </Button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
      )}
    </div>
  );
}

export default LoginForm;
