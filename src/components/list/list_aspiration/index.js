import React, { useEffect } from "react";
import CardAspiration from "../../card/card_aspiration";
import { Row, Col, Spinner } from "react-bootstrap";
import { useSelector, useDispatch, connect } from "react-redux";
import { getAspiration } from "../../../actions/aspiration-action";

export default function ListAspiration() {
  const dispatch = useDispatch();
  const aspirationData = useSelector((state) => state.aspiration);
  const { aspiration } = aspirationData;

  if (aspiration.length != 0) {
    aspiration.length = 3;
  } else {
    aspiration.length = 0;
  }

  useEffect(() => {
    dispatch(getAspiration());
  }, [dispatch]);

  // const {aspiration} = props.aspiration;
  // console.log(aspiration);
  if (aspiration.length == 3) {
    return (
      <Row className="px-4 justify-content-center d-flex">
        <h3>Some Latest Article</h3>
        {aspiration.data.Aspiration.map((e) => {
          return <CardAspiration key={e._id} {...e} />;
        })}
      </Row>
    );
  } else {
    return (
      <Row className="px-4 justify-content-between">
        <h3>Some Latest Article</h3>
        <Spinner animation="border" role="status" className="mx-auto">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Row>
    );
  }
}
