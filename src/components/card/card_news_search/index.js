
import React, { useEffect } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import { Col, Card, Button, Row } from "react-bootstrap";
import { getNews } from "../../../actions/news-action";
import { useNavigate, use, Link } from "react-router-dom";

function CardNewsSearch(props) {
    var img = props.news_image;
    var desc = props.news_description
    var time = props.created_at

  var thumb = `https://youth-information-aspiration.herokuapp.com/${props.news_thumbnail}`;
  const path = `/detail-news/${props._id}`;

  console.log(props._id);
  const navigate = useNavigate()



  function handleClik(){

    navigate(path)
  }


    return (
        <Row>
        
        <Card
          style={{
            height: "200px",
            borderRadius: "16px",
            padding: "0px"
            
            
          }}
          onClick={handleClik}
          
          
          className="my-3 card_news justify-content-between flex-row"
        >
          <Card.Img
            style={{ width:"340px", borderRadius: "10px", objectFit: "cover" }}
            variant="top"
            src={thumb}
            className="img-fluid"
          />
          <Card.Body style={{ padding: "0px" }} className="pt-2 ms-4">
          <Card.Text style={{ fontSize: "15px" }}>
              {`${time.slice(0,10)}`}
            </Card.Text>
            <Card.Title style={{ fontSize: "18px",fontWeight:"bold" }}>{props.news_title}</Card.Title>
            <Card.Text style={{ fontSize: "15px" }}>
              {`${desc.slice(0,100)} ....`}
            </Card.Text>
            
          </Card.Body>
        </Card>
      
        
  
        {/* Ini Skeleton */}
        {/* <Card style={{ width: "326px", height: "170px", borderRadius: "", padding: "8px" }}
          className="my-1 card_news">
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Placeholder as={Card.Title} animation="glow">
              <Placeholder xs={6} />
            </Placeholder>
            <Placeholder as={Card.Text} animation="glow">
              <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{" "}
              <Placeholder xs={6} /> <Placeholder xs={8} />
            </Placeholder>
            <Placeholder.Button variant="primary" xs={6} />
          </Card.Body>
        </Card> */}
      </Row>
    )
}

export default CardNewsSearch
