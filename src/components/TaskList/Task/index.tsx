import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {TaskDescValidationSchema} from 'validations/taskValidation'
import { editIcon } from "assets/svg/edit";
import { binIcon } from "assets/svg/bin";
import {
  TaskEditType,
  TaskDeleteType,
  StatustoggleType,
  ITaskObj,
  IFormInput,
} from "../../../type";

interface ITaskProps {
  task: ITaskObj;
  index: number;
  handleEdit: TaskEditType;
  handleDelete: TaskDeleteType;
  handleStatusToggle: StatustoggleType;
}

const Task: React.FC<ITaskProps> = ({
  task,
  index,
  handleEdit,
  handleDelete,
  handleStatusToggle,
}) => {
  const [allowEdit, setAllowEdit] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(TaskDescValidationSchema),
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    setAllowEdit(false);
    handleEdit(data.desc, index);
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
        onClick={() => handleStatusToggle(index)}
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
        <button onClick={() => handleDelete(index)}>{binIcon}</button>
      </div>
    </div>
  );
};

export default Task;
