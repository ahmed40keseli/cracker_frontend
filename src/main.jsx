import ReactDOM from "react-dom/client";
import "./css/index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* sayfalar arası geçişleri tetikler  */}
    <Provider store={store}>
      {/* redux toolkitin kullanımı için store ile iletişimi kurar */}
      <App />
      {/* app'i çalıştırır */}
    </Provider>
  </BrowserRouter>
);
