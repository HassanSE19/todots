import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { notification } from "antd";
import { ITaskObj } from "type";

interface IInitialStateObj {
  taskArray: ITaskObj[];
  completedTaskCount: number;
  totalTaskCount: number;
  isLoading: boolean;
  error: string;
}

const initialState: IInitialStateObj = {
  taskArray: [],
  completedTaskCount: 0,
  totalTaskCount: 0,
  isLoading: false,
  error: "",
};

export const taskListSlice = createSlice({
  name: "taskList",
  initialState,
  reducers: {
    //Get Task Array Actions
    GET_TASK_ARRAY_STARTED: (state) => {
      state.isLoading = true;
    },

    GET_TASK_ARRAY_COMPLETED: (
      state,
      { payload }: PayloadAction<ITaskObj[]>
    ) => {
      state.isLoading = false;
      state.taskArray = payload;
      state.totalTaskCount = state.taskArray.length;
      state.completedTaskCount = state.taskArray.filter(
        (task) => task.isCompleted === true
      ).length;
    },

    GET_TASK_ARRAY_REJECTED: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },

    //Add Task Actions
    ADD_TASK_STARTED: (state) => {
      state.isLoading = true;
    },

    ADD_TASK_COMPLETED: (state, { payload }: PayloadAction<ITaskObj[]>) => {
      state.isLoading = false;
      state.taskArray = payload;
      state.totalTaskCount = state.taskArray.length;
      notification.success({
        message: `Success`,
        description: "You task has been added.",
        duration: 2,
      });
    },

    ADD_TASK_REJECTED: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
      notification.error({
        message: "Sorry",
        description: "Couldn't add your task.",
        duration: 2,
      });
    },

    //Update Task Actions
    UPDATE_TASK_STARTED: (state) => {
      state.isLoading = true;
    },

    UPDATE_TASK_COMPLETED: (state, { payload }: PayloadAction<ITaskObj[]>) => {
      state.isLoading = false;
      state.taskArray = payload;
      state.totalTaskCount = state.taskArray.length;
      state.completedTaskCount = state.taskArray.filter(
        (task) => task.isCompleted === true
      ).length;
      notification.success({
        message: `Success`,
        description: "You task has been updated.",
        duration: 2,
      });
    },

    UPDATE_TASK_REJECTED: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
      notification.error({
        message: "Sorry",
        description: "Couldn't update your task.",
        duration: 2,
      });
    },

    //Delete Task Actions
    DELETE_TASK_STARTED: (state) => {
      state.isLoading = true;
    },

    DELETE_TASK_COMPLETED: (state, { payload }: PayloadAction<ITaskObj[]>) => {
      state.isLoading = false;
      state.taskArray = payload;
      state.totalTaskCount = state.taskArray.length;
      state.completedTaskCount = state.taskArray.filter(
        (task) => task.isCompleted === true
      ).length;
      notification.success({
        message: `Success`,
        description: "You task has been deleted.",
        duration: 2,
      });
    },

    DELETE_TASK_REJECTED: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
      notification.error({
        message: "Sorry",
        description: "Couldn't delete your task.",
        duration: 2,
      });
    },
  },
});

export const {
  ADD_TASK_STARTED,
  ADD_TASK_COMPLETED,
  ADD_TASK_REJECTED,

  UPDATE_TASK_STARTED,
  UPDATE_TASK_COMPLETED,
  UPDATE_TASK_REJECTED,

  DELETE_TASK_STARTED,
  DELETE_TASK_COMPLETED,
  DELETE_TASK_REJECTED,

  GET_TASK_ARRAY_STARTED,
  GET_TASK_ARRAY_COMPLETED,
  GET_TASK_ARRAY_REJECTED,
} = taskListSlice.actions;

export default taskListSlice.reducer;
