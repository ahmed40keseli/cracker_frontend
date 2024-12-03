import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../store/slices/userSlice";
import Input from "../input/InputNormal"; // defult input içe aktarı mı
import Button from "../button/ButtonNormal"; // defult button içe aktarı mı

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); // ilk başta bu değerlerin içi boş olarak alınır

  const dispatch = useDispatch();

  // const { user, loading, error } = useSelector(selectUser);
  const status = useSelector((state) => state.userSlice.status);
  const error = useSelector((state) => state.userSlice.error);

  const handleSubmit = (e) => {
    e.preventDefault();
    const sendUserLoginData = {
      email,
      password,
    };
    dispatch(loginUser(sendUserLoginData));
  };

  return (
    <div>
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          ></Input>
        </div>
        <Button type="submit">Giriş Yap</Button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
      {status === "loading" && <p>Yükleniyor...</p>}
      {status === "succeeded" && <p>Veri başarıyla gönderildi!</p>}
      {status === "failed" && (
        <p>Hata: {error?.message || "Bir hata oluştu."}</p>
      )}
    </div>
  );
}

export default LoginForm;
