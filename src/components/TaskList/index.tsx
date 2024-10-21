import React from "react";
import Task from "./Task";
import { useAppSelector } from "store/store";

const TaskList = () => {
  const taskArray = useAppSelector((state) => state.taskList.taskArray);
  return (
    <div className="h-[40vh] overflow-y-scroll no-scrollbar">
      {taskArray.map((task, index) => (
        <Task key={index} task={task} index={index} />
      ))}
    </div>
  );
};

export default TaskList;
