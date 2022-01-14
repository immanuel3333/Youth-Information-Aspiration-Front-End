import React, { useEffect, useState } from "react";
// import news from "../../../data/json/news.json";
import CardNews from "../../card/card_news";
import { Row, Col, Spinner, Container } from "react-bootstrap";
import { getNews } from "../../../actions/news-action";
import { useDispatch, useSelector } from "react-redux";
import CardNewsSearch from "../../card/card_news_search";
import ReactPaginate from "react-paginate";

function ListNewsSearch(props) {
  const newsPerPage = 3;
  const [pageNumber, setPageNumber] = useState(0);

  const pagesVisited = pageNumber * newsPerPage;

  const displayNews = props.data.slice(
    pagesVisited,
    pagesVisited + newsPerPage
  );
  console.log(props.data);

  const pageCount = Math.ceil(props.data.length / newsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <Container>
      <h3>Latest Article</h3>
      <Col className="m-0 p-0">
        {props.data ? (
          displayNews.map((res) => {
            return <CardNewsSearch {...res} key={res._id} />;
          })
        ) : (
          <>
            return (
            <Row className="px-4 justify-content-between m-0">
              <h3>Some Latest Article</h3>
              <Spinner animation="border" role="status" className="mx-auto">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </Row>
            );
          </>
        )}
      </Col>
      <div className="mt-4 mx-auto d-flex justify-content-center">
        <ReactPaginate
          previousLabel={"Prev"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
          pageClassName={"pageCountClas"}
        />
      </div>
    </Container>
  );
}

export default ListNewsSearch;
