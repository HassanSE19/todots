import { connect } from "react-redux";
import { RootState } from "store/store";
import Home from "pages/Home";

const mapStateToProps = (state: RootState) => ({
  taskArray: state.taskList.taskArray,
  totalTaskCount: state.taskList.totalTaskCount,
  completedTaskCount: state.taskList.completedTaskCount,
  isLoading: state.taskList.isLoading,
});

const HomeContainer = connect(mapStateToProps)(Home);
export default HomeContainer;
