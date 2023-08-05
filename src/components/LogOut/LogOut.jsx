import { logout } from 'store/auth/operations';
import { useDispatch } from 'react-redux';
import { LogOutWrapper, LogOutButton } from './LogOut.styled';

export const LogOut = () => {
  const dispatch = useDispatch();

  return (
    <LogOutWrapper>
      <LogOutButton onClick={() => dispatch(logout())}>Log out</LogOutButton>
    </LogOutWrapper>
  );
};
