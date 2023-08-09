import { useSelector } from 'react-redux';
import Column from 'components/Column/Column';
import AddColumnButton from 'components/AddColumn/AddColumnButton';
import EditColumnButton from 'components/AddColumn/EditColumnButton';
import {  selectBoard } from 'store/boards/selectors';

const BoardPage = () => {
  const board = useSelector(selectBoard);
  return (
    <div>
      <h1>BoardPage: {board.title}</h1>
      <AddColumnButton />
      <EditColumnButton />
      <Column />
    </div>
  );
};

export default BoardPage;
