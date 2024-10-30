export interface IUserObj {
  _id: string;
  username: string;
  token: string;
}

export interface IAuthObj {
  username: string;
  password: string;
}

export interface ITaskObj {
  desc: string;
  isCompleted: boolean;
}

export interface IAuthFormInput {
  username: string;
  password: string;
}

export interface ITaskFormInput {
  desc: string;
}

export interface IEditTaskPayload {
  newDesc: string;
  targetIndex: number;
}

export interface IDeleteAndTogglePayload {
  targetIndex: number;
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
