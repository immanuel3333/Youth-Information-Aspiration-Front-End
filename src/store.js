import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";

const initialState = {};

const middleware = [thunk];


const composeEnhancers = composeWithDevTools({
  realtime: true,
  name: 'redux-yia',
  hostname: 'localhost',
  port: 3000 // the port your remotedev server is running at
})

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
