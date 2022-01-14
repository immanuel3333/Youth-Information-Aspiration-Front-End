import React, { useState } from "react";
import { Carousel, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function List_Carousel_Search() {
  const dispatch = useDispatch();
  const newsData = useSelector((state) => state.news);

  const { news } = newsData;
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  // const path = `/detail-news/${props._id}`;
  // <a href={`/detail-news/${e._id}`}>

  return (
    <Container>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {news.map((e) => {
          return (
            <Carousel.Item>
              <img
                className="d-block w-100"
                style={{
                  height: "35vh",
                  borderRadius: "12px",
                  objectFit: "cover",
                }}
                src={`https://youth-information-aspiration.herokuapp.com/${e.news_thumbnail}`}
                alt="First slide"
              />
              <Carousel.Caption>
                {/* <p>{e.comment_description}</p> */}
              </Carousel.Caption>
              <h3 style={{ color: "black", marginTop: "16px" }}>
                {e.news_title}
              </h3>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </Container>
  );
}

export default List_Carousel_Search;
