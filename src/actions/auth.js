import { myFirebase } from "../firebase/firebase";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

export const VERIFY_REQUEST = "VERIFY_REQUEST";
export const VERIFY_SUCCESS = "VERIFY_SUCCESS";

export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

const getAction = (type, data=null) => {
  return {
    type: type,
    data
  }
}

export const loginUser = (email, password) => dispatch => {
  dispatch(getAction(LOGIN_REQUEST));
  myFirebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(user => {
      dispatch(getAction(LOGIN_SUCCESS, user));
    })
    .catch(error => {
      //Do something with the error if you want!
      dispatch(getAction(LOGIN_FAILURE));
    });
};

export const logoutUser = () => dispatch => {
  dispatch(getAction(LOGOUT_REQUEST));
  myFirebase
    .auth()
    .signOut()
    .then(() => {
      dispatch(getAction(LOGOUT_SUCCESS));
    })
    .catch(error => {
      //Do something with the error if you want!
      dispatch(getAction(LOGOUT_FAILURE));
    });
};

export const verifyAuth = () => dispatch => {
  dispatch(getAction(VERIFY_REQUEST));
  myFirebase.auth().onAuthStateChanged(user => {
    if (user !== null) {
      dispatch(getAction(LOGOUT_SUCCESS, user));
    }
    dispatch(getAction(VERIFY_SUCCESS));
  });
};

export const register = (email, password) => dispatch => {
  dispatch(getAction(REGISTER_REQUEST));
  myFirebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(user => {
      dispatch(getAction(REGISTER_SUCCESS, user));
    })
    .catch(error => {
      //Do something with the error if you want!
      dispatch(getAction(REGISTER_FAILURE));
    });
};