import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage, Field, Form, Formik } from "formik";

const TodoForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ todo: "" }}
      onSubmit={(values) => {
        onSubmit(values);
      }}
      validate={(values) => {
        const errors = {};
        if (!values.todo) {
          errors.todo = "Required";
        }
        return errors;
      }}
    >
      {(formik) => {
        return (
          <Form>
            <Field type="text" name="todo" />
            <ErrorMessage name="todo" component="div" />
            <button type="submit">Submit</button>
          </Form>
        );
      }}
    </Formik>
  );
};

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default TodoForm;
