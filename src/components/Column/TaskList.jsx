import { Stack } from '@mui/material';
// import Task from './Task';
import { useSelector } from 'react-redux';
import { selectPrioFilter } from 'store/filters/selectors';
import { ColumnInnerList } from 'components/DragAndDrop';

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
    <Stack sx={{ gap: '8px' }}>
      <ColumnInnerList tasks={filteredCards} />
      {placeholder}
    </Stack>
  );
};
export default TaskList;
