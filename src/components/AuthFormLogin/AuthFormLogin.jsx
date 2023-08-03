import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { getLogin } from 'store/auth/operations';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(7).max(10).required(),
});

export const AuthFormLogin = () => {
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = data => {
    dispatch(getLogin(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="email"
        id="email"
        {...register('email')}
        placeholder="email"
      />
      <input
        type="password"
        id="password"
        {...register('password')}
        placeholder="password"
      />
      <button type="submit">Log in Now</button>
    </form>
  );
};
