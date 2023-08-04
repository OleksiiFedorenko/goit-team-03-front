import { LogOutWrapper, LogOutButton } from './LogOut.styled';
import { logout } from 'store/auth/operations';

export const LogOut = ({ dispatch }) => {
  return (
    <LogOutWrapper>
      <LogOutButton onClick={() => dispatch(logout())}>Log out</LogOutButton>
    </LogOutWrapper>
  );
};
