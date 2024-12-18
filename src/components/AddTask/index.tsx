import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import TaskDescValidationSchema from "validations/taskValidation";
import { IAddTaskProps, ITaskFormInput } from "type";
import addIcon from "assets/images/addIcon.png";

const AddTask: React.FC<IAddTaskProps> = ({ addTask }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ITaskFormInput>({
    resolver: yupResolver(TaskDescValidationSchema),
  });
  const onSubmit: SubmitHandler<ITaskFormInput> = (data) => {
    const newTask = {
      desc: data.desc,
      isCompleted: false,
    };
    addTask(newTask);
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
        <p className="text-red-500 text-sm mt-1">{errors.desc.message}</p>
      )}
    </div>
  );
};

export default AddTask;
