import React, { useEffect } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getAspirationById } from "../../actions/aspiration-action";

export default function AspirationDiscussion(socket) {
  console.log(socket);
  const dispatch = useDispatch();

  const aspirationData = useSelector((state) => state.aspiration);
  const { id } = useParams();
  const { aspiration } = aspirationData;
  const discussionRef = React.useRef();
  const [discussions, setDiscussions] = React.useState([]);

  useEffect(() => {
    dispatch(getAspirationById(id));
  }, [dispatch]);

  const sendMessage = () => {
    if (socket) {
      socket.emit("aspirationRoomMessage", {
        id,
        discussion_description: discussionRef.current.value,
      });

      discussionRef.current.value = "";
    }
  };

  React.useEffect(() => {
    if (socket) {
      socket.on("newDiscussion", (message) => {
        const newDiscussion = [...discussions, message];
        setDiscussions(newDiscussion);
      });
    }
    //eslint-disable-next-line
  }, [discussions]);

  React.useEffect(() => {
    if (socket) {
      socket.emit("joinRoom", {
        id,
      });
    }

    return () => {
      //Component Unmount
      if (socket) {
        socket.emit("leaveRoom", {
          id,
        });
      }
    };
    //eslint-disable-next-line
  }, []);

  return (
    <Card className="container" style={{ width: "50rem" }}>
      <Card.Title>Discussion(4)</Card.Title>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Aspiration Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="Enter your Discussion"
          />
        </Form.Group>
        <Button style={{ float: "right" }} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Card>
  );
}
