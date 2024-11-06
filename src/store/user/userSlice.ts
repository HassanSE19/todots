import Cookies from "js-cookie";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserObj } from "type";

interface IInitialStateObj {
  _id: string;
  username: string;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string;
}

const initialState: IInitialStateObj = {
  _id: "",
  username: "",
  isAuthenticated: false,
  isLoading: false,
  error: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    //Auth Actions
    GET_USER_STARTED: (state) => {
      state.isLoading = true;
      state.isAuthenticated = false;
      state.error = "";
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
      state.error = "";
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
      state.error = "";
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
      state = initialState;
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
