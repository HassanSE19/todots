import axios from "axios";
import Cookies from "js-cookie";
import { notification } from "antd";
import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "redux-saga/effects";
import { USER_ACTION_TYPES } from "utils/constants/actionTypes";
import { IAuthObj } from "type";
import {
  SIGNUP_COMPLETED,
  SIGNUP_REJECTED,
  LOGIN_COMPLETED,
  LOGIN_REJECTED,
} from "./userSlice";

const userAxios = axios.create({
  baseURL: "http://localhost:8080/user",
  timeout: 5000,
});

function* signup({
  payload,
}: PayloadAction<IAuthObj>): Generator<any, void, any> {
  try {
    const {
      data: { success, user, token, error },
    } = yield call(userAxios.post, "/signup", { user: payload });
    if (success) {
      Cookies.set("token", `${token}`, { expires: 1 });
      yield put(SIGNUP_COMPLETED(user));
      window.location.replace("http://localhost:3000/");
    } else throw new Error(error);
  } catch (error: any) {
    notification.error({
      message: "Sorry",
      description: "Couldn't Signup",
      duration: 2,
    });
    yield put(SIGNUP_REJECTED(error.massage));
  }
}

function* login({
  payload,
}: PayloadAction<IAuthObj>): Generator<any, void, any> {
  try {
    const {
      data: { success, user, token, error },
    } = yield call(userAxios.get, "/login", { params: payload });
    if (success) {
      Cookies.set("token", `${token}`, { expires: 1 });
      yield put(LOGIN_COMPLETED(user));
      window.location.replace("http://localhost:3000/");
    } else throw new Error(error);
  } catch (error: any) {
    notification.error({
      message: "Sorry",
      description: "Couldnt Login",
      duration: 2,
    });
    yield put(LOGIN_REJECTED(error.massage));
  }
}

export function* watchUserSaga() {
  yield takeLatest(USER_ACTION_TYPES.SIGNUP, signup);
  yield takeLatest(USER_ACTION_TYPES.LOGIN, login);
}
