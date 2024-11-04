import { connect } from "react-redux";
import { AppDispatch, RootState } from "store/store";
import Task from "components/TaskList/Task";
import { IEditActionType, ITaskContainerProps } from "type";
import { TODO_ACTION_TYPES } from "utils/constants/actionTypes";

const mapStateToProps = (state: RootState, ownProps: ITaskContainerProps) => ({
  task: ownProps.task,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  editTask: (editData: IEditActionType) => {
    dispatch({ type: TODO_ACTION_TYPES.UPDATE_TASK, payload: editData });
  },
  deleteTask: (_id: string) => {
    dispatch({
      type: TODO_ACTION_TYPES.DELETE_TASK,
      payload: { _id },
    });
  },
  setTaskStatus: (_id: string) => {
    dispatch({
      type: TODO_ACTION_TYPES.SET_TASK_STATUS,
      payload: { _id },
    });
  },
});

const TaskContainer = connect(mapStateToProps, mapDispatchToProps)(Task);
export default TaskContainer;
