import { Stack, Box } from '@mui/material';
// import Task from './Task';
import { useSelector } from 'react-redux';
import { selectPrioFilter } from 'store/filters/selectors';
import { ColumnInnerList } from 'components/DragAndDrop';
import { container } from 'styles';

const TaskList = ({ cards, placeholder }) => {
  const prio = useSelector(selectPrioFilter);

  // console.log('cards: ', cards);
  const filteredCards =
    prio === 'all'
      ? cards
      : cards.filter(card => {
          return card?.priority === prio;
        });

  return (
    <Box sx={container.taskListScroll}>
      <Stack sx={container.taskList}>
        <ColumnInnerList placeholder={placeholder} tasks={filteredCards} />
        {placeholder}
      </Stack>
    </Box>
  );
};
export default TaskList;
