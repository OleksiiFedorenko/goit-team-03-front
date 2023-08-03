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

// export const AuthFormRegister = () => {
//   const dispatch = useDispatch();

//   const { register, handleSubmit } = useForm({
//     resolver: yupResolver(schema),
//   });

//   const onSubmit = data => {
//     dispatch(getRegistration(data));
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input type="text" id="name" {...register('name')} placeholder="name" />
//       <input
//         type="email"
//         id="email"
//         {...register('email')}
//         placeholder="email"
//       />
//       <input
//         type="password"
//         id="password"
//         {...register('password')}
//         placeholder="password"
//       />
//       <button type="submit">Register Now</button>
//     </form>
//   );
// };


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