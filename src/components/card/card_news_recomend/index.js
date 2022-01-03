import React from "react";
import { Col, Card, Button, Badge } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";

export default function CardNewsRecomend() {
  let navigate = useNavigate();

  function handleKlik() {
    navigate("/");
  }
  return (
    <Col>
      <Link to="/">
      <Card style={{ width: "100%",border:"0px" }} className="mt-4">
        <Card.Img
          style={{ height: "100px", borderRadius: "10px", objectFit: "cover"}}
          variant="top"
          src="https://img.beritasatu.com/cache/jakartaglobe/960x620-4/2018/08/myanmar-military.jpg"
        />
        <Card.Body>
          <Card.Title>
            [Statement] Youth in Indonesia want build a mosque in myanmar
          </Card.Title>
          <Badge bg="secondary" className="me-2">
            Human Right
          </Badge>
        </Card.Body>
      </Card>
      </Link>
    </Col>
  );
}
