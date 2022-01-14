import { GET_CATEGORY } from "../../actions/category-type";

const initialState = {
  category: [],
  loading: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORY:
      return {
        ...state,
        category: action.payload,
        loading: false,
      };

    default:
      return state;
  }
}
