export default function authHeader() {
    const user = JSON.parse(localStorage.getItem("user"));
  
    if (user && user.token) {
      // For Spring Boot back-end
      // return { Authorization: "Bearer " + user.token };
  
      // for Node.js Express back-end
      return { "x-access-token": user.token };
    } else {
      return {};
    }
  }