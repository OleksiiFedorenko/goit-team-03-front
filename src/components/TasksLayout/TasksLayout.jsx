import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { selectUser } from 'store/auth/selectors';
import { TopBar } from 'components/TopBar';
import { SideBar } from 'components/SideBar';

export const TasksLayout = () => {
  const dispatch = useDispatch();
  const { name, avatar } = useSelector(selectUser);
  return (
    <div style={{ display: "flex" }}>
      <SideBar dispatch={dispatch} />
      <div style={{ display: "flex", flexDirection: "column", flexGrow: "1"}}>
        <TopBar name={name} avatar={avatar} />
        <main style={{ outline: '1px solid black' }}>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </main>
      </div>
    </div>
  );
};
