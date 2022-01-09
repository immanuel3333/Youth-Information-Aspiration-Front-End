import { combineReducers } from "redux";
import newsReducer from "./news_reducer";
import aspirationReducer from "./aspriation_reducer";

export default combineReducers({
  news: newsReducer,
  aspiration: aspirationReducer,
});
