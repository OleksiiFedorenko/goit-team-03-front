import React from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {Loader} from '../Loader/Loader';

export const Container = () => {
  return (
    <div>
      <Suspense fallback={<Loader/>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
