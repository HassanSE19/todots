import { connect } from "react-redux";
import { AppDispatch, RootState } from "store/store";
import Layout from "components/Layout";
import { ILayoutContainerProps } from "type";
import { USER_ACTION_TYPES } from "utils/constants/actionTypes";

const mapStateToProps = (
  state: RootState,
  ownProps: ILayoutContainerProps
) => ({
  isAuthenticated: new Boolean(state.user._id).valueOf(),
  children: ownProps.children,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  handleLogout: () => {
    dispatch({ type: USER_ACTION_TYPES.LOGOUT });
  },
});

const LayoutContainer = connect(mapStateToProps, mapDispatchToProps)(Layout);
export default LayoutContainer;
