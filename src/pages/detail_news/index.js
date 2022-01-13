import React, { useEffect, useState } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import {
  Row,
  Container,
  Col,
  Badge,
  Tabs,
  Tab,
  Button,
  Spinner,
  Card,
  Offcanvas,
} from "react-bootstrap";
import CardNewsRecomend from "../../components/card/card_news_recomend";
import { useParams } from "react-router-dom";
import newsJson from "../../data/json/news.json";

import { useDispatch, useSelector } from "react-redux";
import { getNewsById } from "../../actions/news-action";
import { getComment, getCommentById } from "../../actions/comment-action";
import CardComment from "../../components/card/card_comment";

export default function DetailNewsPage() {
  const user = JSON.parse(localStorage.getItem("user"));
  let userTrue;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  const newsData = useSelector((state) => state.news);
  const commentData = useSelector((state) => state.comments);
  const { id } = useParams();

  const { news } = newsData;
  const { comments } = commentData;

  useEffect(() => {
    dispatch(getNewsById(id));
    // dispatch(getComment());
    dispatch(getCommentById(`${news._id}`));
  }, [dispatch]);

  console.log(comments);
  console.log(user.token);

  var thumb = `https://youth-information-aspiration.herokuapp.com/${news.news_thumbnail}`;

  if (
    news != null ||
    (news.data != undefined && comments != null) ||
    comments != undefined
  ) {
    return (
      <div>
        <Header />
        <br />
        <br />
        <br />
        <Container>
          <Row className="align-items-start">
            <Col className="col-lg-8 m-15px-tb">
              <div className="article">
                <div className="article-title">
                  <h2>{news.news_title}</h2>
                  <div className="py-1 d-flex">
                    <Badge bg="secondary" className="me-2">
                      HAM
                      {/* {News.category_id.find((e) => e.$oid)} */}
                    </Badge>
                    <div className="me-2">
                      Published{" "}
                      {news.created_at != null || news.created_at != undefined
                        ? news.created_at.$date
                        : "kosong"}
                    </div>
                    <div className="me-2">Source : {news.news_source}</div>
                  </div>
                </div>

                <img
                  src={thumb}
                  style={{
                    borderRadius: "8px",
                    height: "400px",
                    width: "100%",
                  }}
                  className="img-fluid"
                />
                {/* <iframe width="670" height="377" src="https://www.youtube.com/embed/VjqitFFSFxM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/> */}

                <div className="article-content mt-4">
                  <p>{news.news_description}</p>
                  {news.news_video != null ? (
                    <div
                      className="mx-auto d-flex justify-content-center"
                      dangerouslySetInnerHTML={{ __html: news.news_video }}
                    ></div>
                  ) : (
                    <div></div>
                  )}

                  <blockquote></blockquote>
                  <Button
                    variant="primary"
                    onClick={handleShow}
                    className="me-2"
                  >
                    Show Comment
                  </Button>
                  <Offcanvas show={show} onHide={handleClose} placement="end">
                    <Offcanvas.Header closeButton>
                      <Offcanvas.Title>All Comment ()</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                      <Col>
                        {comments.length > 1 ? (
                          comments.map((res) => {
                            return <CardComment {...res} key={res._id} />;
                          })
                        ) : (
                          <Row>
                            {comments.length === 1 ? (
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
                                    {/* {comments.user_id[0].username} */}
                                  </Card.Title>
                                  <Card.Text style={{ fontSize: "10px" }}>
                                    {comments.created_at != null ||
                                    comments.created_at != undefined
                                      ? comments.created_at.slice(0, 10)
                                      : "kosong"}
                                  </Card.Text>
                                  <Card.Text style={{ fontSize: "14px" }}>
                                    {comments.comment_description}
                                  </Card.Text>
                                </Card.Body>
                              </Card>
                            ) : (
                              <div>
                                <h1>Gada Coment cuy</h1>
                              </div>
                            )}
                          </Row>
                        )}
                      </Col>
                    </Offcanvas.Body>
                  </Offcanvas>
                </div>
              </div>
            </Col>
            <Col>
              <div className="article icon-sosmed mx-auto justify-content-around d-flex">
                <i className="me-4 fab fa-instagram fa-2x" />
                <i className="me-4 fab fa-facebook fa-2x" />
                <i className="me-4 fab fa-linkedin fa-2x" />
                <i className="me-4 fas fa-share-alt fa-2x" />
              </div>

              <div className="article" style={{ marginTop: "100px" }}>
                <Tabs
                  defaultActiveKey="popular"
                  id="uncontrolled-tab-example"
                  transition={false}
                  className="justify-content-between"
                >
                  <Tab eventKey="popular" title="Popular">
                    {news.data != undefined ? (
                      news.data.News.map((e) => {
                        return <CardNewsRecomend key={e._v} {...e} />;
                      })
                    ) : (
                      <div></div>
                    )}
                  </Tab>
                  <Tab eventKey="recomended" title="Recomended">
                    <CardNewsRecomend />
                    <hr />
                    <CardNewsRecomend />
                  </Tab>
                </Tabs>
              </div>
            </Col>
          </Row>
        </Container>

        <Footer />
      </div>
    );
  } else {
    <Spinner animation="border" role="status" className="mx-auto">
      <span className="visually-hidden">Loading...</span>
    </Spinner>;
  }
}
