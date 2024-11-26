import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, selectUser, logout } from "../../store/slices/userSlice";
import { useNavigate } from "react-router-dom";
import Input from "../input/InputNormal";
import Button from "../button/ButtonNormal";

function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, loading, error } = useSelector(selectUser);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(loginUser({ email, password }))
      .unwrap()
      .then((data) => {
        alert("Login successful!");
        navigate("/createTask");
      })
      .catch((error) => {
        console.error("Login error:", error);
      });
  };

  const handleLogout = () => {
    navigate("/login");
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
          {/* <button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button> */}
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
