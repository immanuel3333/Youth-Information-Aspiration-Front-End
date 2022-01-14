import React, { useRef, useState } from "react";
import { Form, Row, Button, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import Form2 from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import { register } from "../../actions/auth-action";
const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

function SignUpPage() {
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
  const dispatch = useDispatch();

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

  const handleRegister = (e) => {
    e.preventDefault();

    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(
        register(
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

  return (
    <Container className="p-0 background-image" fluid={true}>
      <div className="color-overlay d-flex justify-content-center align-items-center">
        <Form2 onSubmit={handleRegister} ref={form} className="form-rounded p-4">
          {!successful && (
            <div>
              <img src='https://i.ibb.co/K0v0jrr/yia-logo.png' className='img-fluid shadow-4 logo-register' style={{width: 400, height: 200}} alt='YIA-Logo' />
              <h2 className="text-center sign-in-text">Welcome!</h2>
              <h7 className="text-center sign-in-text2">Please register your account first before use our service</h7>
             
              <br></br>
              <Row>
                <Col>
              <div className="form-group text-email">
                <label htmlFor="fullname">Fullname</label>
                <Input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                  name="fullname"
                  value={fullname}
                  onChange={onChangeFullname}
                  validations={[required]}
                />
              </div>
              </Col>
              <Col>
              <div className="form-group text-email">
                <label htmlFor="username">Username</label>
                <Input
                  type="text"
                  className="form-control"
                  placeholder="Enter your username"
                  name="username"
                  value={username}
                  onChange={onChangeUsername}
                  validations={[required]}
                />
              </div>
              </Col>
              </Row>

              <Row>
              <Col>
              <div className="form-group text-email">
                <label htmlFor="country">Country</label>
                <Input
                  type="text"
                  className="form-control"
                  placeholder="Enter your country"
                  name="country"
                  value={country}
                  onChange={onChangeCountry}
                  validations={[required]}
                />
              </div>
              </Col>

              <Col>
              <div className="form-group text-email">
                <label htmlFor="organitation">Organization</label>
                <Input
                  type="text"
                  className="form-control"
                  placeholder="Enter your organization"
                  name="organitation"
                  value={organitation}
                  onChange={onChangeOrganitation}
                  validations={[required]}
                />
              </div>
              </Col>
              </Row>

              <div className="form-group text-email">
                <label htmlFor="email">Email Address</label>
                <Input
                  type="text"
                  className="form-control"
                  placeholder="Enter your email"
                  name="email"
                  value={email}
                  onChange={onChangeEmail}
                  validations={[required, validEmail]}
                  style={{width: "100%"}}
                />
              </div>

              


              <div className="form-group text-password">
                <label htmlFor="password">Password</label>
                <Input
                  type="password"
                  className="form-control"
                  placeholder="Enter your password"
                  name="password"
                  value={password}
                  onChange={onChangePassword}
                  validations={[required, vpassword]}
                />
              </div>

              

              <br></br>
              <div className="form-group d-grid gap-4">
                <Button type="submit" variant="success" size="lg">Create an Account</Button>
                <div className="text-center text-email">
              <h6>Already Have an Account?</h6>
              <Link to="/login">Sign In</Link>
            </div>
              </div>
            </div>
          )}

          {message && (
            <div className="form-group">
              <div
                className={
                  successful ? "alert alert-success" : "alert alert-danger"
                }
                role="alert"
              >
                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form2>
        {/* <Form
          className="form-rounded p-4"
          data-parsley-excluded="input[type=button], input[type=submit], input[type=reset], input[type=hidden], [disabled], :hidden"
          data-parsley-trigger="keyup"
          data-parsley-validate=""
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <h2 className="text-center sign-in-text">Welcome!</h2>

            <h7 className="text-center">
              Please register your account First before use our service
            </h7>

            <br></br>
            <br></br>

            <Form.Label className="text-email">Fullname</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              data-parsley-error-message="This field is required"
              data-parsley-required
            />

            <Form.Label className="text-email">Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your username"
              data-parsley-error-message="Min username length 5 characters"
              minlength="5"
              data-parsley-required
            />

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
              Password
            </Form.Label>
            <Form.Control
              id="password"
              name="password"
              type="password"
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

            <Form.Label className="text-email">Country</Form.Label>
            <Form.Control type="text" placeholder="Enter your country" />

            <Form.Label className="text-email">Organization</Form.Label>
            <Form.Control type="text" placeholder="Enter your organization" />
          </Form.Group>

          <br></br>
          <div className="d-grid gap-4">
            <Button type="submit" variant="success" size="lg">
              Create an Account
            </Button>
            <div className="text-center">
              <h6>Already Have an Account?</h6>
              <Link to="/login">Sign In</Link>
            </div>
          </div>
        </Form> */}
      </div>
    </Container>
  );
}

export default SignUpPage;
