import { connect } from "react-redux";
import { AppDispatch } from "store/store";
import AddTask from "components/AddTask";
import { TODO_ACTION_TYPES } from "utils/constants/actionTypes";
import { ITaskObj } from "type";

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  addTask: (newTask: ITaskObj) => {
    dispatch({ type: TODO_ACTION_TYPES.ADD_TASK, payload: newTask });
  },
});

const AddTaskContainer = connect(null, mapDispatchToProps)(AddTask);
export default AddTaskContainer;
