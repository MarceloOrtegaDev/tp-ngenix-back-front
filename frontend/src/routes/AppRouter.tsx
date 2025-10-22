import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login.js";
import Register from "../pages/Register.js";
import Tasks from "../pages/Tasks.js";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/tasks" element={<Tasks />} />
      </Routes>
    </BrowserRouter>
  );
};
