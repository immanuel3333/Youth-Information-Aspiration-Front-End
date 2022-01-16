import { login } from "../../actions/auth-action";
import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { Row, Col, Container, Form as Form2, Button } from "react-bootstrap";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { useNavigate } from "react-router";


function LoginPage(props) {
  const navigate = useNavigate();
  const required = (value) => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
  };
  const navigate = useNavigate();
  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);

  const dispatch = useDispatch();

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(login(username, password))
        .then(() => {
          props.history.push("/");
          window.location.reload();
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <Container className="background-image" fluid={true}>
      <div className="d-flex justify-content-center align-content-end my-auto">

    

         <div className='d-flex justify-content-center align-items-center col-6'>
        <Form
          onSubmit={handleLogin}
          className="form-rounded p-4 form-login"
          ref={form}
        >
          <div className="form-group mb-3">
          <img src='https://i.ibb.co/K0v0jrr/yia-logo.png' className='img-fluid shadow-4 logo-login' alt='YIA-Logo' />
            <h2 className="text-center sign-in-text">Welcome!</h2>
            <h7 className="text-center text-email d-flex justify-content-center align-content-center">
              Please Login First, to Use Our Service
            </h7>

            <br></br>
            <br></br>

            <Form2.Label className="text-email">Email address</Form2.Label>
            <Input
              type="text"
              className="form-control"
              name="username"
              value={username}
              onChange={onChangeUsername}
              validations={[required]}
            />
          </div>

          <div className="form-group mb-3">
            <Form2.Label className="text-password mb-2">Password</Form2.Label>

            <Input
              type="password"
              className="form-control mb-2"
              name="password"
              value={password}
              onChange={onChangePassword}
              validations={[required]}
            />
          </div>

          <div className="form-group">
            <div className="d-grid gap-2">
            <Button
                className="btn btn-primary btn-block"
                type="submit"
                disabled={loading}
              >
                {loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Login</span>
              </Button>
              <Button type="submit" variant="success" size="md" onClick={() => {
              navigate(`/register`)}}>Create an Account</Button>
            </div>
          </div>

          {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
          <div className="form-group d-grid pt-4">
            <p className="text-email">
              Dont have account?{" "}
              <a href="/register" style={{ textDecoration: "none" }}>
                Create an Account{" "}
              </a>
            </p>
          </div>
        </Form>
        </div>
        
      </div>
    </Container>
  );
}

export default LoginPage;
