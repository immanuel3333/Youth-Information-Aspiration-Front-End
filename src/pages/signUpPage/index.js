import React from "react";
import { Form, Row, Button, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";


function signUpPage () {

return (

<Container className="p-0 background-image" fluid={true}>
   

  
   {/* <Container className="color-overlay d-flex justify-content-center align-items-center"> */}

   


 


<div className='color-overlay d-flex justify-content-center align-items-center'>

<Form className="form-rounded p-4">
<Form.Group className="mb-3" controlId="formBasicEmail">

<h2 className="text-center sign-in-text">Welcome!</h2>

<h7 className="text-center">Please register your account First before use our service</h7>

<br>
</br>
<br>
</br>



<Form.Label className="text-email">Fullname</Form.Label>
<Form.Control type="text" placeholder="Enter your name" />

<Form.Label className="text-email">Username</Form.Label>
<Form.Control type="text" placeholder="Enter your username" />

<Form.Label className="text-email">Email address</Form.Label>
<Form.Control type="email" placeholder="Enter email" />

<Form.Label className="text-password">Password</Form.Label>
<Form.Control type="password" placeholder="Password" />

<Form.Label className="text-password">Confirm Password</Form.Label>
<Form.Control type="password" placeholder="Password" />


<Form.Label className="text-email">Country</Form.Label>
<Form.Control type="text" placeholder="Enter your country" />

<Form.Label className="text-email">Organization</Form.Label>
<Form.Control type="text" placeholder="Enter your organization" />
</Form.Group>

<br>
</br>
<div className="d-grid gap-4">
<Button variant="success" size="lg">
Create an Account
</Button>
<div  className="text-center">
<h6>Already Have an Account?</h6>
<Link to="/login">Sign In</Link>
</div>
</div>

</Form>
</div>




</Container>
)
}

export default signUpPage;