import React, { useEffect } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import { Col, Card, Button, Placeholder, Badge } from "react-bootstrap";
import { getNews } from "../../../actions/news-action";

export default function CardNews(props) {
  var desc = props.news_description;
  var img = props.news_thumbnail;
  var category = props.category_id;

  var categorynew = [];

  for (let i = 0; i < category.length; i++) {
    var categoryI = category[i];
    console.log(categoryI.category_name);
    categorynew.fill(categoryI);
  }

  return (
    <Col>
      <Card
        style={{
          height: "350px",
          borderRadius: "",
          padding: "8px",
        }}
        className="my-1 card_news"
      >
        <Card.Img
          style={{ height: "170px", borderRadius: "10px", objectFit: "cover" }}
          variant="top"
          src={img}
          className="img-fluid"
        />
        <Card.Body style={{ padding: "0px" }} className="pt-2">
          <Card.Title>{props.news_title}</Card.Title>
          <Card.Text style={{ fontSize: "14px" }}>
            {desc}
          </Card.Text>
          <a href="/detail-news">Read More</a>
        </Card.Body>
      </Card>

      {/* Ini Skeleton */}
      {/* <Card style={{ width: "426px", borderRadius: "", padding: "8px" }}
        className="my-1 card_news">
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{" "}
            <Placeholder xs={6} /> <Placeholder xs={8} />
          </Placeholder>
          <Placeholder.Button variant="primary" xs={6} />
        </Card.Body>
      </Card> */}
    </Col>
  );
}
