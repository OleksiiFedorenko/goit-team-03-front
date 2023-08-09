import { useSelector } from 'react-redux';
import Column from 'components/Column/Column';
import AddColumnButton from 'components/AddColumn/AddColumnButton';
import { selectBoard, selectColumns } from 'store/boards/selectors';

import { Box } from '@mui/material';
import { container } from 'styles';

const BoardPage = () => {
  const board = useSelector(selectBoard);
  const columns = useSelector(selectColumns);

  return (
    <Box sx={container.board}>
      <h1>{board.title}</h1>
      <AddColumnButton />
      {columns.map(column => {
        return <Column key={column._id} column={column} />;
      })}
    </Box>
  );
};

export default BoardPage;
