import { Button, Modal, Form } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { postAspirationCreate } from "../../../actions/aspiration-action";
import { useNavigate } from "react-router-dom";

function MyVerticallyCenteredModal(props) {
  const navigate = useNavigate();

  const humanRight = "61da99e5ce377a948db46e42";
  const mentalHealth = "61da9a09ce377a948db46e46";
  const jobs = "61da99f7ce377a948db46e44";
  const climate = "61da9a36ce377a948db46e48";

  const [state, setState] = useState({
    aspiration_title: "",
    category_id: "",
    aspiration_description: "",
  });

  let dispatch = useDispatch();
  const { aspiration_title, aspiration_description, category_id } = state;

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!aspiration_title || !aspiration_description || !category_id) {
      toast.warning("Please input the value");
    } else {
      dispatch(postAspirationCreate(state));
      setTimeout(() => {
        window.location.href = "/aspiration";
      }, 1000);
    }
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Your Title"
              name="aspiration_title"
              value={aspiration_title}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Topic</Form.Label>
            <Form.Select name="category_id" onChange={handleInputChange}>
              <option value={humanRight}>Human Right</option>
              <option value={mentalHealth}>Mental Health</option>
              <option value={jobs}>Jobs</option>
              <option value={climate}>Climate</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Aspiration Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              placeholder="Enter Your Aspiration Description"
              name="aspiration_description"
              value={aspiration_description}
              onChange={handleInputChange}
            />
          </Form.Group>
          <div className="d-flex justify-content-between px-3 pb-4">
            <Button as="input" type="submit" value="Send" />{" "}
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
export default MyVerticallyCenteredModal;
