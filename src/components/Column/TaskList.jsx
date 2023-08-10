import { Box } from '@mui/material';
import Task from './Task';
import { useSelector } from 'react-redux';
import { selectPrioFilter } from 'store/filters/selectors';

const TaskList = ({ cards }) => {
  const prio = useSelector(selectPrioFilter);
  const filteredCards =
    prio === 'all' ? cards : cards.filter(card => card.priority === prio);

  return (
    <Box
      sx={{
        overflowY: 'auto',
        overflowX: 'hidden',
      }}
    >
      {filteredCards &&
        filteredCards.map(card => {
          return (
            <Task
              key={card._id}
              taskId={card._id}
              name={card.title}
              description={card.description}
              priority={card.priority}
              deadline={card.deadline}
            />
          );
        })}
    </Box>
  );
};
export default TaskList;
