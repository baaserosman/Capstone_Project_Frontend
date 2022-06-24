import * as yup from "yup";

export const SignUpValidationSchema = yup.object().shape({
  email: yup.string().email("invalid Email").required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters!")
    .matches(/\d+/, "Password must have a number!")
    .matches(/[a-z]+/, "Password must have a lowercase!")
    .matches(/[A-Z]+/, "Password must have a uppercase!"),
  // .matches(/[!?.*@$#%&^()-+]+/, "Password must have a special character"),
});
