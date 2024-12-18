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
  const { status, error, token } = useSelector((state) => state.formLoginSlice);
  // const status = useSelector((state) => state.formLoginSlice.status);
  // const error = useSelector((state) => state.formLoginSlice.error);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const sendUserLoginData = {
      email,
      user_password,
    };
    dispatch(loginSendData(sendUserLoginData)).then(() => {});
  };

  // const sessionRoleID = sessionStorage.getItem("roleId");
  // const sessionUserId = sessionStorage.getItem("userId");

  // useEffect(() => {
  //   if (status === "succeeded") {
  //     if (sessionRoleID === "1" || sessionRoleID === "2") {
  //       navigate("/createTask");
  //     } else if (sessionRoleID === "3") {
  //       navigate(`/getTasks`);
  //     }
  //   }
  // }, [status, navigate, sessionRoleID, sessionUserId]);

  useEffect(() => {
    if (status === "succeeded" && token) {
      try {
        // Token içindeki bilgileri decode et
        const decodedToken = jwtDecode(token);

        // Decode edilen token içinden roleId ve userId'yi al
        const roleId = decodedToken.roleId;

        if (roleId === "1" || roleId === "2") {
          navigate("/createTask");
        } else if (roleId === "3") {
          navigate(`/getTasks`);
        }
      } catch (decodeError) {
        console.error("Token decode hatası:", decodeError);
      }
    }
  }, [status, token, navigate]);

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

// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { loginSendData } from "../../../store/slices/loginSlice";
// // import jwtDecode from "jwt-decode";
// import { decode as jwtDecode } from "jwt-decode";
// import Input from "../../input/InputNormal";
// import Button from "../../button/ButtonNormal";
// import "./loginForm.css";
// import { useNavigate } from "react-router-dom";

// function LoginForm() {
//   const [email, setEmail] = useState("");
//   const [user_password, setPassword] = useState("");

//   const dispatch = useDispatch();
//   const { status, error, token } = useSelector((state) => state.formLoginSlice);

//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const sendUserLoginData = {
//       email,
//       user_password,
//     };
//     dispatch(loginSendData(sendUserLoginData));
//   };

//   useEffect(() => {
//     if (status === "succeeded" && token) {
//       try {
//         // Token içindeki bilgileri decode et
//         const decodedToken = jwtDecode(token);

//         // Decode edilen token içinden roleId ve userId'yi al
//         const roleId = decodedToken.roleId;
//         const userId = decodedToken.userId;

//         // Role ID'ye göre yönlendirme yap
//         if (roleId === "1" || roleId === "2") {
//           navigate("/createTask");
//         } else if (roleId === "3") {
//           navigate(`/getTasks`);
//         }

//         // Bilgileri kontrol etmek için console log
//         console.log("Decoded Token:", decodedToken);
//         console.log("Role ID:", roleId);
//         console.log("User ID:", userId);
//       } catch (decodeError) {
//         console.error("Token decode hatası:", decodeError);
//       }
//     }
//   }, [status, token, navigate]);

//   return (
//     <div className="loginForm">
//       <h1>Giriş Ekranı</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <Input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <Input
//             type="password"
//             placeholder="Password"
//             value={user_password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <Button type="submit">Giriş Yap</Button>

//         {error && (
//           <p style={{ color: "red" }}>{error.message || "Bir hata oluştu."}</p>
//         )}
//       </form>

//       {status === "loading" && <p>Yükleniyor...</p>}
//       {status === "succeeded" && <p>Giriş başarı ile gerçekleşti</p>}
//       {status === "failed" && (
//         <p>Hata: {error?.message || "Bir hata oluştu."}</p>
//       )}
//     </div>
//   );
// }

// export default LoginForm;
