import { all } from "redux-saga/effects";
import { watchTodoListSaga } from "./taskList/taskListSaga";

function* rootSaga() {
  yield all([watchTodoListSaga()]);
}

export default rootSaga;