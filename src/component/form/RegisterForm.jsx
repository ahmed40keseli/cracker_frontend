import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, selectUser, logout } from "../../store/slices/userSlice";
import { useNavigate } from "react-router-dom";
import Input from "../input/InputNormal";
// defult input içe aktarı mı
import Button from "../button/ButtonNormal";
// defult button içe aktarı mı

function RegisterForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, error } = useSelector(selectUser);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // ilk başta bu değerlerin içi boş olarak alınır

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(registerUser({ email, password }))
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
          <h2>Register</h2>
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
          <Button type="submit"></Button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
      )}
    </div>
  );
}

export default RegisterForm;

// import React from "react";
// import InputNormal from "../input/InputNormal";
// import StatusMessage from "../message/StatusMessage";
// import ButtonNormal from "../button/ButtonNormal";

// const RegisterForm = ({
//   name,
//   setName,
//   email,
//   setEmail,
//   password,
//   setPassword,
//   referansNo,
//   setreferanNo,
//   handleRegister,
//   status,
//   error,
// }) => {
//   return (
//     <div>
//       <StatusMessage status={status} error={error} />
//       <InputNormal
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         placeholder="Ad"
//       />
//       <InputNormal
//         type="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="E-posta"
//       />
//       <InputNormal
//         type="text"
//         value={referansNo}
//         onChange={(e) => setreferanNo(e.target.value)}
//         placeholder="Şirket Referans Numarası"
//       />
//       <InputNormal
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         placeholder="Şifre"
//       />
//       <ButtonNormal onClick={handleRegister}>Kayıt Ol</ButtonNormal>
//     </div>
//   );
// };

// export default RegisterForm;
