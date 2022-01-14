import { combineReducers } from "redux";
import newsReducer from "./news_reducer";
import auth from "./auth_reducer";
import message from "./message_reducer";
import aspirationReducer from "./aspriation_reducer";
import commentReducer from "./comment_reducer";
import categoryReducer from "./category_reducer";
import discussionReducer from "./discussion_reducer";
import userReducer from "./user_reducer";

export default combineReducers({
  news: newsReducer,
  comments: commentReducer,
  aspiration: aspirationReducer,
  category: categoryReducer,
  discussion: discussionReducer,
  user: userReducer,
  auth,
  message,
});
