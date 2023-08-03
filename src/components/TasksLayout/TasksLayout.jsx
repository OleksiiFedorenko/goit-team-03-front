import { Suspense } from "react";
import { Link, Outlet } from 'react-router-dom';
import {  useSelector, useDispatch } from "react-redux";
import { selectUser } from "store/auth/selectors";
import { logout } from "store/auth/operations";

export const TasksLayout = () => {
    const {name} = useSelector(selectUser);
    const dispatch = useDispatch();
    return (
        <div style={{display: "flex", margin: 20}}>
            <aside style={{display: "flex", margin: 20, flexDirection: "column", outline: "1px solid black"}}>
                <ul>
                    <li><Link to={'1'}>Board 1</Link></li>
                    <li><Link to={'2'}>Board 2</Link></li>
                </ul>
                <button onClick={() => dispatch(logout())}>Log out</button>
            </aside>
            <div>
            <header>
                <h2 style={{outline: "1px solid black"}}>User name: {name}</h2>
            </header>
            <main style={{outline: "1px solid black"}}>
                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet/>
                </Suspense>
            </main>
            </div>

        </div>
    )
}