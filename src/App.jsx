import { useEffect, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { ThemeProvider } from '@mui/system';
import { CssBaseline } from '@mui/material';
import { violetTheme, lightTheme, darkTheme } from './themes/themes';

import { selectIsRefreshing, selectTheme } from 'store/auth/selectors';
import { fetchCurrentUser } from 'store/auth/operations';

import { PublicRoute } from 'services/PublicRoute';
import { PrivateRoute } from 'services/PrivateRoute';

import { Container } from 'components/Container';

const WelcomePage = lazy(() => import('pages/WelcomePage'));
const Register = lazy(() => import('pages/RegisterPage'));
const Login = lazy(() => import('pages/LoginPage'));
const AuthPage = lazy(() => import('pages/AuthPage'));
const TasksPage = lazy(() => import('pages/TasksPage'));
const BoardPage = lazy(() => import('pages/BoardPage'));
const NoBoardPage = lazy(() =>
  import('pages/NoBoardPage').then(module => {
    return {
      ...module,
      default: module.NoBoardPage,
    };
  })
);

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const userTheme = useSelector(selectTheme);

  let currentTheme = violetTheme;
  if (userTheme === 'light') currentTheme = lightTheme;
  if (userTheme === 'dark') currentTheme = darkTheme;

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <ThemeProvider theme={currentTheme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Container />}>
            <Route
              index
              element={
                <PublicRoute>
                  <Navigate to="welcome" />
                </PublicRoute>
              }
            />
            <Route
              path="welcome"
              element={
                <PublicRoute>
                  <WelcomePage />
                </PublicRoute>
              }
            />
            <Route
              path="auth"
              element={
                <PublicRoute>
                  <AuthPage />
                </PublicRoute>
              }
            >
              <Route index element={<Navigate to="register" />} />
              <Route path="register" element={<Register />} />
              <Route path="login" element={<Login />} />
            </Route>
            <Route
              path="home"
              element={
                <PrivateRoute>
                  <TasksPage />
                </PrivateRoute>
              }
            >
              <Route index element={<NoBoardPage />} />
              <Route path=":boardId" element={<BoardPage />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </ThemeProvider>
    )
  );
};
