import React from "react";
import { Card, Button, Badge } from "react-bootstrap";

export default function CardAspiration(props) {
  console.log(props);
  return (
    <Card className="my-1">
      <Card.Header as="h5">{props.aspiration_title}</Card.Header>
      <Card.Body>
        <div className="py-1 d-flex justify-content-between">
          <Badge bg="secondary">{props.category_name}</Badge> <div>94/100</div>
        </div>
        <div className="row py-1">
          <div className="col-md-2">{props.name}</div>
          <div className="col-md-2">12.04</div>
          <div className="col-md-2">27 Agustus 2021</div>
        </div>
        <div className="d-flex justify-content-between">
          <p>Deskripsi Aspirasi :</p>
          <Button type="submit" href="/detail-aspiration">
            Join
          </Button>{" "}
        </div>
        <div className="py-1 d-flex justify-content-between">
          <Card.Text>{props.aspiration_description}</Card.Text>
          <div>30</div>
        </div>
      </Card.Body>
    </Card>
  );
}