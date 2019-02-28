import {
  USERS_LOADING,
  USERS_LOAD_SUCCEED,
  USERS_LOAD_FAILED
} from "../actions/users";

const initialState = {
  requestState: null,
  items: []
};

export const usersReduser = (state = initialState, { type, payload }) => {
  switch (type) {
    case USERS_LOADING:
      return { ...state, requestState: "loading" };
    case USERS_LOAD_SUCCEED:
      return {
        ...state,
        requestState: "succeed",
        items: payload,
      };
    case USERS_LOAD_FAILED:
      return {
        ...state,
        requestState: "error",
        items: []
      };

    default:
      return state;
  }
};
