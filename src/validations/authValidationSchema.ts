import * as Yup from "yup";

export const AuthValidationSchema = Yup.object({
  username: Yup.string()
    .required("Username is required")
    .min(3, "username must be at least 3 characters"),
  password: Yup.string()
    .required("Password is required")
    .min(5, "Password must be at least 5 characters"),
});

export default AuthValidationSchema;
