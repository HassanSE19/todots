import React from "react";
import Layout from "components/Layout";
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
    <Layout>
      <Overview
        totalTaskCount={totalTaskCount}
        completedTaskCount={completedTaskCount}
      />
      <AddTaskContainer />
      <TaskList taskArray={taskArray} isLoading={isLoading} />
    </Layout>
  );
};

export default Home;
