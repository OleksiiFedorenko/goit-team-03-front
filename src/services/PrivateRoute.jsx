import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectIsRefreshing } from 'store/auth/selectors';
import { Loader } from '../components/Loader/Loader';

export const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  if (isRefreshing) {
    return <Loader />;
  }

  if (!isLoggedIn && !isRefreshing) {
    return <Navigate to="/welcome" />;
  }

  return children;
};
