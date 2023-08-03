import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { getLogin } from 'store/auth/operations';
import { Formik, Field, Form } from 'formik';

import styles from './AuthFormLogin.module.css'

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
});

const initialValues={ 
  email: '', 
  password: '' 
}

export const AuthFormLogin = () => {
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    console.log(values);
    dispatch(getLogin(values))
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