import React from "react";
import Hero from "../../components";
import Footer from "../../components/footer";
import Header from "../../components/header";
import ListAspiration from "../../components/list/list_aspiraion";
import ListNews from "../../components/list/list_news";
import { Button, Form } from "react-bootstrap";

function MainPage() {
  return (
    <div>
      <div className="container-fluid">
        <Header />
        <br />
        <br />
        <br />
        <Hero />
        <br />
        <br />
        <br />
        <ListNews />
        <br />
        <br />
        <br />
        <ListAspiration />
        <br />
        <br />
        <Button variant="primary">Primary</Button>{" "}
        <Button variant="secondary">Secondary</Button>{" "}
        <Button variant="success">Success</Button>{" "}
        <Button variant="warning">Warning</Button>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Form>

        
        <Footer />
      </div>
    </div>
  );
}

export default MainPage;
