import { Routes, Route, Navigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, lazy } from "react";

import { selectIsRefreshing } from 'store/auth/selectors';
import { fetchCurrentUser } from 'store/auth/operations';

import { PublicRoute } from "services/PublicRoute";
import { PrivateRoute } from "services/PrivateRoute";

import { Container } from "components/Container";

const Home = lazy(() => import("pages/Home"));
const Register = lazy(() => import("pages/RegisterPage"));
const Login = lazy(() => import("pages/LoginPage"));
const AuthPage = lazy(() => import("pages/AuthPage"));
const TasksPage = lazy(() => import("pages/TasksPage"));



export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(fetchCurrentUser())
  }, [dispatch]);

  return (
    !isRefreshing && 
    <Routes>
      <Route path='/' element={<Container/>}>
      <Route index element={<Home/>}/>
      <Route path='/auth' element={<PublicRoute><AuthPage/></PublicRoute>}>
      <Route path='register' element={<Register/>}/>
      <Route path='login' element={<Login/>}/></Route>
      <Route path='/tasks' element={<PrivateRoute><TasksPage/></PrivateRoute>}/>
      <Route path="*" element={<Navigate to="/"/>}/>
      </Route>

  </Routes>
  );
};
