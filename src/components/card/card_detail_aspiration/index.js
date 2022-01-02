import React from "react";
import { Card, Button, Badge } from "react-bootstrap";

export default function CardDetailAspirasi() {
  return (
    <Card style={{ width: "18rem" }}>
      <div className="row text-center">
        <div className="col-6">John Malik</div>
        <div className="col-6">25/100</div>
      </div>
      <div className="row text-center">
        <div className="col-4">
          <p className="px-1" style={{ fontSize: "10px" }}>
            Human Right
          </p>
        </div>
        <div className="col-4">
          <p className="px-1" style={{ fontSize: "10px" }}>
            3.14 AM
          </p>
        </div>
        <div className="col-4">
          <p className="px-1" style={{ fontSize: "10px" }}>
            27 Agustus 2021
          </p>
        </div>
      </div>
      <Card.Title>Deal with logical fallacy Organization</Card.Title>
      <Card.Text>
        Logical Fallacy or logical error is a reason or argument that is wrong
        and produces a misconception. how about you?
      </Card.Text>
    </Card>
  );
}
