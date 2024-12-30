import React from "react";
import "./HomeForm.css";

function HomeForm() {
  return (
    <div class="container">
      <div class="navbar">
        <div class="logo">
          <a href="#">LOGO</a>
        </div>
        <ul>
          <li>
            <a class="active" href="#">
              Ana Sayfa
            </a>
          </li>
          <li>
            <a href="#">yapılan görevler</a>
          </li>
          <li>
            <a href="#">Görevliler</a>
          </li>
          <li>
            <a href="#">görevler</a>
          </li>
          <li>
            <a href="#">profil</a>
          </li>
          <li>
            <a href="#">İletişim</a>
          </li>
          <li>
            <a href="#">Giriş</a>
          </li>
        </ul>
      </div>
      <div class="center">
        <h1>WEB Sitesi</h1>
        <h2>Hoşgeldiniz</h2>
        <div class="buttons">
          <button>Giriş İşlemleri</button>
          <button>Daha Fazla</button>
        </div>
      </div>
    </div>
  );
}

export default HomeForm;
