import { Stack } from '@mui/material';
import Task from './Task';

const TaskList = ({ cards }) => {
  return (
    <Stack
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
    </Stack>
  );
};
export default TaskList;
