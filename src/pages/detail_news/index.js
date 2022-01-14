import React, { useEffect, useState, useRef } from "react";
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
  Form,
  Card,
  Offcanvas,
} from "react-bootstrap";
import CardNewsRecomend from "../../components/card/card_news_recomend";
import { useParams } from "react-router-dom";
import newsJson from "../../data/json/news.json";

import { useDispatch, useSelector } from "react-redux";
import { getNewsById } from "../../actions/news-action";
import {
  deleteComment,
  getComment,
  getCommentById,
  postComment,
} from "../../actions/comment-action";
import CardComment from "../../components/card/card_comment";
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton, LinkedinShareButton,  TelegramShareButton, EmailShareButton } from "react-share";
import { FacebookIcon, TwitterIcon, WhatsappIcon, LinkedinIcon,TelegramIcon, EmailIcon } from "react-share";


export default function DetailNewsPage() {
  const userTrue = JSON.parse(localStorage.getItem("user"));

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const form = useRef();
  const checkBtn = useRef();
  const newsData = useSelector((state) => state.news);
  const commentData = useSelector((state) => state.comments);
  const { id } = useParams();
  const { news } = newsData;
  const { comments } = commentData;
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.auth);

  const onChangeComment = (e) => {
    const comment = e.target.value;
    setComment(comment);
  };

  useEffect(() => {
    dispatch(getNewsById(id));
    // dispatch(getComment());
    dispatch(getCommentById(`${id}`));
  }, [dispatch]);

  const handlePostComment = (e) => {
    e.preventDefault();
    setLoading(true);

    dispatch(postComment(userTrue.msg._id, comment, id))
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

  const handleDelete = () => {
    setLoading(true);

    dispatch(deleteComment(news._id))
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

  var thumb = `https://youth-information-aspiration.herokuapp.com/${news.news_thumbnail}`;

  if (
    news != null ||
    (news.data != undefined && comments != null) ||
    comments != undefined ||
    comments.user_id.length != undefined ||
    comments.user_id.length != null
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
                      <Offcanvas.Title>
                        All Comment `{comments.length}`
                      </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                      <Col>
                        {isLoggedIn ? (
                          <Form onSubmit={handlePostComment}>
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlTextarea1"
                            >
                              <Form.Label>What are your thoughts?</Form.Label>
                              <Form.Control
                                as="textarea"
                                rows={4}
                                value={comment}
                                onChange={onChangeComment}
                              />
                            </Form.Group>
                            <Form.Group className="mb-3">
                              <Button
                                variant="success"
                                onClick={handlePostComment}
                              >
                                Add Comment
                              </Button>
                            </Form.Group>
                          </Form>
                        ) : (
                          <div></div>
                        )}

                        {comments.length > 1 ? (
                          comments.map((res) => {
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
                                      {res.user_id != null ||
                                      res.user_id != undefined
                                        ? res.user_id.map((e) => e.username)
                                        : "loading ..."}
                                    </Card.Title>
                                    <Card.Text style={{ fontSize: "10px" }}>
                                      {res.created_at != null ||
                                      res.created_at != undefined
                                        ? res.created_at.slice(0, 10)
                                        : "kosong"}
                                    </Card.Text>
                                    <Card.Text style={{ fontSize: "14px" }}>
                                      {res.comment_description}
                                    </Card.Text>

                                    {res.user_id != null ||
                                    res.user_id != undefined ||
                                    res.user_id.length != undefined ||
                                    userTrue != "belum login"
                                      ? res.user_id.map((e) =>
                                          userTrue.msg.username ===
                                          e.username ? (
                                            <Button
                                              size="sm"
                                              onClick={handleDelete}
                                            >
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
                          })
                        ) : (
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
                                  {comments.user_id != null ||
                                  comments.user_id != undefined
                                    ? comments.user_id.map((e) => e.username)
                                    : ""}
                                </Card.Title>
                                <Card.Text style={{ fontSize: "10px" }}>
                                  {comments.created_at != null ||
                                  comments.created_at != undefined
                                    ? comments.created_at.slice(0, 10)
                                    : ""}
                                </Card.Text>
                                <Card.Text style={{ fontSize: "14px" }}>
                                  {comments.comment_description}
                                </Card.Text>
                              </Card.Body>
                            </Card>
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
                <FacebookShareButton
                 url= "https://www.google.com"
                quote={"Hey share this to your friend"}
                hashtag="#YIA"                
                >
                <FacebookIcon logoFillColor="white" round={true} size={35}></FacebookIcon>
                </FacebookShareButton>


                <TwitterShareButton
                url="https://www.google.com/"
                quote={"Hey share this to your friend"}
                hashtag="#YIA"
                >
                <TwitterIcon logoFillColor="white" round={true} size={35}>                 
                </TwitterIcon>
                </TwitterShareButton>

                <WhatsappShareButton
                url="https://www.google.com/"
                quote={"Hey share this to your friend"}
                hashtag="#YIA"
                >
                  <WhatsappIcon logoFillColor="white" round={true} size={35}>
                  </WhatsappIcon>
                </WhatsappShareButton>        
                
                <LinkedinShareButton
                url="https://www.google.com/"
                quote={"Hey share this to your friend"}
                hashtag="#YIA"
                >
                  <LinkedinIcon logoFillColor="white" round={true} size={35}>
                  </LinkedinIcon>
                </LinkedinShareButton> 

                <TelegramShareButton
                url="https://www.google.com/"
                quote={"Hey share this to your friend"}
                hashtag="#YIA"
                >
                  <TelegramIcon logoFillColor="white" round={true} size={35}>
                  </TelegramIcon>
                </TelegramShareButton> 

                <EmailShareButton
                url="https://www.google.com/"
                quote={"Hey share this to your friend"}
                hashtag="#YIA"
                >
                  <EmailIcon logoFillColor="white" round={true} size={35}>
                  </EmailIcon>
                </EmailShareButton> 

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
