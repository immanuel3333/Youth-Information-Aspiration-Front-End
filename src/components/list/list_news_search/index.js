import React, { useEffect } from "react";
// import news from "../../../data/json/news.json";
import CardNews from "../../card/card_news";
import { Row, Col, Spinner, Container } from "react-bootstrap";
import { getNews } from "../../../actions/news-action";
import { useDispatch, useSelector } from "react-redux";
import CardNewsSearch from "../../card/card_news_search";

function ListNewsSearch() {
  const dispatch = useDispatch();
  const newsData = useSelector((state) => state.news);
  const { news } = newsData;

  if (news.length != 0) {
    news.length = 3;
  } else {
    news.length = 0;
  }

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  console.log(news);
  if (news.length == 3) {
    return (
      <Container>
        <h3>Latest Article</h3>
        <Col>
          {news.map((res) => {
            return <CardNewsSearch {...res} key={res._id} />;
          })}
        </Col>
      </Container>
    );
  } else {
    return (
      <Row className="px-4 justify-content-between">
        <h3>Some Latest Article</h3>
        <Spinner animation="border" role="status" className="mx-auto">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Row>
    );
  }
}

export default ListNewsSearch;
