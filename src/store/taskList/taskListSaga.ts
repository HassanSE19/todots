import axios from "axios";
import { PayloadAction } from "@reduxjs/toolkit";
import { put, takeEvery, call } from "redux-saga/effects";
import { IDeletePayload, IEditActionType, ITaskObj } from "type";
import { TODO_ACTION_TYPES } from "utils/constants/actionTypes";
import getToken from "utils/getTokenFromCookie";
import {
  ADD_TASK_COMPLETED,
  ADD_TASK_REJECTED,
  UPDATE_TASK_COMPLETED,
  UPDATE_TASK_REJECTED,
  DELETE_TASK_COMPLETED,
  DELETE_TASK_REJECTED,
  GET_TASK_ARRAY_COMPLETED,
  GET_TASK_ARRAY_REJECTED,
} from "./taskListSlice";

const taskAxios = axios.create({
  baseURL: "http://localhost:8080/todo-list",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${getToken()}`,
  },
});

function* getTaskArray() {
  try {
    const {
      data: { success, taskArray, error },
    } = yield call(taskAxios.get, "/get-list");

    if (success) {
      yield put(GET_TASK_ARRAY_COMPLETED(taskArray));
    } else throw new Error(error.massage);
  } catch (error: any) {
    yield put(GET_TASK_ARRAY_REJECTED(error));
  }
}

function* addTask({ payload }: PayloadAction<ITaskObj>) {
  try {
    const task = payload;
    const {
      data: { success, taskArray, error },
    } = yield call(taskAxios.post, "/add-task", { task });

    if (success) {
      yield put(ADD_TASK_COMPLETED(taskArray));
    } else throw new Error(error.massage);
  } catch (error: any) {
    yield put(ADD_TASK_REJECTED(error));
  }
}

function* updateTask({
  payload: { _id, taskData },
}: PayloadAction<IEditActionType>) {
  try {
    const {
      data: { success, taskArray, error },
    } = yield call(taskAxios.patch, "/update-task", { _id, taskData });

    if (success) {
      yield put(UPDATE_TASK_COMPLETED(taskArray));
    } else throw new Error(error.massage);
  } catch (error: any) {
    yield put(UPDATE_TASK_REJECTED(error.massage));
  }
}

function* deleteTask({ payload: { _id } }: PayloadAction<IDeletePayload>) {
  try {
    const {
      data: { success, taskArray, error },
    } = yield call(taskAxios.delete, "/delete-task", {
      params: { _id },
    });

    if (success) {
      yield put(DELETE_TASK_COMPLETED(taskArray));
    } else throw new Error(error.massage);
  } catch (error: any) {
    yield put(DELETE_TASK_REJECTED(error));
  }
}

export function* watchTodoListSaga() {
  yield takeEvery(TODO_ACTION_TYPES.ADD_TASK, addTask);
  yield takeEvery(TODO_ACTION_TYPES.UPDATE_TASK, updateTask);
  yield takeEvery(TODO_ACTION_TYPES.DELETE_TASK, deleteTask);
  yield takeEvery(TODO_ACTION_TYPES.GET_TASK_ARRAY, getTaskArray);
}
