import React, { useState, FormEvent, ChangeEvent } from "react";

export interface ITaskObj {
  desc: string;
  isCompleted: boolean;
}

export type OnSubmitEvent =
  | FormEvent<HTMLFormElement>
  | React.MouseEvent<HTMLImageElement>;

export type OnChangeEvent = ChangeEvent<HTMLInputElement>;
export type TaskEditType = (newDesc: string, targetIndex: number) => void;
export type TaskDeleteType = (targetIndex: number) => void;
export type StatustoggleType = (targetIndex: number) => void;
