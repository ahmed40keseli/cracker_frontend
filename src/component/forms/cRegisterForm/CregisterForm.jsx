// *** bu sayfada şirket kayıt için kullanılır ekranda gözükecek şeyler için button input vs bu sayfaya aktarılır

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cregistersendData } from "../../../store/slices/cregisterSlice";
// backend kısmı ile iletişime geçer axios ile verileri alır veya verir
import "./cregisterForm.css";
// import { jwtDecode } from "jwt-decode";
import { Link } from "react-router-dom";
// farklı sayfalara aktarım için link içerir
import Input from "../../input/InputNormal";
// defult input içe aktarı mı
import Button from "../../button/ButtonNormal";
// defult button içe aktarı mı

const CregisterForm = () => {
  const [referansNo, setreferansNo] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [user_password, setPassword] = useState("");
  // ilk başta bu değerlerin içi boş olarak alınır

  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.formCregisterSlice);

  const handleRegisterCompany = () => {
    dispatch(cregistersendData({ referansNo, email, username, user_password }));
  };

  return (
    <div className="CregisterForm">
      <h1>Şirket Kaydı</h1>
      <form>
        {status === "loading" && <p>Yükleniyor...</p>}
        {error && <p style={{ color: "red" }}>{JSON.stringify(error)}</p>}
        <Input
          type="text"
          value={referansNo}
          onChange={(e) => setreferansNo(e.target.value)}
          placeholder="Şirket Kodu"
        ></Input>
        <div>
          <Input
            type="name"
            placeholder="name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          ></Input>
        </div>
        <Input
          type="email"
          value={email}
          // yukarıda tanımladığımız veriyi buraya tanımlar
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-posta"
        ></Input>
        <Input
          type="password"
          value={user_password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Şifre"
        ></Input>
        <Button onClick={handleRegisterCompany}>Şirket Kaydı Yap</Button>
        {error && <p style={{ color: "red" }}>{JSON.stringify(error)}</p>}
        <p>
          Zaten hesabınız var mı? <Link to="/login">Giriş Yap</Link>
        </p>
        <p>
          Normal kayıt için <Link to="/register">tıklayın</Link>
        </p>
      </form>
      {status === "loading" && <p>Yükleniyor...</p>}
      {status === "succeeded" && <p>giriş başarı ile gerçekleşti</p>}
      {status === "failed" && (
        <p>Hata: {error?.message || "Bir hata oluştu."}</p>
      )}
    </div>
  );
};

export default CregisterForm;
// dışa aktarım için kullanılır
