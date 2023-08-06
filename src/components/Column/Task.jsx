import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import priorityColorSwitcher from 'helpers/priorityColorSwitcher';
import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import { Icon } from 'components/Icons';
import { IconButton } from '@mui/material';

import css from './Task.module.css';

const TruncatedText = ({ text }) => (
  <Typography className={css['truncate-lines']}>{text}</Typography>
);

const Task = ({ name, description, priority, deadline }) => {
  const priorityColor = priorityColorSwitcher(priority);
  const priorityStyle = {
    '&::before': {
      content: '""',
      height: '12px',
      width: '12px',
      backgroundColor: `${priorityColor}`,
      borderRadius: '50%',
      display: 'inline-block',
    },
  };

  return (
    <Card
      elevation={2}
      sx={{
        borderLeft: `4px solid ${priorityColor}`,
      }}
    >
      <CardHeader title={name} />
      <CardContent>
        <TruncatedText text={description} />

        <Divider variant="middle" />

        <Stack spacing={2} direction="row">
          <Stack>
            <Typography variant="body2" color="textSecondary">
              Priority
            </Typography>
            <Typography sx={priorityStyle}>{priority}</Typography>
          </Stack>

          <Stack>
            <Typography variant="body2" color="textSecondary">
              Deadline
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {deadline}
            </Typography>
          </Stack>
          <Stack
            direction="row"
            alignItems="flex-end"
            justifyContent="flex-end"
          >
            <IconButton>
              <Icon id={'alert'} />
            </IconButton>

            <IconButton>
              <Icon id={'move'} />
            </IconButton>

            <IconButton>
              <Icon id={'pencil'} />
            </IconButton>
            <IconButton>
              <Icon id={'trash'} />
            </IconButton>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};
export default Task;
