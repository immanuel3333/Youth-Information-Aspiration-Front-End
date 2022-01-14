import React, { useEffect, useState } from "react";
import { Form, Row, Button, Col, Container } from "react-bootstrap";
import Footer from "../../components/footer";
import Header from "../../components/header";
import { useDispatch, useSelector } from "react-redux";
// import CheckButton from "react-validation/build/button";
import { useNavigate, Navigate } from "react-router-dom";
import { updateUserById } from "../../actions/user-action";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";

function ProfilePage() {
  const userStorage = JSON.parse(localStorage.getItem("user")).msg;
  const userId = userStorage._id;
  // console.log(userStorage.user_group[0]);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(updateUserById(userId, userStorage));
  // }, [dispatch]);

  // const [state, setState] = useState({
  //   fullname: "",
  //   username: "",
  //   email: "",
  //   password: "",
  //   user_group: userStorage.user_group[0],
  //   country: "",
  // });

  // const { fullname, username, email, password, image, country, organization } =
  //   state;

  const [selectedFiles, setSelectedFiles] = useState("");
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [country, setCountry] = useState("");
  const [organization, setOrganization] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
    setOrganization(organitation);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  // const handleInputChange = (e) => {
  //   let { name, value } = e.target;
  //   setState({ ...state, [name]: value });
  //   console.log(state);
  // };
  const selectFile = (event) => {
    setSelectedFiles(event.target.files);
    
  };
  let formData = new FormData(selectFile[0]);

  
  formData.append("image", selectFile[0]);
  console.log(selectedFiles[0]);



console.log(formData);
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(
      updateUserById(
        userId,
        fullname,
        username,
        email,
        password,
        country,
        organization,
        selectedFiles[0],
        "61d9c6144be64efed0e5ec7e"
      )
    );
  };

  return (
    <Container className="p-0 background-image-profile mx-auto" fluid={true}>
      <ToastContainer />
      <Header />

      <br />
      <br />
      <br />
      <br />

      <br />

      <Form
        className="form-rounded1 p-4 color-overlay mx-auto"
        onSubmit={handleSubmit}
      >
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
              <input type="file" name="image" onChange={selectFile} />
            </div>
            <br></br>
            <br></br>

            <Row>
              <Col>
                <div class="form-group">
                  <Form.Label className="text-email">Fullname</Form.Label>
                  <Form.Control
                    type="text"
                    name="fullname"
                    value={fullname}
                    onChange={onChangeFullname}
                    placeholder="Enter your name"
                  />
                </div>
              </Col>
              <Col>
                <div class="form-group">
                  <Form.Label className="text-email">Username</Form.Label>
                  <Form.Control
                    type="text"
                    name="username"
                    value={username}
                    onChange={onChangeUsername}
                    placeholder="Enter your username"
                  />
                </div>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Label className="text-email">Country</Form.Label>
                <Form.Control
                  type="text"
                  name="country"
                  value={country}
                  onChange={onChangeCountry}
                  placeholder="Enter your country"
                />
              </Col>

              <Col>
                <Form.Label className="text-email">Organization</Form.Label>
                <Form.Control
                  type="text"
                  name="organization"
                  value={organization}
                  onChange={onChangeOrganitation}
                  placeholder="Enter your organization"
                />
              </Col>
            </Row>

            <Form.Label className="text-email">Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={email}
              onChange={onChangeEmail}
              placeholder="Enter email"
            />

            <Form.Label for="password" className="text-password">
              Change Password
            </Form.Label>
            <Form.Control
              id="password"
              name="password"
              value={password}
              onChange={onChangePassword}
            />
          </Form.Group>
          <br></br>
          <div className="d-flex justify-content-between px-3 pb-4">
            <Button as="input" type="submit" value="Send" />{" "}
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
