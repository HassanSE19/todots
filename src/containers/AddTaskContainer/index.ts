import { connect } from "react-redux";
import { AppDispatch } from "store/store";
import AddTask from "components/AddTask";
import { ITaskObj } from "type";
import {
  ADD_TASK_STARTED,
  ADD_TASK_COMPLETED,
} from "store/reducers/taskListSlice";

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  addTask: (newTask: ITaskObj) => {
    dispatch(ADD_TASK_STARTED());
    dispatch(ADD_TASK_COMPLETED(newTask));
  },
});

const AddTaskContainer = connect(null, mapDispatchToProps)(AddTask);
export default AddTaskContainer;
