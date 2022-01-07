import React, { useEffect } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import { Col, Card, Button, Placeholder } from "react-bootstrap";
import { getNews } from "../../../actions/news-action";
import { useNavigate, use, Link } from "react-router-dom";

export default function CardNews(props) {
  let navigate = useNavigate();

  var desc = props.news_description;
  var img = props.news_image;

  function handleClik() {
    navigate(`detail-news/${1}`);
  }

  const path = `detail-news/${props._id}`;

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
          <Card.Title>{props.title}</Card.Title>
          <div class></div>
          <Card.Text style={{ fontSize: "14px" }}>
            {desc}
            {/* We, as the youth of Southeast Asia, stand in solidarity with the
            people of Myanmar in condemnation of the Myanmar military junta and
            its security forces’ continuing lawless violence against peaceful
            protesters and ..... */}
          </Card.Text>
          {/* <Link to={path}> */}
            <Button variant="primary" type="submit" href={path}>Read More</Button>{" "}
          {/* </Link> */}
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
