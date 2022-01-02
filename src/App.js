import "../src/assets/css/style.css";
import MainPage from "./pages/mainpage";
import LoginPage from "./pages/loginPage";
import SignUpPage from "./pages/signUpPage";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import AspirationPage from "./pages/aspiration";
import DetailAspirationPage from "./pages/detail_aspiration";
import DetailNewsPage from "./pages/detail_news";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<SignUpPage />} />
        <Route path="/aspiration" element={<AspirationPage />} />
        <Route path="/detail-aspiration" element={<DetailAspirationPage />} />
        <Route path="/detail-news" element={<DetailNewsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
