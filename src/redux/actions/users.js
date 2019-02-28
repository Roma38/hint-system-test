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