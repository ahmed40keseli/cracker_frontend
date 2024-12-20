import React from "react";
import Routers from "./routers/Router";
// import "antd/dist/reset.css"; // veya
// import "antd/dist/antd.css"; // antd versiyonunuza göre
// sayfa yönlendirme dosyası içe aktarılır

function App() {
  return (
    <div>
      <Routers />
      {/* sayfa yönlendirme dosyası çalışır */}
    </div>
  );
}

export default App;
