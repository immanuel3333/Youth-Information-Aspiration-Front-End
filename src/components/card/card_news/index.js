import React from "react";
import { Col, Card, Button, Placeholder } from "react-bootstrap";

export default function CardNews() {
  return (
    <Col>
      <Card
        style={{ width: "426px", borderRadius: "", padding: "8px" }}
        className="my-1 card_news"
      >
        <Card.Img
          style={{ height: "170px", borderRadius: "10px" }}
          variant="top"
          src="https://img.beritasatu.com/cache/jakartaglobe/960x620-4/2018/08/myanmar-military.jpg"
        />
        <Card.Body style={{ padding: "0px" }} className="pt-2">
          <Card.Title>
            [Statement] Youth in Response to The Myanmar Military Coup
          </Card.Title>
          <div class></div>
          <Card.Text style={{ fontSize: "14px" }}>
            We, as the youth of Southeast Asia, stand in solidarity with the
            people of Myanmar in condemnation of the Myanmar military junta and
            its security forces’ continuing lawless violence against peaceful
            protesters and .....
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
