import React, { useEffect, useState } from "react";
import Footer from "../../components/footer";
import news from "../../data/json/news.json";

import Header from "../../components/header";
import ListNewsSearch from "../../components/list/list_news_search";
import { Container, Pagination } from "react-bootstrap";
import CardNews from "../../components/card/card_news";
import List_Carousel_Search from "../../components/caroussel/list_carousel";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { getNewsByCategoryId } from "../../actions/news-action";
import ReactPaginate from "react-paginate";

function SearchResult() {
  const dispatch = useDispatch();
  const newsData = useSelector((state) => state.news);
  const { category_id } = useParams();

  const { news } = newsData;
  const [pageNumber, setPageNumber] = useState(0);

  const newsPerPage = 3;
  const pagesVisited = pageNumber * newsPerPage;

  const displayNews = news.slice(pagesVisited, pagesVisited + newsPerPage);

  useEffect(() => {
    dispatch(getNewsByCategoryId(category_id));
  }, [dispatch]);


  const pageCount = Math.ceil(news.length / newsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

console.log(`${news} ======================================== ini` );

  return (
    <Container fluid className="m-0 p-0">
      <Header />
      <br />

      <br />
      <br />
      <List_Carousel_Search />
      <br />
      <br />

      <ListNewsSearch data={news} />
      <br />
      <br />
      <Footer />
    </Container>
  );
}

export default SearchResult;
