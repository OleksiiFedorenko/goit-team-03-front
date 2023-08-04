import { useParams } from 'react-router-dom';
import Column from 'components/Column/Column';
const BoardPage = () => {
  const { boardId } = useParams();
  return (
    <div>
      <h1>BoardPage: {boardId}</h1>
      <Column />
    </div>
  );
};

export default BoardPage;
