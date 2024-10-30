import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserObj } from "type";

interface IInitialStateObj {
  _id: null | string;
  username: null | string;
  token: null | string;
  isLoading: boolean;
  error: null | string;
}

const initialState: IInitialStateObj = {
  _id: null,
  username: null,
  token: null,
  isLoading: false,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    //Signup Actions
    SIGNUP_STARTED: (state) => {
      state.isLoading = true;
      state.error = null;
    },

    SIGNUP_COMPLETED: (
      state,
      { payload: { _id, username, token } }: PayloadAction<IUserObj>
    ) => {
      state.isLoading = false;
      state._id = _id;
      state.username = username;
      state.token = token;
    },

    SIGNUP_REJECTED: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },

    //Login Actions
    LOGIN_STARTED: (state) => {
      state.isLoading = true;
      state.error = null;
    },

    LOGIN_COMPLETED: (
      state,
      { payload: { _id, username, token } }: PayloadAction<IUserObj>
    ) => {
      state.isLoading = false;
      state._id = _id;
      state.username = username;
      state.token = token;
    },

    LOGIN_REJECTED: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },

    //Logout Actions
    LOGOUT: (state) => {
      state = initialState;
    },
  },
});

export const {
  SIGNUP_STARTED,
  SIGNUP_COMPLETED,
  SIGNUP_REJECTED,
  LOGIN_STARTED,
  LOGIN_COMPLETED,
  LOGIN_REJECTED,
  LOGOUT,
} = userSlice.actions;

export default userSlice.reducer;
