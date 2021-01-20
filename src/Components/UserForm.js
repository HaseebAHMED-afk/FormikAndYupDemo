import React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup'

const UserForm = () => {
 
  const formik = useFormik({
    initialValues: {
      name: "",
      age: "",
    },
    validationSchema: Yup.object({
        name: Yup.string()
        .max(15 , 'Must be 15 characters or less')
        .required('Required'),
        age: Yup.number()
        .required('Required')
    })
    ,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      <h1>Submission Form:</h1>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">
          {" "}
          Name:
          <input
            type="text"
            id="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
          />
        </label>
        { formik.touched.name && formik.errors.name ? (
          <p style={{ color: "red" }}>{formik.errors.name}</p>
        ) : null}
        <br />
        <br />
        <label htmlFor="age">
          {" "}
          Age:
          <input
            type="number"
            id="age"
            onChange={formik.handleChange}
            value={formik.values.age}
            onBlur={formik.handleBlur}
          />
        </label>
        {formik.touched.age && formik.errors.age ? (
          <p style={{ color: "red" }}>{formik.errors.age}</p>
        ) : null}
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
