import { Box } from '@mui/material';
import Task from './Task';

const TaskList = ({ cards }) => {
  return (
    <Box
      sx={{
        overflowY: 'auto',
        overflowX: 'hidden',
      }}
    >
      {cards && cards.map(card => {
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
