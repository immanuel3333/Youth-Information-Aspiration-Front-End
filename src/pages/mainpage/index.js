import React from "react";
import Hero from "../../components";
import Footer from "../../components/footer";
import Header from "../../components/header";
import ListAspiration from "../../components/list/list_aspiraion";
import ListNews from "../../components/list/list_news";

function MainPage() {
  return (
    <div>
      <div className="container-fluid">
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
        <ListAspiration/>
        <br />
        <br />
        <Footer />
      </div>
    </div>
  );
}

export default MainPage;
