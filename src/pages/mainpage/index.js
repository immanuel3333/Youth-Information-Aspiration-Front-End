import React from "react";
import Hero from "../../components";
import Footer from "../../components/footer";
import Header from "../../components/header";
import ListAspiration from "../../components/list/list_aspiraion";
import ListNews from "../../components/list/list_news";
import { Container } from "react-bootstrap";

function MainPage() {
  return (
    <Container
      fluid
      style={{ width: "100%", padding:"0" }}
      className="pr-0"
    >
      <Header />
      <br />
      <br />
      <br />
      <Hero />
      <br />
      <br />
      <br />
      <ListNews />
      <br />
      <br />
      <br />
      <ListAspiration />
      <br />
      <br />
      <Footer />
    </Container>
  );
}

export default MainPage;
