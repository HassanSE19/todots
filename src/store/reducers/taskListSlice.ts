import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITaskObj } from "type";

interface IInitialStateObj {
  taskArray: ITaskObj[];
  completedTaskCount: number;
  totalTaskCount: number;
  isLoading: boolean;
  statusCode: number | null;
  error: string | null;
}

interface IEditTaskPayload {
  newDesc: string;
  targetIndex: number;
}

interface IDeleteTogglePayload {
  targetIndex: number;
}

const initialState: IInitialStateObj = {
  taskArray: [],
  completedTaskCount: 0,
  totalTaskCount: 0,
  isLoading: false,
  statusCode: null,
  error: null,
};

export const taskListSlice = createSlice({
  name: "taskList",
  initialState,
  reducers: {
    //Add Task Actions
    ADD_TASK_STARTED: (state) => {
      state.isLoading = true;
    },

    ADD_TASK_COMPLETED: (state, { payload }: PayloadAction<ITaskObj>) => {
      state.isLoading = false;
      state.taskArray.push(payload);
      state.totalTaskCount = state.taskArray.length;
    },

    ADD_TASK_REJECTED: (state) => {
      console.log("Error Adding Task");
    },

    //Edit Task Actions
    EDIT_TASK_STARTED: (state) => {
      state.isLoading = true;
    },

    EDIT_TASK_COMPLETED: (
      state,
      { payload: { newDesc, targetIndex } }: PayloadAction<IEditTaskPayload>
    ) => {
      state.isLoading = false;
      state.taskArray[targetIndex].desc = newDesc;
    },

    EDIT_TASK_REJECTED: (state) => {
      console.log("Error Editting Task");
    },

    //Delete Task Actions
    DELETE_TASK_STARTED: (state) => {
      state.isLoading = true;
    },

    DELETE_TASK_COMPLETED: (
      state,
      { payload: { targetIndex } }: PayloadAction<IDeleteTogglePayload>
    ) => {
      state.isLoading = false;
      state.taskArray = state.taskArray.filter(
        (_, index) => index !== targetIndex
      );
      state.totalTaskCount = state.taskArray.length;
      state.completedTaskCount = state.taskArray.filter(
        (task) => task.isCompleted === true
      ).length;
    },

    DELETE_TASK_REJECTED: (state) => {
      console.log("Error Deleting Task");
    },

    //Status Toggle Actions
    SET_TASK_STATUS_STARTED: (state) => {
      state.isLoading = true;
    },

    SET_TASK_STATUS_COMPLETED: (
      state,
      { payload: { targetIndex } }: PayloadAction<IDeleteTogglePayload>
    ) => {
      state.isLoading = false;
      state.taskArray.splice(targetIndex, 1, {
        ...state.taskArray[targetIndex],
        isCompleted: !state.taskArray[targetIndex].isCompleted,
      });
      state.completedTaskCount = state.taskArray.filter(
        (task) => task.isCompleted === true
      ).length;
    },

    SET_TASK_STATUS_REJECTED: (state) => {
      console.log("Error Setting Task Status");
    },
  },
});

export const {
  ADD_TASK_STARTED,
  ADD_TASK_COMPLETED,
  ADD_TASK_REJECTED,
  EDIT_TASK_STARTED,
  EDIT_TASK_COMPLETED,
  EDIT_TASK_REJECTED,
  DELETE_TASK_STARTED,
  DELETE_TASK_COMPLETED,
  DELETE_TASK_REJECTED,
  SET_TASK_STATUS_STARTED,
  SET_TASK_STATUS_COMPLETED,
  SET_TASK_STATUS_REJECTED,
} = taskListSlice.actions;

export default taskListSlice.reducer;
