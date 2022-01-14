import React, { useState } from "react";
import { Card, Button, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteComment } from "../../../actions/comment-action";

function CardComment(props) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  let userTrue;
  const user = useSelector((state) => state.auth.user);

  const { isLoggedIn } = useSelector((state) => state.auth);

  if (isLoggedIn) {
    userTrue = user.msg;
  } else {
    userTrue = "belum login";
  }

  const handleDelete = () => {
    setLoading(true);

    dispatch(deleteComment(props._id))
      .then(() => {
        window.location.reload();
        console.log("delete SUcces");
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  console.log(`${props.user_id[0].username} ======================= `);
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
          <Card.Title style={{ fontSize: "16px", fontWeight: "bold" }}>
            {props.user_id != null || props.user_id != undefined
              ? props.user_id.map((e) => e.username)
              : "loading ..."}
          </Card.Title>
          <Card.Text style={{ fontSize: "10px" }}>
            {props.created_at != null || props.created_at != undefined
              ? props.created_at.slice(0, 10)
              : "kosong"}
          </Card.Text>
          <Card.Text style={{ fontSize: "14px" }}>
            {props.comment_description}
          </Card.Text>

          {props.user_id != null ||
          props.user_id != undefined ||
          props.user_id.length != undefined ||
          userTrue != "belum login"
            ? props.user_id.map((e) =>
                userTrue.msg.username === e.username ? (
                  <Button size="sm" onClick={handleDelete}>
                    Delete Comment
                  </Button>
                ) : (
                  <div></div>
                )
              )
            : "loading ..."}
        </Card.Body>
      </Card>
    </Row>
  );
}

export default CardComment;
