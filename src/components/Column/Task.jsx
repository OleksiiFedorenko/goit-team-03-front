import Card from '@mui/material/Card';
import priorityColorSwitcher from 'helpers/priorityColorSwitcher';
import {
  Typography,
  Stack,
  IconButton,
  Box,
  useTheme,
  Grid,
} from '@mui/material';
import { Icon } from 'components/Icons';
import TruncatedText from './TruncatedText';

const Task = ({ name, description, priority, deadline }) => {
  const theme = useTheme();

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
        py: '14px',
        pl: '24px',
        pr: '20px',
        borderLeft: `4px solid ${priorityColor}`,
      }}
    >
      <Box>
        <Box
          sx={{
            pb: '14px',
            mb: '14px',
            borderBottom: `1px solid ${theme.palette.side.divider}`,
          }}
        >
          <Typography variant="h5" component="h2" color="text.primary" mb={1}>
            {name}
          </Typography>
          <TruncatedText text={description} />
        </Box>

        <Grid container>
          <Grid item xs={4}>
            <Typography variant="caption" color="text.sideSecond">
              Priority
            </Typography>
            <Typography variant="h6" sx={priorityStyle}>
              {priority}
            </Typography>
          </Grid>
          {/* <Grid item xs={4}>
            <Typography variant="body2" color="textSecondary">
              Deadline
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {deadline}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Icon id={'alert'} />
            <Icon id={'move'} />
            <Icon id={'pencil'} />
            <Icon id={'trash'} />
          </Grid>*/}
        </Grid>
      </Box>
    </Card>
  );
};
export default Task;
