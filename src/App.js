import React from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Mask>
                {" "}
                <HomePage />
              </Mask>
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export function Mask(props) {
  const data = localStorage.getItem("users");
  if (data == null) {
    return <Navigate to="/register" />;
  } else {
    return props.children;
  }
}
export default App;
