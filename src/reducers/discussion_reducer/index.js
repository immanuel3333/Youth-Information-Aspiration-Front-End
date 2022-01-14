import {
  GET_DISCUSSION,
  GET_DISCUSSION_BY_ASPIRATION_ID,
} from "../../actions/discussion-type";

const initialState = {
  discussion: [],
  loading: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_DISCUSSION:
      return {
        ...state,
        discussion: action.payload,
        loading: false,
      };

    case GET_DISCUSSION_BY_ASPIRATION_ID:
      return {
        ...state,
        discussion: action.payload,
        loading: false,
      };

    default:
      return state;
  }
}
