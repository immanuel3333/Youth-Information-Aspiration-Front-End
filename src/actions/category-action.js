import axios from "axios";
import { GET_CATEGORY } from "./category-type";

export const getCategory = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "https://youth-information-aspiration.herokuapp.com/categories",
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    dispatch({
      type: GET_CATEGORY,
      payload: res.data.data.Category,
    });
  } catch (error) {
    dispatch({
      type: GET_CATEGORY,
      payload: console.log(error.message),
    });
  }
};
