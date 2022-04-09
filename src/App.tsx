import React from "react";
import Logo from "./components/Logo";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login";
import ProfilePage from "./pages/Profile";

const App: React.FC = () => {
  return (
    <>
      <Logo>ONLY.</Logo>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="profile" element={<ProfilePage />} />
      </Routes>
    </>
  );
};

export default App;
