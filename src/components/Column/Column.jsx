import cards from '../../test-data/cards.json';
import Button from '@mui/material/Button';
import ColumnHeader from './ColumnHeader';
import TaskList from './TaskList';
import Box from '@mui/material/Box';

const Column = () => {
  return (
    <>
      <Box sx={{ width: '100%', maxWidth: 360 }}>
        <ColumnHeader title={'Todo'}></ColumnHeader>
        <TaskList cards={cards}></TaskList>
        <Button variant="contained">Add another card</Button>
      </Box>
    </>
  );
};

export default Column;
