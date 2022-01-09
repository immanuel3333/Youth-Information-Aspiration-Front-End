import axios from "axios";
import { GET_ASPIRATION, ASPIRATION_ERROR } from "./aspiration-type";

export const getAspiration = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "https://youth-information-aspiration.herokuapp.com/aspirations",
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    dispatch({
      type: GET_ASPIRATION,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ASPIRATION_ERROR,
      payload: console.log(error.message),
    });
  }
};
