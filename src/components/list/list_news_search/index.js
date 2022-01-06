import React from "react";
import news from "../../../data/json/news.json";
import CardNews from "../../card/card_news";
import { Row, Col, Spinner, Container } from "react-bootstrap";

function ListNewsSearch() {
  return (
    <Container>
    <h3>Latest Article</h3>
      <Col >
        {news.map((res) => {
          return <CardNews {...res} />;
        })}
      </Col>
    </Container>
  );
}

export default ListNewsSearch;
