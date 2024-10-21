import React from "react";
import Layout from "components/Layout";
import Overview from "components/Overview";
import AddTask from "components/AddTask";
import TaskList from "components/TaskList";

const Home = () => {

  return (
    <Layout>
      <Overview />
      <AddTask />
      <TaskList />
    </Layout>
  );
};

export default Home;
