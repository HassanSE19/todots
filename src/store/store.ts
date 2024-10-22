import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga'
import taskListReducer from "store/taskList/taskListSlice";
import saga from './saga'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: {
    taskList: taskListReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(saga)

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
