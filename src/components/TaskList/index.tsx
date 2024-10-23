import React from "react";
import TaskContainer from "containers/TaskContainer";
import { ITaskListProps } from "type";

const TaskList: React.FC<ITaskListProps> = ({ taskArray, isLoading }) => {
  return (
    <div className="h-[40vh] overflow-y-scroll no-scrollbar">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        taskArray.map((task, index) => (
          <TaskContainer key={index} task={task} index={index} />
        ))
      )}
    </div>
  );
};

export default TaskList;
