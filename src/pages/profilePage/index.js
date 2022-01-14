import React, { useRef, useState } from "react";
import { Form, Row, Button, Col, Container } from "react-bootstrap";
import Footer from "../../components/footer";
import Header from "../../components/header";
import { useDispatch, useSelector } from "react-redux";
// import CheckButton from "react-validation/build/button";
import { useNavigate, Navigate } from "react-router-dom";
import { updateProfile } from "../../actions/auth-action";

function ProfilePage() {
  let userTrue;
  const { isLoggedIn } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const form = useRef();
  const checkBtn = useRef();
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [country, setCountry] = useState("");
  const [organitation, setOrganitation] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState(false);

  const { message } = useSelector((state) => state.message);

  

  if (isLoggedIn) {
    userTrue = user.msg;
  } else {
    userTrue = "belum login";
  }

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangeFullname = (e) => {
    const fullname = e.target.value;
    setFullname(fullname);
  };

  const onChangeCountry = (e) => {
    const country = e.target.value;
    setCountry(country);
  };

  const onChangeOrganitation = (e) => {
    const organitation = e.target.value;
    setOrganitation(organitation);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleUpdateProfile = (e) => {
    e.preventDefault();

    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(
        updateProfile(
          fullname,
          username,
          email,
          country,
          organitation,
          password,
          "61d9c6144be64efed0e5ec7e"
        )
      )
        .then(() => {
          setSuccessful(true);
        })
        .catch(() => {
          setSuccessful(false);
        });
    }
  };



  if (isLoggedIn) {
    userTrue = user.msg;
  } else {
    userTrue = "belum login";
  }

  function selectUser(id) {
    let item = users[id - 1];
    setFullname(item.fullname);
    setUsername(item.username);
    setOrganization(item.organization);
    setEmail(item.email);
    setPassword(item.password);
    setUserId(item.id);
  }

  function updateUser() {
    let item = { fullname, username, organization, email, password };
    console.warn("item", item);
    fetch(`https://youth-information-aspiration.herokuapp.com/users/${user._id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp);
        getUsers();
      });
    });
  }

  return (
    <Container className="p-0 background-image-profile mx-auto" fluid={true}>
      <Header />

      <br />
      <br />
      <br />
      <br />

      <br />

      <Form
        className="form-rounded1 p-4 color-overlay mx-auto"
        onSubmit={handleUpdateProfile}
        ref={form}
      >
        {!successful && (
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
                <input type="file" name="file" value={userTrue.image}/>
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
                      onChange={onChangeFullname}
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
                      onChange={onChangeUsername}
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
                    onChange={onChangeCountry}
                  />
                </Col>

                <Col>
                  <Form.Label className="text-email">Organization</Form.Label>
                  <Form.Control
                    type="text"
                    value={userTrue.organization}
                    placeholder="Enter your organization"
                    onChange={onChangeOrganitation}
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
                onChange={onChangeEmail}
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
                onChange={onChangePassword}
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
                onChange={onChangePassword}
              />
              <span class="errorspanconfirmnewpassinput"></span>
            </Form.Group>
            <br></br>
            <div className="d-grid gap-4">
              <Button
                type="submit"
                variant="info"
                size="lg"
                onClick={updateUser}
              >
                UPDATE
              </Button>
            </div>
          </div>
        )}
      </Form>
      <br />
      <br />
      <br />

      <Footer />
    </Container>
  );
}

export default ProfilePage;
