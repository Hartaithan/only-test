import React from "react";
import Logo from "./components/Logo";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/Login";
import ProfilePage from "./pages/Profile";

const App: React.FC = () => {
  return (
    <>
      <Logo>ONLY.</Logo>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </>
  );
};

export default App;
