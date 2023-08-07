import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { TasksLayout } from 'components/TasksLayout';
import { getAllBoards } from 'store/boards/operations';

const TasksPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBoards());
  }, [dispatch]);
  
  return <TasksLayout />;
};

export default TasksPage;
