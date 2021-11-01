import { React, useState } from "react";
import { Formik, Field, Form } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  name: yup
    .string()
    .required("Required")
    .matches(/^[a-zA-Z]+$/, "Must be letters"),
  lastName: yup
    .string()
    .required("Required")
    .matches(/^[a-zA-Z]+$/, "Must be letters"),
  email: yup.string().email("Must be a valid email").required("Required"),
  password: yup
    .string()
    .required("Required")
    .min(6, "Must be at least 6 characters long"),
  repeatPassword: yup
    .string()
    .required("Required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

function App() {
  const [data, setData] = useState();
  console.log(data);

  return (
    <div className="App">
      <Formik
        initialValues={{
          name: "",
          lastName: "",
          email: "",
          password: "",
          repeatPassword: "",
        }}
        onSubmit={(data, { resetForm }) => {
          setData(data);
          resetForm();
        }}
        validationSchema={validationSchema}
      >
        {(props) => (
          <Form>
            <div>
              <label htmlFor="name">Name</label>
              <Field
                id="name"
                type="text"
                name="name"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.name}
              />
              {props.errors.name && props.touched.name ? (
                <div>{props.errors.name}</div>
              ) : null}
            </div>
            <div>
              <label htmlFor="lastName">Last Name</label>
              <Field
                id="lastName"
                type="text"
                name="lastName"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.lastName}
              />
              {props.errors.lastName && props.touched.lastName ? (
                <div>{props.errors.lastName}</div>
              ) : null}
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <Field
                id="email"
                type="text"
                name="email"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.email}
              />
              {props.errors.email && props.touched.email ? (
                <div>{props.errors.email}</div>
              ) : null}
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <Field
                id="password"
                type="password"
                name="password"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.password}
              />
              {props.errors.password && props.touched.password ? (
                <div>{props.errors.password}</div>
              ) : null}
            </div>
            <div>
              <label htmlFor="repeatPassword">Repeat Password</label>
              <Field
                id="repeatPassword"
                type="password"
                name="repeatPassword"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.repeatPassword}
              />
              {props.errors.repeatPassword && props.touched.repeatPassword ? (
                <div>{props.errors.repeatPassword}</div>
              ) : null}
            </div>
            <div className="btn-container">
              <button type="submit">Submit</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default App;
