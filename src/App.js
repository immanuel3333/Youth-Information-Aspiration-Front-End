import "../src/assets/css/style.css";
import MainPage from "./pages/mainpage";
import LoginPage from "./pages/loginPage";
import SignUpPage from "./pages/signUpPage";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import AspirationPage from "./pages/aspiration";
import AboutUsPage from "./pages/aboutUs";
import DetailAspirationPage from "./pages/detail_aspiration";
import DetailNewsPage from "./pages/detail_news";
import SearchResult from "./pages/search_result";
import NotFoundPage from "./pages/not_found";
import CategorySearchPage from "./pages/search_aspiration";
import ProfilePage from "./pages/profilePage";
import React from "react";
import io from "socket.io-client";
import { toast } from "react-toastify";

function App() {
  const [socket, setSocket] = React.useState(null);

  const setupSocket = () => {
    const newSocket = io("https://youth-information-aspiration.herokuapp.com");

    newSocket.on("disconnect", () => {
      setSocket(null);
      setTimeout(setupSocket, 3000);
      toast.warning("error", "Socket Disconnected!");
    });

    newSocket.on("connect", () => {
      toast.success("success", "Socket Connected!");
    });

    setSocket(newSocket);
  };

  React.useEffect(() => {
    setupSocket();
    //eslint-disable-next-line
  }, []);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<SignUpPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/aspiration" element={<AspirationPage />} />
        <Route path="/searchAspiration" element={<CategorySearchPage />}>
          <Route
            path="/searchAspiration/:category_id"
            element={<CategorySearchPage />}
          />
        </Route>
        <Route
          path="/detail-aspiration/:id"
          element={<DetailAspirationPage socket={socket} />}
        />
        <Route path="/detail-news" element={<DetailNewsPage />} />
        <Route path="/detail-news/:id" element={<DetailNewsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/search" element={<SearchResult />}>
          <Route path="/search/:search" element={<SearchResult />} />
        </Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
