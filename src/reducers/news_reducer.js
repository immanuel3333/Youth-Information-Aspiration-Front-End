import { GET_NEWS } from "../actions/news-type";

const initialState = {
  news: [],
  loading: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_NEWS:
      return {
        ...state,
        news: action.payload,
        loading: false,
      };
 
    default: return state
  }
}
