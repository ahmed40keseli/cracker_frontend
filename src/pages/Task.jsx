// src/components/RegisterCompany.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"; // Link import edilmesi gerekiyor

const AddTodo = () => {
  const dispatch = useDispatch();
  const { status, user, error } = useSelector((state) => state);

  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegisterCompany = () => {
    dispatch(registerCompany({ companyName, email, password }));
  };

  return (
    <div>
      <h1>Şirket Kaydı</h1>
      {status === "loading" && <p>Yükleniyor...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <input
        type="text"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
        placeholder="Şirket Adı"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="E-posta"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Şifre"
      />
      <button onClick={handleRegisterCompany}>Şirket Kaydı Yap</button>
      {user && <p>Şirketiniz kaydedildi, {user.companyName}</p>}

      {/* Sayfa yönlendirme linki */}
      <p>
        Zaten hesabınız var mı? <Link to="/">Giriş Yap</Link>
      </p>
      <p>
        Normal kayıt için <Link to="/register">tıklayın</Link>
      </p>
    </div>
  );
};

export default AddTodo;
