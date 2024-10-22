import { connect } from "react-redux";
import { AppDispatch, RootState } from "store/store";
import Task from "components/TaskList/Task";
import { IEditActionType, ITaskContainerProps } from "type";
import {
  EDIT_TASK_STARTED,
  EDIT_TASK_COMPLETED,
  DELETE_TASK_STARTED,
  DELETE_TASK_COMPLETED,
  SET_TASK_STATUS_STARTED,
  SET_TASK_STATUS_COMPLETED,
} from "store/reducers/taskListSlice";

const mapStateToProps = (state: RootState, ownProps: ITaskContainerProps) => ({
  task: ownProps.task,
  index: ownProps.index,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  editTask: (editData: IEditActionType) => {
    dispatch(EDIT_TASK_STARTED());
    dispatch(EDIT_TASK_COMPLETED(editData));
  },
  deleteTask: (targetIndex: number) => {
    dispatch(DELETE_TASK_STARTED());
    dispatch(DELETE_TASK_COMPLETED({ targetIndex }));
  },
  setTaskStatus: (targetIndex: number) => {
    dispatch(SET_TASK_STATUS_STARTED());
    dispatch(SET_TASK_STATUS_COMPLETED({ targetIndex }));
  },
});

const AddTaskContainer = connect(mapStateToProps, mapDispatchToProps)(Task);
export default AddTaskContainer;
