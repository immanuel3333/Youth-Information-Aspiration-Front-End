import React from "react";
import { Card, Button, Badge } from "react-bootstrap";

export default function CardDetailAspirasi(props) {
  console.log(typeof props.data.created_at);
  return (
    <Card style={{ width: "18rem" }}>
      <div className="row text-center pb-3">
        {props.data.user_id ? (
          props.data.user_id.map((e) => {
            return (
              <div style={{ fontSize: "14px" }}>
                <b>Created by:</b>
                {e.fullname}
              </div>
            );
          })
        ) : (
          <p></p>
        )}
      </div>
      <div className="row text-center">
        <div className="col-6">
          {props.data.category_id ? (
            props.data.category_id.map((e) => {
              return (
                <p className="px-1" style={{ fontSize: "10px" }}>
                  {e.category_name}
                </p>
              );
            })
          ) : (
            <p></p>
          )}
        </div>
        <div className="col-6">
          <p className="px-1" style={{ fontSize: "10px" }}>
            {props.data.created_at}
          </p>
        </div>
      </div>
      <Card.Title>{props.data.aspiration_title}</Card.Title>
      <Card.Text>{props.data.aspiration_description}</Card.Text>
    </Card>
  );
}
