import React, { useState } from "react";
import { OnSubmitEvent, OnChangeEvent, ITaskObj } from "../../type";
import addIcon from "../../assets/images/add_icon.png";

interface IAddTaskProps {
    handleAdd: (task: ITaskObj) => void
}

const AddTask: React.FC<IAddTaskProps
> = ({ handleAdd }) => {
  const [task, setTask] = useState("");

  const handleAddtask = (event: OnSubmitEvent) => {
    event.preventDefault();
    const newTask = {
      desc: task,
      isCompleted: false,
    };
    setTask("");
    handleAdd(newTask);
  };

  return (
    <form
      className="flex justify-between h-12 mb-[27px]"
      onSubmit={handleAddtask}
    >
      <input
        type="text"
        id="todo"
        placeholder="Write your next task"
        value={task}
        name="todo"
        onChange={(event: OnChangeEvent) => setTask(event.target.value)}
        className="h-full bg-[#1f2937] rounded-lg text-white text-sm w-full px-4 mr-4 placeholder-[]"
        style={{ outline: "none" }}
      />
      <button>
        <img
          className="bg-[#88ab33] w-12 rounded-lg px-0.5 py-0.5"
          src={addIcon}
          onClick={handleAddtask}
          alt="Add Icon"
        />
      </button>
    </form>
  );
};

export default AddTask;
