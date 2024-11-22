import React from "react";
import InputField from "../component/InputField";
import StatusMessage from "../component/StatusMessage";

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
      <h1>Kayıt Ol</h1>
      <StatusMessage status={status} error={error} />
      <InputField
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Ad"
      />
      <InputField
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="E-posta"
      />
      <InputField
        type="text"
        value={referansNo}
        onChange={(e) => setreferanNo(e.target.value)}
        placeholder="Şirket Referans numarası"
      />
      <InputField
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Şifre"
      />
      <button onClick={handleRegister}>Kayıt Ol</button>
    </div>
  );
};

export default RegisterForm;
