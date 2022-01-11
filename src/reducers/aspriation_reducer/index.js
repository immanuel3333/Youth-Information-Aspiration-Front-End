import {
  GET_ASPIRATION,
  GET_ASPIRATION_BY_ID,
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

    default:
      return state;
  }
}
