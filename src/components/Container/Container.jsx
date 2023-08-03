import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Column from 'components/Column/Column';

export const Container = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      <Column />
    </div>
  );
};
