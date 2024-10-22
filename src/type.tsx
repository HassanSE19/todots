export interface ITaskObj {
  desc: string;
  isCompleted: boolean;
}

export interface IFormInput {
  desc: string;
}

export interface IHomeProps {
  taskArray: ITaskObj[];
  totalTaskCount: number;
  completedTaskCount: number;
  isLoading: boolean;
}

export interface ITaskListProps {
  taskArray: ITaskObj[];
  isLoading: boolean;
}

export interface ITaskContainerProps {
  task: ITaskObj;
  index: number;
}

export interface ITaskProps {
  task: ITaskObj;
  index: number;
  editTask: (editData: IEditActionType) => void;
  deleteTask: (targetIndex: number) => void;
  setTaskStatus: (targetIndex: number) => void;
}

export interface IOverviewProps {
  totalTaskCount: number;
  completedTaskCount: number;
}

export interface IAddTaskProps {
  addTask: (newTask: ITaskObj) => void;
}

export interface IEditActionType {
  newDesc: string;
  targetIndex: number;
}

export type TaskEditType = (newDesc: string, targetIndex: number) => void;
export type TaskDeleteType = (targetIndex: number) => void;
export type StatusToggleType = (targetIndex: number) => void;
