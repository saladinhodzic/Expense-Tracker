import "./Login.css";
import { useFormik } from "formik";
import { useContext } from "react";
import * as Yup from "yup";
import { AppContext } from "../../context/ContextWrapper";
export default function Login() {
  const { setLoggedIn } = useContext(AppContext);
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      username: Yup.string()
        .min(2, "Too short.")
        .max(12, "Too long.")
        .required("Required."),
      email: Yup.string().email("Invalid email.").required("Requried."),
      password: Yup.string()
        .min(6, "Password too short.")
        .required("Required."),
    }),

    onSubmit: (values) => {
      localStorage.setItem("user", JSON.stringify(values));
      setLoggedIn(true);
    },
  });

  return (
    <div className="login-wrapper">
      <form className="login-form" onSubmit={formik.handleSubmit}>
        <div className="input-field">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
          />
        </div>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="error-message">{formik.errors.password}</div>
          ) : null}
        </div>

        <button className="submit-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
