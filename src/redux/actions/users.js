import axios from "axios";
import { NUMBER_OF_USERS } from "../../config";

export const USERS_LOADING = "USERS_LOADING";
export const USERS_LOAD_SUCCEED = "USERS_LOAD_SUCCEED";
export const USERS_LOAD_FAILED = "USERS_LOAD_FAILED";

export const usersLoadStart = () => ({ type: USERS_LOADING });

export const usersLoadSucceed = users => ({
  type: USERS_LOAD_SUCCEED,
  payload: users
});

export const usersLoadFailed = () => ({
  type: USERS_LOAD_FAILED
});

export const getUsers = url => dispatch => {
  dispatch(usersLoadStart());
  axios
    .get(url)
    .then(({ data }) => {
      data.items.length = NUMBER_OF_USERS;
      dispatch(usersLoadSucceed(data.items));
    })
    .catch(() => dispatch(usersLoadFailed()));
};
