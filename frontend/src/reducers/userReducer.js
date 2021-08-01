import {
  USER_LOGIN_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT_FAILURE,
  USER_LOGOUT_REQUEST,
  USER_LOGOUT_SUCCESS,
} from "../constants/userConstants.js";

export const userLoginReducer = (
  state = { userInfo: null, loading: false, error: false },
  action
) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { ...state, loading: true };

    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        userInfo: action.payload,
      };

    case USER_LOGIN_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case USER_LOGOUT_REQUEST:
      return { ...state, loading: true };

    case USER_LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        userInfo: null,
      };

    case USER_LOGOUT_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
