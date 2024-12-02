import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../store/slices/userSlice";
import Input from "../input/InputNormal"; // defult input içe aktarı mı
import Button from "../button/ButtonNormal"; // defult button içe aktarı mı

function RegisterForm() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState(""); // ilk başta bu değerlerin içi boş olarak alınır
  const [referansNo, setReferansno] = useState("");
  // const { user, error } = useSelector(selectUser);

  const dispatch = useDispatch();

  const status = useSelector((state) => state.userSlice.status);
  const error = useSelector((state) => state.userSlice.error);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email,
      username,
      password,
      referansNo,
    };
    console.log(userData);

    dispatch(registerUser(userData));
  };

  return (
    <div>
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
            type="name"
            placeholder="name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          ></Input>
        </div>
        <div>
          <Input
            type="referansNo"
            placeholder="referansNo"
            value={referansNo}
            onChange={(e) => setReferansno(e.target.value)}
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
        <Button type="submit">Kayıt Ol</Button>
        {error && <p style={{ color: "red" }}>{JSON.stringify(error)}</p>}
      </form>
      {status === "loading" && <p>Yükleniyor...</p>}
      {status === "succeeded" && <p>Veri başarıyla gönderildi!</p>}
      {status === "failed" && (
        <p>Hata: {error?.message || "Bir hata oluştu."}</p>
      )}
    </div>
  );
}

export default RegisterForm;
