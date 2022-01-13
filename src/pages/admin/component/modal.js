import React, { useEffect, useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { createNews } from "../../../actions/news-action";
export default function CRUD_MODAL(props) {
  const dispatch = useDispatch();
  const [news, setnews] = useState(props.news_title);
  const [selectedFile, setSelectedFile] = useState();
  const [loading, setLoading] = useState(false);
  const [isFilePicked, setIsFilePicked] = useState(false);

  useEffect(() => {}, [dispatch]);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setSelectedFile(true);
  };
  console.log(selectedFile);

  const onChangeNews = (e) => {
    const news = e.target.value;
    setnews(news);
  };

  const handleCreate = () => {
    setLoading(true);
    dispatch(createNews(news, selectedFile))
      .then(() => {})
      .then((res) => {
        console.log(res.data);
      })
      .catch(() => {
        setLoading(false);
      });
  };
  var news_title = props.news_title;
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder={news_title}
              value={news}
              onChange={onChangeNews}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Default file input example</Form.Label>
            <Form.Control type="file" onChange={changeHandler} />
          </Form.Group>
        </Form>
        <Button onClick={handleCreate}>POST</Button>
      </Modal.Body>
      <Modal.Footer>
        {/* <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button> */}
      </Modal.Footer>
    </Modal>
  );
}
