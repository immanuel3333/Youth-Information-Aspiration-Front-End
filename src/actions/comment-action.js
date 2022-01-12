import axios from "axios";
import { GET_COMMENT, COMMENT_ERROR, GET_COMMENT_BY_NEWS_ID } from "./comment-type";
const user = JSON.parse(localStorage.getItem("user"));


export const getComment = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "https://youth-information-aspiration.herokuapp.com/comments",
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    dispatch({
      type: GET_COMMENT,
      payload: res.data.data.Comment,
    });
  } catch (error) {
    dispatch({
      type: COMMENT_ERROR,
      payload: console.log(error.message),
    });
  }
};

export const getCommentById = (id) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://youth-information-aspiration.herokuapp.com/comments/news/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Authorization": `Bearer ${user.token}`
        },
      }
    );
    dispatch({
      type: GET_COMMENT_BY_NEWS_ID,
      payload: res.data.data.Comment,
    });
  } catch (error) {
    dispatch({
      type: COMMENT_ERROR,
      payload: console.log(error.message),
    });
  }
};
