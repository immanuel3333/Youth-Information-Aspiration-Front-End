import axios from "axios";
import {
  GET_DISCUSSION,
  DISCUSSION_ERROR,
  GET_DISCUSSION_BY_ASPIRATION_ID,
  POST_DISCUSSION,
} from "./discussion-type";
const user = JSON.parse(localStorage.getItem("user"));

export const getDiscussion = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "https://youth-information-aspiration.herokuapp.com/discussions",
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    dispatch({
      type: GET_DISCUSSION,
      payload: res.data.data.Discussion,
    });
  } catch (error) {
    dispatch({
      type: DISCUSSION_ERROR,
      payload: console.log(error.message),
    });
  }
};

export const getDiscussionByAspirationId = (id) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://youth-information-aspiration.herokuapp.com/discussions/aspirations/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    dispatch({
      type: GET_DISCUSSION_BY_ASPIRATION_ID,
      payload: res.data.data.Discussion,
    });
  } catch (error) {
    dispatch({
      type: DISCUSSION_ERROR,
      payload: console.log(error.message),
    });
  }
};

export const postDiscussion =
  (user_id, discussion_description, aspiration_id) => async (dispatch) => {
    try {
      const res = await axios.post(
        `https://youth-information-aspiration.herokuapp.com/discussions`,
        {
          user_id,
          aspiration_id,
          discussion_description,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      dispatch({
        type: POST_DISCUSSION,
        payload: res.data.data.Discussion,
      });
    } catch (error) {
      dispatch({
        type: DISCUSSION_ERROR,
        payload: console.log(error.message),
      });
    }
  };

export const deleteDiscussion = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(
      `https://youth-information-aspiration.herokuapp.com/discussions/aspirations/${id}`,

      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    dispatch({
      type: POST_DISCUSSION,
      payload: res.data.data.Discussion,
    });
  } catch (error) {
    dispatch({
      type: DISCUSSION_ERROR,
      payload: console.log(error.message),
    });
  }
};
