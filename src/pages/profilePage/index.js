import React, { useEffect } from "react";
import { Form, Row, Button, Col, Container } from "react-bootstrap";
import Footer from "../../components/footer";
import Header from "../../components/header";
import { useDispatch, useSelector } from "react-redux";
// import CheckButton from "react-validation/build/button";
import { useNavigate, Navigate } from "react-router-dom";
import { updateUserById } from "../../actions/user-action";

function ProfilePage() {
  const userStorage = JSON.parse(localStorage.getItem("user")).msg;
  const userId = userStorage._id;
  // console.log(userId);
  const dispatch = useDispatch();
  // const userData = useSelector((state) => state.user);
  // const { user } = userData;

  useEffect(() => {
    dispatch(updateUserById(userId));
  }, [dispatch]);

  return (
    <Container className="p-0 background-image-profile mx-auto" fluid={true}>
      <Header />

      <br />
      <br />
      <br />
      <br />

      <br />

      <Form className="form-rounded1 p-4 color-overlay mx-auto">
        <div>
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
              <img src="https://i.ibb.co/Jy90Qh5/user.png" alt="user" className="user-logo" />
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
                <Form.Control type="text" placeholder="Enter your country" />
              </Col>

              <Col>
                <Form.Label className="text-email">Organization</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your organization"
                />
              </Col>
            </Row>

            <Form.Label className="text-email">Email address</Form.Label>
            <Form.Control
              type="email"
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
            <Button type="submit" variant="info" size="lg" onClick={__dirname}>
              UPDATE
            </Button>
          </div>
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
