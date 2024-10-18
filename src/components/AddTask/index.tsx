import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ITaskObj, IFormInput } from "../../type";
import addIcon from "../../assets/images/add_icon.png";

interface IAddTaskProps {
  handleAdd: (task: ITaskObj) => void;
}

const AddTask: React.FC<IAddTaskProps> = ({ handleAdd }) => {
  const { register, reset, handleSubmit } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const newTask = {
      desc: data.desc,
      isCompleted: false,
    };
    handleAdd(newTask);
    reset();
  };

  return (
    <form
      className="flex justify-between h-12 mb-[27px]"
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
  );
};

export default AddTask;
