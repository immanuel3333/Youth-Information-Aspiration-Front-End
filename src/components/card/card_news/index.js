import React, { useEffect } from "react";

import { Col, Card, Button, Placeholder, Badge } from "react-bootstrap";
import { useNavigate, use, Link } from "react-router-dom";

export default function CardNews(props) {
  let navigate = useNavigate();

  var desc = props.news_description;
  var title = props.news_title;
  // desc.slice(0,15)

  var img = props.news_image;
  var thumb = `https://youth-information-aspiration.herokuapp.com/${props.news_thumbnail}`;

  const path = `detail-news/${props._id}`;

  return (
    <Col>
      <Card
        style={{
          height: "350px",
          borderRadius: "16px",
          padding: "8px",
          width: "40vh",
        }}
        className="my-1 card_news"
      >
        <Card.Img
          style={{ height: "170px", borderRadius: "10px", objectFit: "cover" }}
          variant="top"
          src={thumb}
          className="img-fluid"
        />
        <Card.Body style={{ padding: "0px" }} className="pt-2">
          <Card.Title style={{ fontSize: "16px", fontWeight: "bold" }}>
            {`${title.slice(0, 80)} ....`}
          </Card.Title>
          <Card.Text style={{ fontSize: "14px" }}>
            {`${desc.slice(0, 70)} ....`}
          </Card.Text>
          <Button variant="success" type="submit" href={path}>
            Read More
          </Button>{" "}
        </Card.Body>
      </Card>

      {/* Ini Skeleton */}
      {/* <Card style={{ width: "326px", height: "170px", borderRadius: "", padding: "8px" }}
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
