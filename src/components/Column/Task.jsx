import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';

import CircleIcon from '@mui/icons-material/Circle';

import Stack from '@mui/material/Stack';
import { Icon } from 'components/Icons';
import { IconButton } from '@mui/material';

import css from './Task.module.css';

const TruncatedText = ({ text }) => (
  <Typography className={css['truncate-lines']}>{text}</Typography>
);

const Task = ({ name, description, priority, deadline }) => {
  return (
    <Card elevation={2}>
      <CardHeader title={name} />
      <CardContent>
        <TruncatedText text={description} />

        <Divider variant="middle" />

        <Stack spacing={2} direction="row">
          <Stack>
            <Typography variant="body2" color="textSecondary">
              Priority
            </Typography>
            <Stack direction="row" alignItems="center">
              <CircleIcon color="primary" />
              {priority}
            </Stack>
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
              <Icon id={'deadline'} />
            </IconButton>

            <IconButton>
              <Icon id={'move'} />
            </IconButton>

            <IconButton>
              <Icon id={'edit'} />
            </IconButton>
            <IconButton>
              <Icon id={'delete'} />
            </IconButton>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};
export default Task;
