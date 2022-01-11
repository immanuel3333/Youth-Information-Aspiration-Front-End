import React, { useEffect } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import {
  Row,
  Container,
  Col,
  Badge,
  Tabs,
  Tab,
  Sonnet,
  Spinner,
} from "react-bootstrap";
import CardNewsRecomend from "../../components/card/card_news_recomend";
import { useParams } from "react-router-dom";
import newsJson from "../../data/json/news.json";

import { useDispatch, useSelector } from "react-redux";
import { getNewsById } from "../../actions/news-action";

export default function DetailNewsPage() {
  const dispatch = useDispatch();

  const newsData = useSelector((state) => state.news);
  const { id } = useParams();

  const { news } = newsData;

  useEffect(() => {
    dispatch(getNewsById(id));
  }, [dispatch]);

  var thumb = `https://youth-information-aspiration.herokuapp.com/${news.news_thumbnail}`;
  
  if (news != null || news.data != undefined) {
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

                <div className="article-content mt-4">
                  <p>{news.news_description}</p>

                  <blockquote></blockquote>
                </div>
              </div>
            </Col>
            <Col>
              <div className="article icon-sosmed mx-auto justify-content-between">
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
                    
                    {
                      (news.data != undefined) ? news.data.News.map((e)=>{
                      return <CardNewsRecomend key={e._v} {...e}/>
                    
                    }) : <div></div>
                    }
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
