import React from "react";
import Hero from "../../components/hero";
import Footer from "../../components/footer";
import Header from "../../components/header";
import ListNews from "../../components/list/list_news";
import { Button, Container } from "react-bootstrap";
import ListAspirationMainPage from "../../components/list/list_aspiration_mainpage";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function MainPage() {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleClick = () => {
    Swal.fire({
      position: "top-center",
      icon: "warning",
      title: "Login First!",
      showConfirmButton: false,
      timer: 2000,
    });
    navigate("/login");
  };
  return (
    <Container fluid style={{ width: "100%", padding: "0" }} className="mx-0">
      <Header />
      <br />
      <br />
      <br />
      <Hero />
      <br />
      <br />
      <ListNews />
      <br />
      <br />
      <br />
      <ListAspirationMainPage />
      {isLoggedIn ? (
        <div className="d-md-flex justify-content-md-end p-4">
          <Button
            onClick={() => {
              window.location.href = "/aspiration";
            }}
          >
            See More
          </Button>
        </div>
      ) : (
        <div className="d-md-flex justify-content-md-end p-4">
          <Button onClick={handleClick}>See More</Button>
        </div>
      )}

      <br />
      <br />
      <Footer />
    </Container>
  );
}

export default MainPage;
