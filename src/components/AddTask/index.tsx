import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {TaskDescValidationSchema} from 'validations/taskValidation';
import { ITaskObj, IFormInput } from "type";
import addIcon from "assets/images/add_icon.png";

interface IAddTaskProps {
  handleAdd: (task: ITaskObj) => void;
}

const AddTask: React.FC<IAddTaskProps> = ({ handleAdd }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(TaskDescValidationSchema),
  });
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const newTask = {
      desc: data.desc,
      isCompleted: false,
    };
    handleAdd(newTask);
    reset();
  };

  return (
    <div className="mb-[27px]">
      <form
        className="flex justify-between h-12"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="text"
          id="todo"
          placeholder="Write your next task"
          {...register("desc", { required: true })}
          className="h-full bg-[#1f2937] rounded-lg text-white text-sm w-full px-4 mr-4 placeholder-[]"
          style={{ outline: "none" }}
        />
        <button type="submit">
          <img
            className="bg-[#88ab33] w-12 rounded-lg px-0.5 py-0.5"
            src={addIcon}
            alt="Add Icon"
          />
        </button>
      </form>
      {errors.desc && (
        <p className="text-red-500 text-sm mt-1">
          {errors.desc.message}
        </p>
      )}
    </div>
  );
};

export default AddTask;
