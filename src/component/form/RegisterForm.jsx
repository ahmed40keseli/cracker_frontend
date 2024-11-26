import React from "react";
import InputNormal from "../input/InputNormal"; // `InputNormal` yerine `InputField` kullandık.
import StatusMessage from "../message/StatusMessage";
import ButtonNormal from "../button/ButtonNormal"; // `Button` yerine `ButtonNormal`

const RegisterForm = ({
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  referansNo,
  setreferanNo,
  handleRegister,
  status,
  error,
}) => {
  return (
    <div>
      <StatusMessage status={status} error={error} />
      <InputNormal
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Ad"
      />
      <InputNormal
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="E-posta"
      />
      <InputNormal
        type="text"
        value={referansNo}
        onChange={(e) => setreferanNo(e.target.value)}
        placeholder="Şirket Referans Numarası"
      />
      <InputNormal
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Şifre"
      />
      <ButtonNormal onClick={handleRegister}>Kayıt Ol</ButtonNormal>
    </div>
  );
};

export default RegisterForm;

// import React from "react";
// import InputNormal from "../input/InputNormal";
// import StatusMessage from "../message/StatusMessage";
// import Button from "../button/ButtonNormal";
// import { registerUser } from "../../store/slices/userSlice";

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
//         placeholder="Şirket Referans numarası"
//       />
//       <InputNormal
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         placeholder="Şifre"
//       />
//       <Button onClick={handleRegister}>Kayıt Ol</Button>
//     </div>
//   );
// };

// export default RegisterForm;
