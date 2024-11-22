import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../store/slices/userSlice";
import RegisterForm from "../component/RegisterForm";
import NavigationLinks from "../component/NavigationLinks";

const Register = () => {
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.user);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [referansNo, setreferanNo] = useState("");

  const handleRegister = () => {
    dispatch(registerUser({ email, password, name, referansNo }));
  };

  return (
    <div>
      <RegisterForm
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        referansNo={referansNo}
        setreferanNo={setreferanNo}
        handleRegister={handleRegister}
        status={status}
        error={error}
      />
      <NavigationLinks />
      <StaticRange />
    </div>
  );
};

export default Register;
