import { GET_COMMENT, GET_COMMENT_BY_NEWS_ID } from "../actions/comment-type";

const initialState = {
  comments: [],
  loading: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_COMMENT:
      return {
        ...state,
        comments: action.payload,
        loading: false,
      };

      case GET_COMMENT_BY_NEWS_ID:
        return {
          ...state,
          comments: action.payload,
        loading: false,
        }
 
    default: return state
  }
}
