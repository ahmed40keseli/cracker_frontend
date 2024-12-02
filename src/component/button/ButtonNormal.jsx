// *** bu sayfada isteğim css destekli buttonu oluşturabilirim ve istediğim sayfada kullanabilirim

import React from "react";
import "./button.css";
// ayarlamalar için css içe aktarımı

function ButtonNormal({ onClick, children }) {
  // fonksiyon ismi açıklayıcı olmalı farklı sayfalarda içerim yapılacak
  return <button onClick={onClick}>{children}</button>; // children özeldir farklı dosyda kullanımı sağlar
}

export default ButtonNormal; // paylaşım için lazımdır
