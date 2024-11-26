// import RegisterForm from "../component/form/RegisterForm";

// function RegisterPage() {
//   return (
//     <div>
//       <h2>REGISTER</h2>
//       <RegisterForm />
//     </div>
//   );
// }

// export default RegisterPage;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import RegisterForm from "../component/form/RegisterForm";
import { registerUser } from "../store/slices/userSlice";

function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [referansNo, setReferansNo] = useState("");

  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.user);

  const handleRegister = () => {
    const userData = { name, email, password, referansNo };
    dispatch(registerUser(userData)); // registerUser thunk'ını çağırıyoruz
  };

  // const handleRegister = () => {
  //   const userData = { name, email, password, referansNo };
  //   console.log("Kayıt Verileri:", userData);
  //   setStatus("success");
  //   setError(null);
  // };

  return (
    <div>
      <h2>REGISTER</h2>
      <RegisterForm
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        referansNo={referansNo}
        setreferanNo={setReferansNo}
        handleRegister={handleRegister}
        status={status}
        error={error}
      />
    </div>
  );
}

export default RegisterPage;
