import {
  GET_ASPIRATION,
  GET_ASPIRATION_BY_CATEGORY,
  GET_ASPIRATION_BY_ID,
  POST_ASPIRATION_CREATE,
} from "../../actions/aspiration-type";

const initialState = {
  aspiration: [],
  loading: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ASPIRATION:
      return {
        ...state,
        aspiration: action.payload,
        loading: false,
      };

    case GET_ASPIRATION_BY_ID:
      return {
        ...state,
        aspiration: action.payload,
        loading: false,
      };

    case GET_ASPIRATION_BY_CATEGORY:
      return {
        ...state,
        aspiration: action.payload,
        loading: false,
      };

    case POST_ASPIRATION_CREATE:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}
