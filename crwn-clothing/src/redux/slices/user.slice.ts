import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  AuthDetails,
  CurrentUser,
  StateError,
  StoreState,
  UserState,
} from "redux/redux.types";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isLoading: false,
    error: null,
  } as UserState,
  reducers: {
    authenticateUserPending: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    emailRegisterPending: (state, _action: PayloadAction<AuthDetails>) => {
      state.isLoading = true;
      state.error = null;
    },
    emailLoginPending: (state, _action: PayloadAction<AuthDetails>) => {
      state.isLoading = true;
      state.error = null;
    },
    authenticateUserFulfilled: (state, action: PayloadAction<CurrentUser>) => {
      state.isLoading = false;
      state.currentUser = action.payload;
    },
    authenticateUserRejected: (state, action: PayloadAction<StateError>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    logoutPending: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    logoutFulfilled: (state) => {
      state.isLoading = false;
      state.currentUser = null;
    },
    logoutRejected: (state, action: PayloadAction<StateError>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  authenticateUserPending,
  emailRegisterPending,
  emailLoginPending,
  authenticateUserFulfilled,
  authenticateUserRejected,
  logoutPending,
  logoutFulfilled,
  logoutRejected,
} = userSlice.actions;

export const selectCurrentUser = (state: StoreState): CurrentUser =>
  state.user.currentUser;

export default userSlice.reducer;
