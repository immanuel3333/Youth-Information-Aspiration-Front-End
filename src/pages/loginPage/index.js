// import React, { SytheticEvent, useState } from "react";
// import { useNavigate } from 'react-router-dom';
// import { Form, Row, Button, Col, Container } from "react-bootstrap";
// import axios from "axios";
// import { validate } from "parsleyjs";
// import Swal from "sweetalert2";

// // import YIABackground from "./assets/image/YIA-Background.png";

// function LoginPage() {
//   // const [email, setEmail] = useState("login");
//   // // const [email_cek, setEmail_cek] = useState("login");
//   // const [password, setPassword] = useState("login");
//   // const navigate = useNavigate();
//   // const url = "https://youth-information-aspiration.herokuapp.com/users/login";

//   // const submit = (e: SyntheticEvent) => {

//   }

//   // async function login() {
//   //   console.log(email, password);
//   //   let item = { email, password };

//   //   axios
//   //     .post(url)
//   //     .then((res) => {
//   //       for (var i = res.data.length - 1; i >= 0; i--) {
//   //         if (email == res.data[i].email) {
//   //           console.log(res.data[i].name);
//   //           if (password == res.data[i].password) {
//   //             console.log(res.data[i].email);
//   //             localStorage.setItem("user-info", JSON.stringify(res.data[i]));
//   //             Swal.fire({
//   //               position: 'center',
//   //               icon: 'success',
//   //               title: 'Login Succes',
//   //               showConfirmButton: false,
//   //               timer: 1000
//   //             })
//   //             navigate.push("/");
//   //           }
//   //         }
//   //       }
//   //     })
//   //     .catch((error) => {
//   //       console.log(error);
//   //     });
//   // }

//     return (

//   <Container className="p-0 background-image" fluid={true}>

// 		{/* <Container className="color-overlay d-flex justify-content-center align-items-center"> */}

//     {/* <div className='color-overlay'> */}

//     <Row>

//       <Col>
//     <div className='color-overlay d-flex justify-content-center align-items-center col-6'>

//     <img src='https://i.ibb.co/K0v0jrr/yia-logo.png' className='img-fluid shadow-4 ' alt='YIA-Logo' />

//       </div>
//       </Col>

//       <Col>
//     <div className='color-overlay d-flex justify-content-center align-items-center col-6'>

//     <Form className="form-rounded p-4" data-parsley-validate="">

//   <Form.Group className="mb-3" controlId="formBasicEmail">

//   <h2 className="text-center sign-in-text">Welcome!</h2>

//   <h7 className="text-center">Please Login First, to Use Our Service</h7>

// <br>
// </br>
// <br>
// </br>

//     <Form.Label className="text-email">Email address</Form.Label>
//     <Form.Control className="form-control"
//     type="email"
//     onChange={(e) => setEmail(e.target.value)}
//     placeholder="Enter email"
//     data-parsley-trigger="change"
//     data-parsley-type="email"
//     data-parsley-required
//     data-parsley-error-message="Email is not valid"

//     />

//   </Form.Group>

//   <Form.Group className="mb-3" controlId="formBasicPassword">
//     <Form.Label className="text-password">Password</Form.Label>

//     <input
//   className="form-control"
//     placeholder="Password"
//     type="password"
//     onChange={(e) => setPassword(e.target.value)}
//     data-parsley-error-message="Min password length 8 characters"
//     minlength="8"
//     data-parsley-required

//     // data-parsley-required-message="this field is required"

//     />

//   </Form.Group>

//   <Form.Group className="mb-3" controlId="formBasicCheckbox">
//     <Form.Check className="text-remember" type="checkbox" label="Remember Me" />

//       <br>
//       </br>

//     <h7 className="forgot-password">Forgot your Password?</h7>
//   </Form.Group>
//   <div className="d-grid gap-2">
//   <Button type="submit" variant="primary" size="md"  onSubmit={login}>
//     Sign In
//   </Button>

//   <Button variant="success" size="md">
//     Create an Account
//   </Button>

// </div>

//   </Form>
//     </div>
//     </Col>
//     {/* </div> */}

//     </Row>``
//  </Container>

//     )
// }

// export default LoginPage;

import { login } from "../../actions/auth-action";
import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

function LoginPage(props) {
  const required = (value) => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
  };

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
    <div className="col-md-12">
      <div className="card card-container">
        {/* <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
        /> */}

        <Form onSubmit={handleLogin} ref={form}>
          <div className="form-group">
            <label htmlFor="username">Email</label>
            <Input
              type="text"
              className="form-control"
              name="username"
              value={username}
              onChange={onChangeUsername}
              validations={[required]}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <Input
              type="password"
              className="form-control"
              name="password"
              value={password}
              onChange={onChangePassword}
              validations={[required]}
            />
          </div>

          <div className="form-group">
            <button className="btn btn-primary btn-block" disabled={loading}>
              {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              <span>Login</span>
            </button>
          </div>

          {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
      </div>
    </div>
  );
}

export default LoginPage;
