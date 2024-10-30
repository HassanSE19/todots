import { connect } from "react-redux";
import { AppDispatch, RootState } from "store/store";
import Task from "components/TaskList/Task";
import { IEditActionType, ITaskContainerProps } from "type";
import { TODO_ACTION_TYPES } from "utils/constants/actionTypes";

const mapStateToProps = (state: RootState, ownProps: ITaskContainerProps) => ({
  task: ownProps.task,
  index: ownProps.index,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  editTask: (editData: IEditActionType) => {
    dispatch({ type: TODO_ACTION_TYPES.EDIT_TASK, payload: editData });
  },
  deleteTask: (targetIndex: number) => {
    dispatch({
      type: TODO_ACTION_TYPES.DELETE_TASK,
      payload: { targetIndex },
    });
  },
  setTaskStatus: (targetIndex: number) => {
    dispatch({
      type: TODO_ACTION_TYPES.SET_TASK_STATUS,
      payload: { targetIndex },
    });
  },
});

const TaskContainer = connect(mapStateToProps, mapDispatchToProps)(Task);
export default TaskContainer;
