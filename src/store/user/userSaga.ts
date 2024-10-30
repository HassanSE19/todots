import { put, takeLatest } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { IAuthObj } from "type";
import { USER_ACTION_TYPES } from "utils/constants/actionTypes";
import {
  SIGNUP_COMPLETED,
  SIGNUP_REJECTED,
  LOGIN_COMPLETED,
  LOGIN_REJECTED,
} from "./userSlice";

function* signup({ payload }: PayloadAction<IAuthObj>) {
  try {
    // SIGNUP LOGIC HERE
    // yield put(SIGNUP_COMPLETED());
  } catch (error: any) {
    yield put(SIGNUP_REJECTED(error));
  }
}

function* login({ payload }: PayloadAction<IAuthObj>) {
  try {
    //LOGIN LOGIC HERE
    // yield put(LOGIN_COMPLETED());
  } catch (error: any) {
    yield put(LOGIN_REJECTED(error));
  }
}

export function* watchUserSaga() {
  yield takeLatest(USER_ACTION_TYPES.SIGNUP, signup);
  yield takeLatest(USER_ACTION_TYPES.LOGIN, login);
}
