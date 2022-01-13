import React, { useEffect, useState } from "react";
import {
  Navbar,
  Container,
  Form,
  Button,
  Nav,
  Table,
  Modal,
  FormControl,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { DeleteNewsById, getNews } from "../../actions/news-action";
import CRUD_MODAL from "./component/modal";

function CRUD_Admin_News() {
  const dispatch = useDispatch();
  const newsData = useSelector((state) => state.news);
  const { news } = newsData;
  const [modalShow, setModalShow] = useState(false);
  const [loading, setLoading] = useState(false);

  //   const handleClose = () => setShow(false);
  //   const handleShow = () => {
  //     setShow(true);

  //   };

  const handleUpdate = () => {};

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  console.log(news);

  const handleDelete = (id) => {
    setLoading(true);
    dispatch(DeleteNewsById(id))
      .then(() => {})
      .then((res) => {
        console.log(res.data);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      {/* Navbar */}
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">YIA ADMIN</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>

            <Button variant="outline-success">Search</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* Body */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>News_id</th>
            <th>News Title</th>
            <th>News Desc</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {news != null || news.data != undefined ? (
            news.map((item, index) => {
              return (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>{item.news_title}</td>
                  <td>{item.news_author}</td>
                  <td className="d-flex justify-content-around">
                    <Button
                      onClick={() => setModalShow(true)}
                      variant="warning"
                    >
                      Edit
                    </Button>
                    <CRUD_MODAL
                      show={modalShow}
                      {...item}
                      onHide={() => setModalShow(false)}
                    />
                    <Button
                      onClick={() => handleDelete(item._id)}
                      variant="danger"
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })
          ) : (
            <div>w</div>
          )}
          <Button variant="success">Add Foto</Button>
        </tbody>
      </Table>
      {/* Footer */}
      <Navbar expand="lg" variant="light" bg="light" fixed="bottom">
        <Container fluid>
          <Navbar.Brand href="#">Footer</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default CRUD_Admin_News;
