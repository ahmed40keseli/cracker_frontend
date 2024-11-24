import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, selectUser, logout } from "../store/slices/userSlice";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // useNavigate hook'u
  const { user, loading, error } = useSelector(selectUser);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(loginUser({ email, password }))
      .unwrap()
      .then((data) => {
        sessionStorage.setItem("token", data.token); // Oturum bilgisi saklanır
        alert("Login successful!");
        navigate("/createTask"); // Başarılı giriş sonrası yönlendirme
      })
      .catch((error) => {
        console.error("Login error:", error);
      });
  };

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    navigate("/login"); // Login sayfasına yönlendirme
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
          <h2>Login</h2>
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
      )}
    </div>
  );
}

export default LoginForm;

// // src/components/LoginForm.jsx
// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { loginUser, selectUser, logout } from "../store/slices/userSlice";

// function LoginForm() {
//   const dispatch = useDispatch();
//   const { user, loading, error } = useSelector(selectUser);

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(loginUser({ email, password }));
//   };

//   const handleLogout = () => {
//     dispatch(logout());
//   };

//   return (
//     <div>
//       {user ? (
//         <div>
//           <h2>Welcome, {user.name}!</h2>
//           <button onClick={handleLogout}>Logout</button>
//         </div>
//       ) : (
//         <form onSubmit={handleSubmit}>
//           <h2>Login</h2>
//           <div>
//             <input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div>
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit" disabled={loading}>
//             {loading ? "Logging in..." : "Login"}
//           </button>
//           {error && <p style={{ color: "red" }}>{error}</p>}
//         </form>
//       )}
//     </div>
//   );
// }

// export default LoginForm;
