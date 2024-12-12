import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  // sayfalar arası geçiş ve session(token) için kullanılır
  <BrowserRouter>
    {/* app dosyası strore ile sarılıyor store ile iletişime geçiyor */}
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
