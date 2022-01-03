import axios from "axios";
import { GET_NEWS, NEWS_ERROR } from "./news-type";

export const getNews = () => async (dispatch) => {
  try {

    const res = await axios.get(
      "https://ghibliapi.herokuapp.com/films",
      {
        headers:{
          'Content-Type': 'application/json',
          "Access-Control-Allow-Origin": "*",
        }
      }
    );
    dispatch({
      type: GET_NEWS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: NEWS_ERROR,
      payload: console.log(error.message),
    });
  }
};
