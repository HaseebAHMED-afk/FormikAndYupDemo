import React from "react";
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from "yup";
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const UserFormWithFormikContext = () => {
  return (
    <div>
      <h1>User Form with Formik Context</h1>
      <Formik
        initialValues={{
          name: "",
          age: "",
        }}
        onSubmit={(values, action) => {
          alert(JSON.stringify(values, null, 2));
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          age: Yup.number().required("Required"),
        })}
      >
         {props => (
             
             <Form onSubmit={props.handleSubmit}>
        <label htmlFor="name">
          {" "}
          Name:
          <TextField type='text' variant='outlined' label="Name:" />
          <Field name="name" type="text" as={TextField} id="name" />
        </label>
        <ErrorMessage  name="name" render={(msg) => (
            <p style={{color:'red'}} >{msg}</p>
        )} />
        <br />
        <br />
        <label htmlFor="age">
          {" "}
          Age:
          <Field name="age" type="number" id="age" />
        </label>
        <ErrorMessage  name="age" render={(msg) => (
            <p style={{color:'red'}} >{msg}</p>
        )} />
        <br />
        <br />
        <button type="submit">Submit</button>
      </Form>)}
      </Formik>
    </div>
  );
};

export default UserFormWithFormikContext;
