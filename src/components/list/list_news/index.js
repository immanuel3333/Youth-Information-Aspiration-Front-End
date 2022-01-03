import React, { useEffect } from "react";
import CardNews from "../../card/card_news";
import News from "../../../data/json/news.json";
import { Row, Col, Spinner } from "react-bootstrap";
import { useSelector, useDispatch, connect } from "react-redux";
import { getNews } from "../../../actions/news-action";

export default function ListNews() {
  const dispatch = useDispatch();
  const newsData = useSelector((state) => state.news);
  const { news } = newsData;

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  // const {news} = props.news;
  console.log(news);
  if (news.length != 0) {
    return (
      <Row className="px-4 justify-content-between">
        <h3>Some Latest Article</h3>
        {news.map((e) => {
          return <CardNews key={e.__v} {...e} />;
        })}
      </Row>
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
