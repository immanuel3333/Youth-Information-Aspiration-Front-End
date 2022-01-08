import React from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import { Row, Container, Col, Badge, Tabs, Tab, Sonnet } from "react-bootstrap";
import CardNewsRecomend from "../../components/card/card_news_recomend";
import { useParams } from "react-router-dom";
import newsJson from "../../data/json/news.json";

import { useSelector } from "react-redux";

export default function DetailNewsPage() {
  const newsData = useSelector((state) => state.news);
  const { news } = newsData;

  const { id } = useParams();
  console.log(id);

  const News = newsJson.find((res) => res._id === Number(id));

  console.log(News);
  // console.log(news);
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
                <h2>{News.news_title}</h2>
                <div className="py-1 d-flex">
                  <Badge bg="secondary" className="me-2">
                    HAM
                    {/* {News.category_id.find((e) => e.$oid)} */}
                  </Badge>
                  <div className="me-2">Published {News.created_at.$date}</div>
                  <div className="me-2">Source : {News.news_source}</div>
                </div>
              </div>

              <img
                src={News.news_image}
                style={{ borderRadius: "8px", height: "400px", width: "100%" }}
                className="img-fluid"
              />

              <div className="article-content mt-4">
                <p>{News.news_description}</p>

                <blockquote></blockquote>
              </div>
            </div>
          </Col>
          <Col>
            <div className="article mx-auto justify-content-between">
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
                  <CardNewsRecomend />
                  <hr />
                  <CardNewsRecomend />
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
}
