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
      {cards.map(card => {
        const { name, description, priority, deadline } = card;

        return (
          <Task
            key={card.id}
            name={name}
            description={description}
            priority={priority}
            deadline={deadline}
          />
        );
      })}
    </Box>
  );
};
export default TaskList;
