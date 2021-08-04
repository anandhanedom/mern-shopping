import {
  USER_LOGIN_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_REGISTER_FAILURE,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_LOGOUT,
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

    case USER_LOGOUT:
      return {
        ...state,
        loading: false,
        userInfo: null,
      };

    default:
      return state;
  }
};

export const userRegisterReducer = (
  state = { userInfo: null, loading: false, error: false },
  action
) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { ...state, loading: true };

    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        userInfo: action.payload,
      };

    case USER_REGISTER_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
