import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { getRegistration } from 'store/auth/operations';
import { Formik, Field, Form } from 'formik';

import styles from './AuthFormRegister.module.css'

const initialValues = {
  name: '',
  email: '', 
  password: '', 
}

const schema = yup.object().shape({
  name: yup.string().trim().required(),
  email: yup.string().email().required(),
  password: yup.string().min(7).required(),
});

export const AuthFormRegister = () => {
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    console.log(values);
    dispatch(getRegistration(values))
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={onSubmit}
    >
      <Form className={styles.form}>
        <Field
            className={styles.input} 
            id="name"
            name="name" 
            type="text"
            placeholder="Enter your name"
        />
        <Field
          className={styles.input} 
          id="email"
          name="email" 
          type="email"
          placeholder="Enter your email"
        />
        <Field
          className={styles.input}
          id="password"
          name="password" 
          type="password"
          placeholder="Confirm a password"
        />

        <button className={styles.button} type="submit">Log In Now</button>
      </Form>
    </Formik>
  );
};