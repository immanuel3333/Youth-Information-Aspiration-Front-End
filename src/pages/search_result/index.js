import React from "react";
import Footer from "../../components/footer";
import news from "../../data/json/news.json";

import Header from "../../components/header";
import ListNewsSearch from "../../components/list/list_news_search";
import { Container, Pagination } from "react-bootstrap";
import CardNews from "../../components/card/card_news";
import List_Carousel_Search from "../../components/caroussel/list_carousel";

function SearchResult() {
  let active = 1;
  let items = [];
  for (let number = 1; number <= news.length; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }
  return (
    <Container>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <List_Carousel_Search />
      <br />
      <br />
      
     
      <ListNewsSearch />
      <br />
      <Pagination className="mx-auto d-flex justify-content-center">
        {items}
      </Pagination>
      <br />
      <Footer />
    </Container>
  );
}

export default SearchResult;
