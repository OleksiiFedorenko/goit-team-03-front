import { useSelector } from 'react-redux';
import Column from 'components/Column/Column';
import AddColumnButton from 'components/AddColumn/AddColumnButton';
import { selectBoard, selectColumns } from 'store/boards/selectors';
import { Box, Typography } from '@mui/material';
import { container, text } from 'styles';
import { FilterBtn } from 'components/Filter';

const BoardPage = () => {
  const board = useSelector(selectBoard);
  const columns = useSelector(selectColumns);

  return (
    <Box sx={container.board}>
      <Box sx={container.boardInner}>
        <Box sx={container.boardTopBar}>
          <Typography component="h2" variant="h3" sx={text.boardTitle}>
            {board.title}
          </Typography>

          <FilterBtn />
        </Box>

        <Box sx={container.columns}>
          <Box sx={container.columnsInner}>
            {columns.map(column => {
              return <Column key={column._id} column={column} />;
            })}
          </Box>
          <AddColumnButton />
        </Box>
      </Box>
    </Box>
  );
};

export default BoardPage;
