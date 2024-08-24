import "./Login.css";
import { Formik } from "formik";
import * as Yup from "yup";
export default function Login() {
  const validationSchema = Yup.object().shape({
    username: Yup.string().min(2, "Too short.").max(12, "Too long."),
    email: Yup.string().email("Invalid email.").required("Requried."),
    password: Yup.string().min(6, "Password too short.").required("Required."),
  });
}
