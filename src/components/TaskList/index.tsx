import React from "react";
import TaskContainer from "containers/TaskContainer";
import { ITaskListProps } from "type";

const TaskList: React.FC<ITaskListProps> = ({ taskArray, isLoading }) => {
  return (
    <div className="h-[40vh] overflow-y-scroll no-scrollbar">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        taskArray.map((task) => <TaskContainer task={task} />)
      )}
    </div>
  );
};

export default TaskList;
