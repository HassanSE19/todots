import { connect } from "react-redux";
import { AppDispatch } from "store/store";
import Login from "pages/Login";
import { USER_ACTION_TYPES } from "utils/constants/actionTypes";
import { IAuthObj } from "type";

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  login: (user: IAuthObj) => {
    dispatch({ type: USER_ACTION_TYPES.LOGIN, payload: user });
  },
});

const LoginContainer = connect(null, mapDispatchToProps)(Login);
export default LoginContainer;
