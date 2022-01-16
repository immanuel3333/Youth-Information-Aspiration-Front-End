import React, { useEffect, useState } from "react";
import CardAspiration from "../../card/card_aspiration";
import { Row, Col, Spinner } from "react-bootstrap";
import { useSelector, useDispatch, connect } from "react-redux";
import { getAspiration } from "../../../actions/aspiration-action";
import ReactPaginate from "react-paginate";
import "./pagination.css";

export default function ListAspiration() {
  const dispatch = useDispatch();
  const aspirationData = useSelector((state) => state.aspiration);
  const { aspiration } = aspirationData;
  // console.log(aspirationData);

  const [pageNumber, setPageNumber] = useState(0);
  const aspirationPerPage = 3;
  const pagesVisited = pageNumber * aspirationPerPage;

  const displayAspiration = aspiration.slice(
    pagesVisited,
    pagesVisited + aspirationPerPage
  );
  // console.log(displayAspiration);

  useEffect(() => {
    dispatch(getAspiration());
  }, [dispatch]);

  const pageCount = Math.ceil(aspiration.length / aspirationPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div>
      <Row className="px-4 justify-content-center d-flex">
        <h3>Some Latest Article</h3>
        {aspiration ? (
          displayAspiration.map((e) => {
            return <CardAspiration key={e._id} {...e} />;
          })
        ) : (
          <Spinner animation="border" role="status" className="mx-auto">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
      </Row>
      <div className="App mt-4">
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </div>
    </div>
  );
}
