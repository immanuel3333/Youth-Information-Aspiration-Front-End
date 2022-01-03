import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Form, Row, Button, Col, Container } from "react-bootstrap";
import axios from "axios";
import { validate } from "parsleyjs";


// import YIABackground from "./assets/image/YIA-Background.png";

function LoginPage() {
  const [email, setEmail] = useState("login");
  const [email_cek, setEmail_cek] = useState("login");
  const [password, setPassword] = useState("login");
  const navigate = useNavigate();
  const url = "https://youth-information-aspiration.herokuapp.com/users/login";

  async function login() {
    console.log(email, password);
    let item = { email, password };

    axios
      .get(url)
      .then((res) => {
        for (var i = res.data.length - 1; i >= 0; i--) {
          if (email == res.data[i].email) {
            console.log(res.data[i].name);
            if (password == res.data[i].password) {
              console.log(res.data[i].email);
              localStorage.setItem("user-info", JSON.stringify(res.data[i]));
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Login Succes',
                showConfirmButton: false,
                timer: 1000
              })
              navigate.push("/");
            }
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }








	// const sectionStyle = {
  //   backgroundImage: `url(${"https://i.ibb.co/kmSGNGK/group-asia-young-creative-people-smart-casual-wear-smiling-arms-crossed-creative-office-workplace-di.png"})`
  // } 
    
    return (
    
  <Container className="p-0 background-image" fluid={true}>
   

  
		{/* <Container className="color-overlay d-flex justify-content-center align-items-center"> */}

 
    
      
    {/* <div className='color-overlay'> */}
    
    <Row>

      <Col>
    <div className='color-overlay d-flex justify-content-center align-items-center col-6'>

    <img src='https://i.ibb.co/K0v0jrr/yia-logo.png' className='img-fluid shadow-4 ' alt='YIA-Logo' />
    
      </div>
      </Col>

      <Col>
    <div className='color-overlay d-flex justify-content-center align-items-center col-6'>



    <Form className="form-rounded p-4" data-parsley-validate="">



  <Form.Group className="mb-3" controlId="formBasicEmail">

  <h2 className="text-center sign-in-text">Welcome!</h2>

  <h7 className="text-center">Please Login First, to Use Our Service</h7>

<br>
</br>
<br>
</br>

      
    <Form.Label className="text-email">Email address</Form.Label>
    <Form.Control className="form-control"
    type="email" 
    onChange={(e) => setEmail(e.target.value)}
    placeholder="Enter email" 
    data-parsley-trigger="change"
    data-parsley-type="email"
    data-parsley-required
    data-parsley-error-message="Email is not valid"
  
    />
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label className="text-password">Password</Form.Label>

    <input
  className="form-control"
    placeholder="Password"
    type="password"
    onChange={(e) => setPassword(e.target.value)}
    data-parsley-error-message="Min password length 8 characters"
    minlength="8"
    data-parsley-required
 
    // data-parsley-required-message="this field is required"
    
    />


  </Form.Group>


  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check className="text-remember" type="checkbox" label="Remember Me" />
     
     
      <br>
      </br>


    <h7 className="forgot-password">Forgot your Password?</h7>
  </Form.Group>
  <div className="d-grid gap-2">
  <Button type="submit" variant="primary" size="md"  onSubmit={login}>
    Sign In
  </Button>

  
  <Button variant="success" size="md">
    Create an Account
  </Button>
  
  
</div>

  </Form>
    </div>
    </Col>
    {/* </div> */}
    
    </Row>``
 </Container>



    )
}

export default LoginPage;