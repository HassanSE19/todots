import React from "react";
import Task from "./Task";
import {
  TaskEditType,
  TaskDeleteType,
  StatustoggleType,
  ITaskObj,
} from "../../type";

interface ITaskListProps {
  taskList: ITaskObj[];
  handleEdit: TaskEditType;
  handleDelete: TaskDeleteType;
  handleStatusToggle: StatustoggleType;
}

const TaskList: React.FC<ITaskListProps> = ({
  taskList,
  handleEdit,
  handleDelete,
  handleStatusToggle,
}) => {
  return (
    <div className="h-[40vh] overflow-y-scroll no-scrollbar">
      {taskList.map((task, index) => (
        <Task
          key={index}
          task={task}
          index={index}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          handleStatusToggle={handleStatusToggle}
        />
      ))}
    </div>
  );
};

export default TaskList;
