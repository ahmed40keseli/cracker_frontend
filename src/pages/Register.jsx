// src/components/Register.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../store/slices/userSlice";
import { Link } from "react-router-dom"; // Link import edilmesi gerekiyor

const Register = () => {
  const dispatch = useDispatch();
  const { status, user, error } = useSelector((state) => state.user);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [referansNo, setreferanNo] = useState("");

  const handleRegister = () => {
    dispatch(registerUser({ email, password, name, referansNo }));
  };

  return (
    <div>
      <h1>Kayıt Ol</h1>
      {status === "loading" && <p>Yükleniyor...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Ad"
      />
      <hr />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="E-posta"
      />
      <hr />
      <input
        type="referansNo"
        value={referansNo}
        onChange={(e) => setreferanNo(e.target.value)}
        placeholder="Şirket Referans numarası"
      />
      <hr />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Şifre"
      />
      <hr />
      <button onClick={handleRegister}>Kayıt Ol</button>
      {user && <p>Hoşgeldiniz, {user.email}</p>}

      {/* Sayfa yönlendirme linki */}
      <p>
        Hesabınız var mı? <Link to="/">Giriş Yap</Link>
      </p>
      <p>
        Şirket kaydı yapmak için <Link to="/Cregister">tıklayın</Link>
      </p>
    </div>
  );
};

export default Register;

// import React, { useState } from "react";
// // import './css/Register.css';

// const Register = () => {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [referansNo, setreferans] = useState("");
//   const [error, setError] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (password !== confirmPassword) {
//       setError("Passwords do not match");
//       return;
//     }

//     try {
//       // Replace with your backend API call
//       const response = await fetch("http://localhost:8081/register", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           username,
//           email,
//           user_password: password,
//           referansNo,
//         }),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         setSuccessMessage("Registration successful!");
//         setError("");
//       } else {
//         setError(data.message || "An error occurred");
//       }
//     } catch (err) {
//       setError("An error occurred. Please try again.");
//     }
//   };

//   return (
//     <div className="register-container">
//       <div className="register-card">
//         <h1>My App</h1>
//         <h2>Register</h2>
//         {error && <p className="error">{error}</p>}
//         {successMessage && <p className="success">{successMessage}</p>}
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label>Username:</label>
//             <input
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>Email:</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>Referans number:</label>
//             <input
//               type="text"
//               value={referansNo}
//               onChange={(e) => setreferans(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>Password:</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>Confirm Password:</label>
//             <input
//               type="password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit" className="register-button">
//             Register
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Register;
