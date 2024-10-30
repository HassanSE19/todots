import { all } from "redux-saga/effects";
import { watchTodoListSaga } from "./taskList/taskListSaga";
import { watchUserSaga } from "./user/userSaga";

function* rootSaga() {
  yield all([watchTodoListSaga(), watchUserSaga()]);
}

export default rootSaga;
