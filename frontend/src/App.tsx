import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/loginpage/LoginPage";
import HomePage from "./pages/homepage";
import ProfilePage from "./pages/profilepage";

const App = () => {
  return <BrowserRouter>
  <Routes>
    <Route path="/" element={<LoginPage />} />
    <Route path="/home" element={<HomePage />} />
    <Route path="/profile/:userId" element={<ProfilePage />} />
  </Routes>
  </BrowserRouter>
};

export default App;
