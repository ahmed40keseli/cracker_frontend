import React from "react";
import Routers from "./routers/Router";

function App() {
  return (
    <div>
      <Routers />
    </div>
  );
}

export default App;

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useSelector } from "react-redux";
// import Login from "./pages/login";
// import Register from "./pages/Register";
// import CompanyRegister from "./pages/companyRegister";
// // import TodoPage from "./pages/Task";
// import FormComponent from "./component/FormComponent";

// function App() {
//   return (
//     <div>
//       <Routes>
//         <Route path="/createTask" element={<FormComponent />} />
//         <Route path="/" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/Cregister" element={<CompanyRegister />} />
//         {/* <Route path="/createTask" element={<TodoPage />} /> */}
//       </Routes>
//     </div>
//   );
// }

// export default App;
// // app'in paylaşılmasını sağlar
