import cards from '../../test-data/cards.json';
import Button from '@mui/material/Button';
import ColumnHeader from './ColumnHeader';
import TaskList from './TaskList';
import { Stack } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';

const Column = () => {
  return (
    <Stack
      sx={{
        width: '100%',
        maxWidth: 360,
        height: '100vh',
        marginLeft: '15px',
      }}
    >
      <ColumnHeader title={'Todo'}></ColumnHeader>
      <TaskList cards={cards}></TaskList>
      <Button variant="contained" startIcon={<AddBoxIcon />}>
        Add another card
      </Button>
    </Stack>
  );
};

export default Column;
