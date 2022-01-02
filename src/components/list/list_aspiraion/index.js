import React from "react";
import CardAspirasi from "../../card/card_aspirasi";
import Aspiration from "../../../data/json/aspiration.json";
import { Row, Col } from "react-bootstrap";

export default function ListAspiration() {
  return (
    <Row className='px-4'>
      <h4>Some Popular Aspiration</h4>
      {Aspiration.map((value) => {
        return (
          <Col>
            <CardAspirasi key={value.category_id} {...value} />
          </Col>
        );
      })}
    </Row>
  );
}
