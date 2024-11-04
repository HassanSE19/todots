import React from "react";
import LayoutContainer from "containers/LayoutContainer";
import Overview from "components/Overview";
import AddTaskContainer from "containers/AddTaskContainer";
import TaskList from "components/TaskList";
import { IHomeProps } from "type";

const Home: React.FC<IHomeProps> = ({
  taskArray,
  totalTaskCount,
  completedTaskCount,
  isLoading,
}) => {
  return (
    <LayoutContainer>
      <Overview
        totalTaskCount={totalTaskCount}
        completedTaskCount={completedTaskCount}
      />
      <AddTaskContainer />
      <TaskList taskArray={taskArray} isLoading={isLoading} />
    </LayoutContainer>
  );
};

export default Home;
