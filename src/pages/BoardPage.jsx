import { useSelector } from 'react-redux';
import Column from 'components/Column/Column';
import AddColumnButton from 'components/AddColumn/AddColumnButton';
import EditColumnButton from 'components/AddColumn/EditColumnButton';
import {  selectBoard, selectColumns  } from 'store/boards/selectors';

const BoardPage = () => {
  const board = useSelector(selectBoard);
  const columns = useSelector(selectColumns);
  return (
    <div>
      <h1>BoardPage: {board.title}</h1>
      <AddColumnButton />
      <EditColumnButton />
      {columns.map(column => {
        return <Column key={column._id} column={column}/> 
      })}
    </div>
  );
};

export default BoardPage;
