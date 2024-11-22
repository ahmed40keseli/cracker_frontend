import React from "react";
import { Link } from "react-router-dom";

const NavigationLinks = () => {
  return (
    <div>
      <p>
        Hesabınız var mı? <Link to="/">Giriş Yap</Link>
      </p>
      <p>
        Şirket kaydı yapmak için <Link to="/Cregister">tıklayın</Link>
      </p>
    </div>
  );
};

export default NavigationLinks;
