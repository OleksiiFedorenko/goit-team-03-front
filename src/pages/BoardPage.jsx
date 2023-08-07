import { useParams } from 'react-router-dom';
import Column from 'components/Column/Column';
import AddColumnButton from 'components/AddColumn/AddColumnButton';
import EditColumnButton from 'components/AddColumn/EditColumnButton';

const BoardPage = () => {
  const { boardId } = useParams();
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
