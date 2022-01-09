import "../src/assets/css/style.css";
import MainPage from "./pages/mainpage";
import LoginPage from "./pages/loginPage";
import SignUpPage from "./pages/signUpPage";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AspirationPage from "./pages/aspiration";
import DetailAspirationPage from "./pages/detail_aspiration";
import DetailNewsPage from "./pages/detail_news";
import SearchResult from "./pages/search_result";
import AboutUsPage from "./pages/aboutUs";
import NotFoundPage from "./pages/not_found";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<SignUpPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/aspiration" element={<AspirationPage />} />
        <Route
          path="/detail-aspiration/:id"
          element={<DetailAspirationPage />}
        />
        <Route path="/detail-news" element={<DetailNewsPage />} />
        <Route path="/detail-news/:id" element={<DetailNewsPage />} />
        <Route path="/search" element={<SearchResult />}>
          <Route path="/search/:search" element={<SearchResult />} />
        </Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
