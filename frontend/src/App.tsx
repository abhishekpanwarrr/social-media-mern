import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/loginpage/LoginPage";
import HomePage from "./pages/homepage";
import ProfilePage from "./pages/profilepage";
import { useSelector } from "react-redux";
import { CssBaseline, PaletteMode, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import { useMemo } from "react";

const App = () => {
  const mode = useSelector((state: { mode: PaletteMode }) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector((state) => state.token));
  console.log("isAuth", isAuth);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route
            path="/"
            element={isAuth ? <Navigate to="/home" /> : <LoginPage />}
          />
          <Route
            path="/home"
            element={isAuth ? <HomePage /> : <Navigate to="/" />}
          />
          <Route
            path="/profile/:userId"
            element={isAuth ? <ProfilePage /> : <Navigate to="/" />}
          />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
