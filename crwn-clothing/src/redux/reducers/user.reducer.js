import userActionTypes from "redux/types/user.type";

const INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  error: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.EMAIL_LOGIN_PENDING:
    case userActionTypes.EMAIL_REGISTER_PENDING:
    case userActionTypes.AUTHENTICATE_USER_PENDING:
    case userActionTypes.LOGOUT_PENDING:
      return { ...INITIAL_STATE, isLoading: true };
    case userActionTypes.AUTHENTICATE_USER_FULFILLED:
      return { ...INITIAL_STATE, currentUser: action.payload };
    case userActionTypes.AUTHENTICATE_USER_REJECTED:
      return { ...INITIAL_STATE, error: action.payload };
    case userActionTypes.LOGOUT_REJECTED:
      return { ...state, isLoading: false, error: action.payload };
    case userActionTypes.LOGOUT_FULFILLED:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default userReducer;
