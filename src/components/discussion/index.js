import React from "react";
import { Card, Button, Form } from "react-bootstrap";

export default function AspirationDiscussion() {
  return (
    <Card className="container" style={{ width: "50rem" }}>
      <Card.Title>Discussion(4)</Card.Title>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Aspiration Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="Enter Your Aspiration Description"
          />
        </Form.Group>
        <Button style={{ float: "right" }} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Card>
  );
}
