import "./Login.css";
import { useFormik } from "formik";
import * as Yup from "yup";
export default function Login() {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      username: Yup.string().min(2, "Too short.").max(12, "Too long."),
      email: Yup.string().email("Invalid email.").required("Requried."),
      password: Yup.string()
        .min(6, "Password too short.")
        .required("Required."),
    }),

    onSubmit: (values) => console.log(values),
  });

  return (
    <div className="login-wrapper">
      <form className="login-form" onSubmit={formik.handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          onChange={formik.handleChange}
          value={formik.values.username}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
