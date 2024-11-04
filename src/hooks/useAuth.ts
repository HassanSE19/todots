import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { validateToken } from "api/userApi";
import getToken from "utils/getTokenFromCookie";
import { IUserObj, IValidateToken } from "type";
import { TODO_ACTION_TYPES } from "utils/constants/actionTypes";
import {
  GET_USER_STARTED,
  GET_USER_COMPLETED,
  GET_USER_REJECTED,
} from "store/user/userSlice";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const dispatch = useDispatch();
  const token = getToken();

  useEffect(() => {
    token
      ? (async () => {
          dispatch(GET_USER_STARTED());
          const response = (await validateToken(token)) as IValidateToken;
          const { user, success } = response?.data || {};
          if (success) {
            dispatch(GET_USER_COMPLETED(user as IUserObj));
            dispatch({ type: TODO_ACTION_TYPES.GET_TASK_ARRAY });
            setIsAuthenticated(true);
          } else {
            dispatch(GET_USER_REJECTED("Cannot verify user token"));
            setIsAuthenticated(false);
          }
        })()
      : setIsAuthenticated(false);
  });

  return isAuthenticated;
};
export default useAuth;
