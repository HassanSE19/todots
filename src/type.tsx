import { ReactNode } from "react";

export interface IAuthObj {
  username: string;
  password: string;
}

export type IValidateToken = {
  data: {
    success: boolean;
    user?: IUserObj;
    error?: any;
  };
};

export interface IUserObj {
  _id: string;
  username: string;
}

export interface ITaskObj {
  _id: string;
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

export interface IDeletePayload {
  _id: string;
}

export interface ILayoutProps {
  children: ReactNode;
  username: string;
  isAuthenticated: boolean;
  handleLogout: () => void;
}

export interface ILayoutContainerProps {
  children: ReactNode;
}

export interface ILoginProps {
  login: (user: IAuthObj) => void;
}

export interface ISignupProps {
  signup: (user: IAuthObj) => void;
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
}

export interface ITaskProps {
  task: ITaskObj;
  editTask: (editData: IEditActionType) => void;
  deleteTask: (_id: string) => void;
}

export interface IOverviewProps {
  totalTaskCount: number;
  completedTaskCount: number;
}

export interface IAddTaskProps {
  addTask: (newTask: Omit<ITaskObj, "_id">) => void;
}

export interface IEditActionType {
  _id: string;
  taskData: {
    desc?: string;
    isCompleted?: boolean;
  };
}

export type TaskEditType = (newDesc: string, targetIndex: number) => void;
export type TaskDeleteType = (targetIndex: number) => void;
export type StatusToggleType = (targetIndex: number) => void;
