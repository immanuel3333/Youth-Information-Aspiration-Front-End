import axios from "axios";
import { UPDATE_USER, USER_ERROR } from "./user-type";

export const updateUserById =
  (
    id,
    fullname,
    username,
    email,
    password,
    country,
    organization,
    image,
    user_group
  ) =>
  async (dispatch) => {
    try {
      
      const res = await axios.put(
        `https://youth-information-aspiration.herokuapp.com/users/${id}`,
        {
          fullname,
          username,
          email,
          password,
          country,
          organization,
          image,
          user_group,
          headers: {
            "Content-Type": "multipart/form-data",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      dispatch({
        type: UPDATE_USER,
        payload: res.data.data.User,
      });
    } catch (error) {
      dispatch({
        type: USER_ERROR,
        payload: console.log(error.message),
      });
    }
  };
