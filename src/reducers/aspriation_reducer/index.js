import { GET_ASPIRATION } from "../../actions/aspiration-type";

const initialState = {
  aspiration: [],
  loading: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ASPIRATION:
      return {
        ...state,
        news: action.payload,
        loading: false,
      };

    default:
      return state;
  }
}
