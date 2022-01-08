import axios from "axios";

const API_URL = "https://youth-information-aspiration.herokuapp.com/users/";

const register = (fullname, username,email,country,organitation, password) => {
  return axios.post(API_URL + "register", {
    fullname,
    username,
    email,
    password,
    country,
    organitation
  });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "login", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
        console.log(`${response.data} ===================`);
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
};