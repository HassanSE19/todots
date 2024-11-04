import Cookies from "js-cookie";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserObj } from "type";

interface IInitialStateObj {
  _id: null | string;
  username: null | string;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: null | string;
}

const initialState: IInitialStateObj = {
  _id: null,
  username: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    //Auth Actions
    GET_USER_STARTED: (state) => {
      state.isLoading = true;
      state.isAuthenticated = false;
      state.error = null;
    },

    GET_USER_COMPLETED: (
      state,
      { payload: { _id, username } }: PayloadAction<IUserObj>
    ) => {
      state.isAuthenticated = true;
      state.isLoading = false;
      state._id = _id;
      state.username = username;
    },

    GET_USER_REJECTED: (state, { payload }) => {
      state.isAuthenticated = false;
      state.isLoading = false;
      state.error = payload;
    },

    //Signup Actions
    SIGNUP_STARTED: (state) => {
      state.isAuthenticated = false;
      state.isLoading = true;
      state.error = null;
    },

    SIGNUP_COMPLETED: (
      state,
      { payload: { _id, username } }: PayloadAction<IUserObj>
    ) => {
      state.isAuthenticated = true;
      state.isLoading = false;
      state._id = _id;
      state.username = username;
    },

    SIGNUP_REJECTED: (state, { payload }) => {
      state.isAuthenticated = false;
      state.isLoading = false;
      state.error = payload;
    },

    //Login Actions
    LOGIN_STARTED: (state) => {
      state.isAuthenticated = false;
      state.isLoading = true;
      state.error = null;
    },

    LOGIN_COMPLETED: (
      state,
      { payload: { _id, username } }: PayloadAction<IUserObj>
    ) => {
      state.isAuthenticated = true;
      state.isLoading = false;
      state._id = _id;
      state.username = username;
    },

    LOGIN_REJECTED: (state, { payload }) => {
      state.isAuthenticated = false;
      state.isLoading = false;
      state.error = payload;
    },

    //Logout Actions
    LOGOUT: (state) => {
      state._id = null;
      state.username = null;
      state.isAuthenticated = false;
      state.isLoading = false;
      state.error = null;
      Cookies.remove("token");
    },
  },
});

export const {
  GET_USER_STARTED,
  GET_USER_COMPLETED,
  GET_USER_REJECTED,
  SIGNUP_STARTED,
  SIGNUP_COMPLETED,
  SIGNUP_REJECTED,
  LOGIN_STARTED,
  LOGIN_COMPLETED,
  LOGIN_REJECTED,
  LOGOUT,
} = userSlice.actions;

export default userSlice.reducer;
