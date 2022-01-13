import React from "react";
import { Card, Button, Row } from "react-bootstrap";

function CardComment(props) {
  let user = [];

  // if(props.user_id.length > 1){
  //   for (let i = 0; i < props.user_id.length; i++) {
  //     user = props.user_id[i];
      
  //   }
  // }else{
  //   user = props.user_id
  // }
  


  console.log(`${user.username} ======================= `);
  return (
    <Row>
      <Card
        style={{
          borderRadius: "16px",
          padding: "12px",
        }}
        className="mb-3 justify-content-between flex-row "
      >
        <Card.Img
          style={{
            height: "40px",
            width: "40px",
            borderRadius: "10px",
            objectFit: "cover",
          }}
          variant="left"
          src="https://kapantech.com/public/img/testi.png"
          className="img-fluid me-3"
        />
        <Card.Body style={{ padding: "0px" }}>
          <Card.Title style={{ fontSize: "16px", fontWeight: "bold" }}>
            {props.username}
          </Card.Title>
          <Card.Text style={{ fontSize: "10px" }}>
            {props.created_at != null || props.created_at != undefined
              ? props.created_at.slice(0, 10)
              : "kosong"}
          </Card.Text>
          <Card.Text style={{ fontSize: "14px" }}>
            {props.comment_description}
          </Card.Text>
        </Card.Body>
      </Card>
    </Row>
  );
}

export default CardComment;
