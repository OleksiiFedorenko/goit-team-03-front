import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Column from 'components/Column/Column';
import AddColumnButton from 'components/AddColumn/AddColumnButton';
import EditColumnButton from 'components/AddColumn/EditColumnButton';
import { getBoardById } from 'store/boards/operations';


const BoardPage = () => {
  const { boardId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBoardById(boardId));
  }, [dispatch, boardId]);

  return (
    <div>
      <h1>BoardPage: {boardId}</h1>
      <AddColumnButton />
      <EditColumnButton/>
      <Column />
    </div>
  );
};

export default BoardPage;
