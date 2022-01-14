import { UPDATE_USER } from "../../actions/user-type";

const initialState = {
  user: [],
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_USER:
      return state.map((state) => {
        if (state.id === payload.id) {
          return {
            ...state,
            ...payload,
          };
        } else {
          return state;
        }
      });

    default:
      return state;
  }
}
