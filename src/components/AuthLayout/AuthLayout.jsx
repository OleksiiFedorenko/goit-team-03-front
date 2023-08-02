import { Suspense } from "react";
import { Link, Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AuthLayout = () => {
    return (
        <div>
            <Link to={"register"}>Registration</Link>
            <Link to={"login"}>Log in</Link>
       
        <ToastContainer theme="colored" />
        <Suspense fallback={<div>Loading...</div>}>
                <Outlet/>
            </Suspense>
        </div>
    )
}