import React from "react";
import { TASK_SCHEMA } from "../../utils/validationSchema";
import { ErrorMessage, Formik } from "formik";
import { Form } from "formik";
import { Field } from "formik";
import styles from "./TodoForm.module.scss";

const TodoForm = (props) => {
  const { addTask } = props;
  return (
    <Formik
      initialValues={{ body: "" }}
      onSubmit={addTask}
      validationSchema={TASK_SCHEMA}
    >
      <Form className={styles.container}>
        <label className={styles.label}>
          <Field
            className={styles.inputPlan}
            name="body"
            placeholder="~ your plans ~"
          />
          <ErrorMessage name="body" component="div" className={styles.error} />
        </label>

        <input className={styles.submit} type="submit" value="Add" />
      </Form>
    </Formik>
  );
};

export default TodoForm;
