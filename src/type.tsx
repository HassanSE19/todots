import React, { useState, FormEvent, ChangeEvent } from "react";

export interface ITaskObj {
  desc: string;
  isCompleted: boolean;
}

export interface IFormInput {
  desc: string;
}

export type TaskEditType = (newDesc: string, targetIndex: number) => void;
export type TaskDeleteType = (targetIndex: number) => void;
export type StatustoggleType = (targetIndex: number) => void;
