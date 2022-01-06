import React from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import { Row, Container, Col, Badge, Tabs, Tab, Sonnet } from "react-bootstrap";
import CardNewsRecomend from "../../components/card/card_news_recomend";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";


export default function DetailNewsPage() {
  const newsData = useSelector((state) => state.news);
  const { news } = newsData;


  const {id} = useParams()
  console.log(id);
  const  News = news.find((res) => res._id === Number(id))

  console.log(News);
  console.log(news);
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
                <h2>
                {/* {News.news_title} */}
                  [Statement] Youth in Response to The Myanmar Military Coup
                </h2>
                <div className="py-1 d-flex">
                  <Badge bg="secondary" className="me-2">
                    Human Right
                  </Badge>
                  <div className="me-2">Published August 27, 2021</div>
                  <div className="me-2">
                    Source : https://www.sonne-international.org/
                  </div>
                </div>
              </div>

              <img
                src="https://img.beritasatu.com/cache/jakartaglobe/960x620-4/2018/08/myanmar-military.jpg"
                style={{ borderRadius: "8px", height: "400px", width: "100%" }}
                className="img-fluid"
              />

              <div className="article-content mt-4">
                <p>
                  Aenean eleifend ante maecenas pulvinar montes lorem et pede
                  dis dolor pretium donec dictum. Vici consequat justo enim.
                  Venenatis eget adipiscing luctus lorem. Adipiscing veni amet
                  luctus enim sem libero tellus viverra venenatis aliquam.
                  Commodo natoque quam pulvinar elit.
                </p>
                <p>
                  Eget aenean tellus venenatis. Donec odio tempus. Felis arcu
                  pretium metus nullam quam aenean sociis quis sem neque vici
                  libero. Venenatis nullam fringilla pretium magnis aliquam nunc
                  vulputate integer augue ultricies cras. Eget viverra feugiat
                  cras ut. Sit natoque montes tempus ligula eget vitae pede
                  rhoncus maecenas consectetuer commodo condimentum aenean.
                </p>
                <h4>What are my payment options?</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <blockquote>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </p>
                  <p class="blockquote-footer">
                    Someone famous in{" "}
                    <cite title="Source Title">Dick Grayson</cite>
                  </p>
                </blockquote>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
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
