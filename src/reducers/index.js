import { combineReducers } from "redux";
import newsReducer from "./news_reducer";
import auth from "./auth_reducer";
import message from "./message_reducer";
import aspirationReducer from "./aspriation_reducer";
import commentReducer from "./comment_reducer";

export default combineReducers({
  news: newsReducer,
  comments: commentReducer,
  aspiration: aspirationReducer,
  auth,
  message,
});
