import { put, takeEvery, select } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { IDeleteAndTogglePayload, IEditTaskPayload, ITaskObj } from "type";
import { TODO_ACTIONS_TYPES } from "utils/constants/actionTypes";
import {
  ADD_TASK_COMPLETED,
  ADD_TASK_REJECTED,
  EDIT_TASK_COMPLETED,
  EDIT_TASK_REJECTED,
  DELETE_TASK_COMPLETED,
  DELETE_TASK_REJECTED,
  SET_TASK_STATUS_COMPLETED,
  SET_TASK_STATUS_REJECTED,
} from "./taskListSlice";

function* addTask({ payload }: PayloadAction<ITaskObj>) {
  try {
    let newTaskArray: ITaskObj[] = yield select(
      (state) => state.taskList.taskArray
    );
    const newTask = payload;
    newTaskArray = [...newTaskArray, newTask];
    yield put(ADD_TASK_COMPLETED(newTaskArray));
  } catch (error: any) {
    yield put(ADD_TASK_REJECTED(error));
  }
}

function* editTask({
  payload: { newDesc, targetIndex },
}: PayloadAction<IEditTaskPayload>) {
  try {
    let newTaskArray: ITaskObj[] = yield select(
      (state) => state.taskList.taskArray
    );
    newTaskArray = newTaskArray.map((task, index) =>
      index === targetIndex ? { ...task, desc: newDesc } : task
    );
    yield put(EDIT_TASK_COMPLETED(newTaskArray));
  } catch (error: any) {
    yield put(EDIT_TASK_REJECTED(error));
  }
}

function* deleteTask({
  payload: { targetIndex },
}: PayloadAction<IDeleteAndTogglePayload>) {
  try {
    let newTaskArray: ITaskObj[] = yield select(
      (state) => state.taskList.taskArray
    );
    newTaskArray = newTaskArray.filter((_, index) => index !== targetIndex);
    yield put(DELETE_TASK_COMPLETED(newTaskArray));
  } catch (error: any) {
    yield put(DELETE_TASK_REJECTED(error));
  }
}

function* setTaskStatus({
  payload: { targetIndex },
}: PayloadAction<IDeleteAndTogglePayload>) {
  try {
    let newTaskArray: ITaskObj[] = yield select(
      (state) => state.taskList.taskArray
    );
    newTaskArray = newTaskArray.map((task, index) =>
      index === targetIndex ? { ...task, isCompleted: !task.isCompleted } : task
    );
    yield put(SET_TASK_STATUS_COMPLETED(newTaskArray));
  } catch (error: any) {
    yield put(SET_TASK_STATUS_REJECTED(error));
  }
}

export function* watchTodoListSaga() {
  yield takeEvery(TODO_ACTIONS_TYPES.ADD_TASK, addTask);
  yield takeEvery(TODO_ACTIONS_TYPES.EDIT_TASK, editTask);
  yield takeEvery(TODO_ACTIONS_TYPES.DELETE_TASK, deleteTask);
  yield takeEvery(TODO_ACTIONS_TYPES.SET_TASK_STATUS, setTaskStatus);
}
