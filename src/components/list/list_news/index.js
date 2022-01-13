import React, { useEffect } from "react";
import CardNews from "../../card/card_news";
import { Row, Col, Spinner, Placeholder, Card } from "react-bootstrap";
import { useSelector, useDispatch, connect } from "react-redux";
import { getNews } from "../../../actions/news-action";
import { Link } from "react-router-dom";

export default function ListNews() {
  const dispatch = useDispatch();
  const newsData = useSelector((state) => state.news);
  const { news } = newsData;

  if (news.length != 0) {
    news.length = 3;
  } else {
    news.length = 0;
  }

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  console.log(news);
  if (news.length == 3) {
    return (
      <div className="justify-content-center d-flex mx-auto">
        <Row className="m-0">
          <h3>Some Latest Article</h3>
          {news.map((e) => {
            return <CardNews key={e.__v} {...e} />;
          })}
          <Link to={"/"} className="d-flex justify-content-end">
            See More
          </Link>
        </Row>
      </div>
    );
  } else {
    return (
      <div className="justify-content-center d-flex mx-auto">
        <Row className="m-0" style={{ marginLeft: "50px" }}>
          <h3>Some Latest Article</h3>

          <Card
            style={{
              borderRadius: "16px",
              padding: "8px",
              width: "40vh",
              marginRight: "80px",
            }}
            className="my-1 card_news"
          >
            <Card.Img
              variant="top"
              src="holder.js/100px170"
              style={{
                height: "170px",
                borderRadius: "10px",
                objectFit: "cover",
              }}
              variant="top"
              className="img-fluid"
            />
            <Card.Body>
              <Placeholder as={Card.Title} animation="glow">
                <Placeholder xs={4} />
              </Placeholder>
              <Placeholder as={Card.Text} animation="glow">
                <Placeholder xs={7} />{" "}
              </Placeholder>
              <Placeholder.Button variant="success" xs={4} size="sm" />
            </Card.Body>
          </Card>

          <Card
            style={{
              borderRadius: "16px",
              padding: "8px",
              width: "40vh",
              marginRight: "80px",
            }}
            className="my-1 card_news"
          >
            <Card.Img
              variant="top"
              src="holder.js/100px180"
              style={{
                height: "170px",
                borderRadius: "10px",
                objectFit: "cover",
              }}
              variant="top"
              className="img-fluid"
            />
            <Card.Body>
              <Placeholder as={Card.Title} animation="glow">
                <Placeholder xs={4} />
              </Placeholder>
              <Placeholder as={Card.Text} animation="glow">
                <Placeholder xs={7} />{" "}
              </Placeholder>
              <Placeholder.Button variant="success" xs={6} size="sm" />
            </Card.Body>
          </Card>

          <Card
            style={{
              borderRadius: "16px",
              padding: "8px",
              width: "40vh",
            }}
            className="my-1 card_news"
          >
            <Card.Img
              variant="top"
              src="holder.js/100px180"
              style={{
                height: "170px",
                borderRadius: "10px",
                objectFit: "cover",
              }}
              variant="top"
              className="img-fluid"
            />
            <Card.Body>
              <Placeholder as={Card.Title} animation="glow">
                <Placeholder xs={4} />
              </Placeholder>
              <Placeholder as={Card.Text} animation="glow">
                <Placeholder xs={7} />{" "}
              </Placeholder>
              <Placeholder.Button variant="success" xs={6} size="sm" />
            </Card.Body>
          </Card>
        </Row>
      </div>
    );
  }
}
