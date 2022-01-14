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
    file,
    user_group
  ) =>
  async (dispatch) => {
    try {
      let formData = new FormData();
      formData.append("file", file);
      const res = await axios.put(
        `https://youth-information-aspiration.herokuapp.com/users/${id}`,
        {
          id,
          fullname,
          username,
          email,
          password,
          country,
          organization,
          formData,
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
