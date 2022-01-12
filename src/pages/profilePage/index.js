import React from "react";
import { Form, Row, Button, Col, Container } from "react-bootstrap";
import Footer from "../../components/footer";
import Header from "../../components/header";
import { useSelector } from "react-redux";
import { useNavigate, Navigate } from "react-router-dom";

function ProfilePage() {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  let userTrue;

  if (isLoggedIn) {
    userTrue = user.msg;
  } else {
    userTrue = "belum login";
  }

  return (
    <Container className="p-0 background-image-profile mx-auto" fluid={true}>
      <Header />

      <br />
      <br />
      <br />
      <br />

      <br />

      <Form className="form-rounded1 p-4 color-overlay mx-auto">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <h1 className="text-center-profile">PROFILE</h1>

          <div
            className="img-profile"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src="https://i.ibb.co/FhYKnrP/shawn.png" alt="shawn" />
          </div>

          <div
            className="upload-file"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <input type="file" name="file" />
          </div>
          <br></br>
          <br></br>

          <Row>
            <Col>
              <div class="form-group">
                <Form.Label className="text-email">Fullname</Form.Label>
                <Form.Control
                  type="text"
                  value={userTrue.fullname}
                  placeholder="Enter your name"
                  data-parsley-error-message="This field is required"
                  data-parsley-required
                />
              </div>
            </Col>
            <Col>
              <div class="form-group">
                <Form.Label className="text-email">Username</Form.Label>
                <Form.Control
                  type="text"
                  value={userTrue.username}
                  placeholder="Enter your username"
                  data-parsley-error-message="Min username length 5 characters"
                  minlength="5"
                  data-parsley-required
                />
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Label className="text-email">Country</Form.Label>
              <Form.Control
                type="text"
                value={userTrue.country}
                placeholder="Enter your country"
              />
            </Col>

            <Col>
              <Form.Label className="text-email">Organization</Form.Label>
              <Form.Control
                type="text"
                value={userTrue.organization}
                placeholder="Enter your organization"
              />
            </Col>
          </Row>

          <Form.Label className="text-email">Email address</Form.Label>
          <Form.Control
            type="email"
            value={userTrue.email}
            placeholder="Enter email"
            data-parsley-trigger="change"
            data-parsley-type="email"
            data-parsley-required
            data-parsley-error-message="Email is not valid"
          />

          <Form.Label for="password" className="text-password">
            Change Password
          </Form.Label>
          <Form.Control
            id="password"
            name="password"
            type="password"
            // value={userTrue.password}
            placeholder="Password"
            data-parsley-minlength="8"
            data-parsley-errors-container=".errorspannewpassinput"
            data-parsley-required-message="Please enter your password."
            data-required="true"
            data-parsley-trigger="blur"
            data-parsley-iff="#password-confirm"
            data-parsley-iff-message=""
          />
          <span class="errorspannewpassinput"></span>

          <Form.Label className="text-password" for="password-confirm">
            Confirm Password
          </Form.Label>
          <Form.Control
            type="password"
            id="password-confirm"
            name="password-confirm"
            placeholder="Password"
            data-parsley-minlength="8"
            data-parsley-errors-container=".errorspanconfirmnewpassinput"
            data-parsley-required-message="Please re-enter your password."
            data-parsley-equalto="#password"
            data-parsley-required
            data-required="true"
          />
          <span class="errorspanconfirmnewpassinput"></span>
        </Form.Group>
        <br></br>
        <div className="d-grid gap-4">
          <Button type="submit" variant="info" size="lg">
            UPDATE
          </Button>
        </div>
      </Form>
      <br />
      <br />
      <br />

      <Footer />
    </Container>
  );
}

export default ProfilePage;
