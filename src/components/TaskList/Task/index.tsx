import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TaskDescValidationSchema } from "validations/taskValidation";
import { editIcon } from "assets/svg/edit";
import { binIcon } from "assets/svg/bin";
import { ITaskObj, IFormInput } from "type";
import {
  EDIT_TASK_STARTED,
  EDIT_TASK_COMPLETED,
  DELETE_TASK_STARTED,
  DELETE_TASK_COMPLETED,
  SET_TASK_STATUS_STARTED,
  SET_TASK_STATUS_COMPLETED,
} from "store/reducers/taskListSlice";
import { useAppDispatch } from "store/store";

interface ITaskProps {
  task: ITaskObj;
  index: number;
}

const Task: React.FC<ITaskProps> = ({ task, index }) => {
  const [allowEdit, setAllowEdit] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(TaskDescValidationSchema),
  });

  const handleStatusChange = (targetIndex: number) => {
    dispatch(SET_TASK_STATUS_STARTED());
    dispatch(SET_TASK_STATUS_COMPLETED({ targetIndex }));
  };

  const handleTaskDelete = (targetIndex: number) => {
    dispatch(DELETE_TASK_STARTED());
    dispatch(DELETE_TASK_COMPLETED({ targetIndex }));
  };

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    setAllowEdit(false);
    dispatch(EDIT_TASK_STARTED());
    dispatch(EDIT_TASK_COMPLETED({ newDesc: data.desc, targetIndex: index }));
    reset();
  };

  return allowEdit ? (
    <div className="border-[#c2b39a] border h-16 mb-[27px]" key={index}>
      <form className="w-full h-full" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          defaultValue={task.desc}
          {...register("desc", { required: true })}
          className="h-full bg-[#000000] text-white w-full px-4"
          style={{ outline: "none" }}
        />
        {errors.desc && (
          <p className="text-red-500 text-sm mt-1">{errors.desc.message}</p>
        )}
      </form>
    </div>
  ) : (
    <div className="border border-[#c2b39a] flex justify-between p-4 h-16 mb-[27px]">
      <button
        onClick={() => handleStatusChange(index)}
        className="flex items-center"
      >
        <div
          className={`h-8 w-8 border-2 rounded-[50%] ${
            task.isCompleted ? "bg-[#22C55E]" : ""
          } border-[#22C55E] mr-4`}
        ></div>
        <div
          className={`max-w-[280px] max-h-12  overflow-y-scroll no-scrollbar ${
            task.isCompleted ? "line-through" : ""
          }`}
        >
          {task.desc}
        </div>
      </button>

      <div>
        <button className="mr-2" onClick={() => setAllowEdit(true)}>
          {editIcon}
        </button>
        <button onClick={() => handleTaskDelete(index)}>{binIcon}</button>
      </div>
    </div>
  );
};

export default Task;
