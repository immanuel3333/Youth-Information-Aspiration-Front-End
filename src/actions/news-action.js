import axios from "axios";
import { GET_NEWS, NEWS_ERROR, GET_NEWS_BY_ID, UPDATE_NEWS,DELETE_NEWS_BY_ID, CREATE_NEWS } from "./news-type";
const user = JSON.parse(localStorage.getItem("user"));

export const getNews = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "https://youth-information-aspiration.herokuapp.com/news",
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
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
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
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


export const DeleteNewsById = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(
      `https://youth-information-aspiration.herokuapp.com/news/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    dispatch({
      type: DELETE_NEWS_BY_ID,
      payload: res.data.data.News,
    });
  } catch (error) {
    dispatch({
      type: NEWS_ERROR,
      payload: console.log(error.message),
    });
  }
};

export const createNews = (data) => async (dispatch) => {
  try {
    const res = await axios.post(
      `https://youth-information-aspiration.herokuapp.com/news`,
      {
        data,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    dispatch({
      type: CREATE_NEWS,
      payload: res.data.data.News,
    });
  } catch (error) {
    dispatch({
      type: NEWS_ERROR,
      payload: console.log(error.message),
    });
  }
};

export const updateNews = (id, data) => async (dispatch) => {
  try {
    const res =
      await `https://youth-information-aspiration.herokuapp.com/news/${id}`.update(
        data
      );

    dispatch({
      type: UPDATE_NEWS,
      payload: data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
