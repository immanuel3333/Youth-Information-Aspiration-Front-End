import React from "react";
import { Form, Row, Button, Col, Container } from "react-bootstrap";


// import YIABackground from "./assets/image/YIA-Background.png";

function LoginPage() {
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

    <Form className="form-rounded p-4">
  <Form.Group className="mb-3" controlId="formBasicEmail">

  <h2 className="text-center sign-in-text">Welcome!</h2>

  <h7 className="text-center">Please Login First, to Use Our Service</h7>

<br>
</br>
<br>
</br>

    <Form.Label className="text-email">Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label className="text-password">Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check className="text-remember" type="checkbox" label="Remember Me" />
      <br>
      </br>
    <h7 className="forgot-password">Forgot your Password?</h7>
  </Form.Group>
  <div className="d-grid gap-2">
  <Button variant="primary" size="md">
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
    
    </Row>
 </Container>



    )
}

export default LoginPage;