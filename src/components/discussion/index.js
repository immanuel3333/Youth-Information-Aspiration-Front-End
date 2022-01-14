import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  Row,
  Container,
  Col,
  Badge,
  Tabs,
  Tab,
  Button,
  Spinner,
  Form,
  Card,
  Offcanvas,
} from "react-bootstrap";
import {
  getDiscussionByAspirationId,
  postDiscussion,
} from "../../actions/discussion-action";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function AspirationDiscussion() {
  const userTrue = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();
  const discussionData = useSelector((state) => state.discussion);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { id } = useParams();
  const { discussion } = discussionData;
  const [discussions, setDiscussions] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getDiscussionByAspirationId(`${id}`));
  }, [dispatch]);
  // console.log(discussionData);
  // console.log(discussion);

  const handlePostDiscussion = (e) => {
    e.preventDefault();
    setLoading(true);

    dispatch(postDiscussion(userTrue.msg._id, discussions, id))
      .then(() => {
        window.location.reload();
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  const onChangeDiscussion = (e) => {
    const discussion = e.target.value;
    setDiscussions(discussion);
  };

  const handleLogin = () => {
    Swal.fire({
      position: "top-center",
      icon: "warning",
      title: "Login First!",
      showConfirmButton: false,
      timer: 2000,
    });
    navigate("/login");
  };

  return (
    <Card className="container" style={{ width: "50rem" }}>
      <Card.Title>Discussion(4)</Card.Title>
      {isLoggedIn ? (
        <Form onSubmit={handlePostDiscussion}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Aspiration Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              value={discussions}
              onChange={onChangeDiscussion}
              placeholder="Enter your Discussion"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Button variant="success" onClick={handlePostDiscussion}>
              Send
            </Button>
          </Form.Group>
        </Form>
      ) : (
        <Form onSubmit={handlePostDiscussion}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Aspiration Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              placeholder="Enter your Discussion"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Button variant="success" onClick={handleLogin}>
              Send
            </Button>
          </Form.Group>
        </Form>
      )}

      {discussion.map((res) => {
        // console.log(res);
        return (
          <Row>
            <Card
              style={{
                borderRadius: "16px",
                padding: "12px",
              }}
              className="mb-3 justify-content-between flex-row "
            >
              <Card.Img
                style={{
                  height: "40px",
                  width: "40px",
                  borderRadius: "10px",
                  objectFit: "cover",
                }}
                variant="left"
                src="https://kapantech.com/public/img/testi.png"
                className="img-fluid me-3"
              />
              <Card.Body style={{ padding: "0px" }}>
                <Card.Title
                  style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  {res.user_id != null || res.user_id != undefined
                    ? res.user_id.map((e) => e.username)
                    : "loading ..."}
                </Card.Title>
                <Card.Text style={{ fontSize: "10px" }}>
                  {res.created_at != null || res.created_at != undefined
                    ? res.created_at.slice(0, 10)
                    : "kosong"}
                </Card.Text>
                <Card.Text style={{ fontSize: "14px" }}>
                  {res.discussion_description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Row>
        );
      })}
    </Card>
  );
}
