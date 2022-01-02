import { Button, Modal, Form } from "react-bootstrap";
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Enter Your Title" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Topic</Form.Label>
            <Form.Select>
              <option>Enter Your Aspiration Topic</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Aspiration Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              placeholder="Enter Your Aspiration Description"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <div className="d-flex justify-content-between px-3 pb-4">
        <Button as="input" type="submit" value="Add Photo" />{" "}
        <Button as="input" type="submit" value="Send" />{" "}
      </div>
    </Modal>
  );
}
export default MyVerticallyCenteredModal;
