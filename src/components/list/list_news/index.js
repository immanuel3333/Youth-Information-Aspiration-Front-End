import React, { useEffect } from "react";
import CardNews from "../../card/card_news";
import News from "../../../data/json/news.json";
import { Row, Col, Spinner } from "react-bootstrap";
import { useSelector, useDispatch, connect } from "react-redux";
import { getNews } from "../../../actions/news-action";
import { useNavigate } from "react-router-dom";

export default function ListNews() {
  const dispatch = useDispatch();
  const newsData = useSelector((state) => state.news);
  const { news } = newsData;


  if (news.length != 0) {
    news.length = 3;
  } else {
    news.length = 0;
  }

 

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  var newsA;

// async function aneh(){
//   let  newsA = await news
//   return await newsA.data.data_component.map((e) => {
//     console.log(e.news_group_setting.length);
//     for (let i = 0; i < e.news_group_setting.length; i++) {
//       const element = e.news_group_setting[i];
//       // console.log(element);
//       // for (let j = 0; j < element.news_setting.length; j++) {
//       //   const element2 = element.news_setting[j];

//       //   console.log(element2);
        
//       // }
//       element.news_setting.map((x)=>{
//         console.log(x);
//       })
      
//     }
//   })
// }
// aneh()



// penampung.news_group_setting.map((f)=>{
//   console.log(f);
// })

// console.log(aneh());
  

 

  
// news.data.data_component.news_group_setting.news_setting
  // const {news} = props.news;
  console.log(news);
  if (news.length == 3) {
    return (
      <Row className="px-4 justify-content-center d-flex">
        <h3>Some Latest Article</h3>
        {news.data.News.map((e) => {
          return <CardNews key={e.__v} {...e} />;
        })}
      </Row>
    );
  } else {
    return (
      <Row className="px-4 justify-content-between">
        <h3>Some Latest Article</h3>
        <Spinner animation="border" role="status" className="mx-auto">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Row>
    );
  }
}
