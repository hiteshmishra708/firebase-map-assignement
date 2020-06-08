import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  VERIFY_REQUEST,
  VERIFY_SUCCESS,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOCATION_REQUEST,
  LOCATION_SUCCESS,
  LOCATION_FAILURE,
} from "../actions/";

export default (
  state = {
    isLoggingIn: false,
    isLoggingOut: false,
    isVerifying: false,
    loginError: false,
    logoutError: false,
    isAuthenticated: false,
    loading: false,
    user: {},
    registerError: false,
    registerSuccess: false,
    locationError: false,
    locationSuccess: false,
    locations: [],
  },
  action
) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoggingIn: true,
        loginError: false,
        loading: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
        isAuthenticated: true,
        user: action.user,
        loading: false
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoggingIn: false,
        isAuthenticated: false,
        loginError: true,
        loading: false
      };
    case LOGOUT_REQUEST:
      return {
        ...state,
        isLoggingOut: true,
        logoutError: false,
        loading: true
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isLoggingOut: false,
        isAuthenticated: false,
        user: {},
        loading: false
      };
    case LOGOUT_FAILURE:
      return {
        ...state,
        isLoggingOut: false,
        logoutError: true,
        loading: false
      };
    case VERIFY_REQUEST:
      return {
        ...state,
        isVerifying: true,
        verifyingError: false,
        loading: true
      };
    case VERIFY_SUCCESS:
      return {
        ...state,
        isVerifying: false,
        loading: false
      };
    case REGISTER_REQUEST:
      return {
        ...state,
        registerSuccess: false,
        registerError: false,
        loading: true
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        registerSuccess: true,
        registerError: false,
        loading: false
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        registerSuccess: false,
        registerError: true,
        loading: false
      };
    case LOCATION_REQUEST:
      return {
        ...state,
        registerSuccess: false,
        registerError: false,
        locations: [],
        loading: true
      };
    case LOCATION_SUCCESS:
      return {
        ...state,
        locationSuccess: true,
        locationError: false,
        locations: action.data,
        loading: false
      };
    case LOCATION_FAILURE:
      return {
        ...state,
        locationSuccess: false,
        locationError: true,
        locations: [],
        loading: false
      };
    default:
      return state;
  }
};
