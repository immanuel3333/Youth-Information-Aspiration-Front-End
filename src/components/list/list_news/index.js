import React, { useEffect } from "react";
import CardNews from "../../card/card_news";
import { Row, Col, Spinner } from "react-bootstrap";
import { useSelector, useDispatch, connect } from "react-redux";
import { getNews } from "../../../actions/news-action";


export default function ListNews() {
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
      <Row className="px-5 m-0 justify-content-center d-flex">
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
