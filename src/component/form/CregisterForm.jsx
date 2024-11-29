// *** bu sayfada şirket kayıt için kullanılır ekranda gözükecek şeyler için button input vs bu sayfaya aktarılır

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerCompany } from "../../store/slices/userSlice";
// backend kısmı ile iletişime geçer axios ile verileri alır veya verir
import { Link } from "react-router-dom";
// farklı sayfalara aktarım için link içerir
import Input from "../input/InputNormal";
// defult input içe aktarı mı
import Button from "../button/ButtonNormal";
// defult button içe aktarı mı

const CregisterForm = () => {
  const dispatch = useDispatch();
  const { status, user, error } = useSelector((state) => state.user);

  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // ilk başta bu değerlerin içi boş olarak alınır

  const handleRegisterCompany = () => {
    dispatch(registerCompany({ companyName, email, password }));
  };

  return (
    <div>
      <h1>Şirket Kaydı</h1>
      {status === "loading" && <p>Yükleniyor...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <Input
        type="text"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
        placeholder="Şirket Adı"
      ></Input>
      <hr />
      <Input
        type="email"
        value={email}
        // yukarıda tanımladığımız veriyi buraya tanımlar
        onChange={(e) => setEmail(e.target.value)}
        placeholder="E-posta"
      ></Input>
      <hr />
      <Input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Şifre"
      ></Input>
      <hr />
      <Button onClick={handleRegisterCompany}>Şirket Kaydı Yap</Button>
      {user && <p>Şirketiniz kaydedildi, {user.companyName}</p>}

      <p>
        Zaten hesabınız var mı? <Link to="/">Giriş Yap</Link>
      </p>
      <p>
        Normal kayıt için <Link to="/register">tıklayın</Link>
      </p>
    </div>
  );
};

export default CregisterForm;
// dışa aktarım için kullanılır
