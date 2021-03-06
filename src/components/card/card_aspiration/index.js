import React from "react";
import { Card, Button, Badge } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function CardAspiration(props) {
  // console.log(props);
  let navigate = useNavigate();
  const getName = props.user_id.map((e) => {
    return e;
  });
  const getCategoryName = props.category_id.map((e) => {
    return e.category_name;
  });
  // console.log(props);
  // console.log(getCategoryName);
  return (
    <Card className="my-1">
      <Card.Header as="h5">{props.aspiration_title}</Card.Header>
      <Card.Body>
        <div className="py-1 d-flex justify-content-between">
          <Badge bg="secondary">{getCategoryName}</Badge>
        </div>
        <div className="row py-1">
          <div className="col-md-2">{getName[0].username}</div>
          <div className="col-md-2">{props.created_at.slice(0, 10)}</div>
        </div>
        <div className="d-flex justify-content-between">
          <p>Deskripsi Aspirasi :</p>
          <Button
            variant="outline-primary"
            onClick={() => {
              navigate(`/detail-aspiration/${props._id}`);
            }}
          >
            Join
          </Button>
        </div>
        <div className="py-1 d-flex justify-content-between">
          <Card.Text>{props.aspiration_description.slice(0, 50)}...</Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
}
