import { connect } from "react-redux";
import { AppDispatch } from "store/store";
import SignUp from "pages/Signup";
import { USER_ACTION_TYPES } from "utils/constants/actionTypes";
import { IAuthObj } from "type";

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  signup: (user: IAuthObj) => {
    dispatch({ type: USER_ACTION_TYPES.SIGNUP, payload: user });
  },
});

const SignupContainer = connect(null, mapDispatchToProps)(SignUp);
export default SignupContainer;
