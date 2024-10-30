import * as Yup from "yup";

const TaskDescValidationSchema = Yup.object({
  desc: Yup.string()
    .required("Task description is required")
    .min(3, "Task must be at least 3 characters"),
});

export default TaskDescValidationSchema;
