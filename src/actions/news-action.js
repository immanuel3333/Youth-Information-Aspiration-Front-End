import axios from "axios";
import { GET_NEWS, NEWS_ERROR,GET_NEWS_BY_ID } from "./news-type";

export const getNews = () => async (dispatch) => {
  try {

    const res = await axios.get(
      "https://youth-information-aspiration.herokuapp.com/news",
      {
        headers:{
          'Content-Type': 'application/json',
          "Access-Control-Allow-Origin": "*",
        }
      }
    );
    dispatch({
      type: GET_NEWS,
      payload: res.data.data.News,
    });
  } catch (error) {
    dispatch({
      type: NEWS_ERROR,
      payload: console.log(error.message),
    });
  }
};


export const getNewsById = (id) => async (dispatch) => {
  try {

    const res = await axios.get(
      `https://youth-information-aspiration.herokuapp.com/news/${id}`,
      {
        headers:{
          'Content-Type': 'application/json',
          "Access-Control-Allow-Origin": "*",
        }
      }
    );
    dispatch({
      type: GET_NEWS_BY_ID,
      payload: res.data.data.News,
    });
  } catch (error) {
    dispatch({
      type: NEWS_ERROR,
      payload: console.log(error.message),
    });
  }
};
