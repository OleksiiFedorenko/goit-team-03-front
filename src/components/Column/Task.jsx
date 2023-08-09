import Card from '@mui/material/Card';
import priorityColorSwitcher from 'helpers/priorityColorSwitcher';
import { Typography, Stack, Box, useTheme } from '@mui/material';
import TruncatedText from './TruncatedText';
import IconBtn from './IconBtn';

const Task = ({ name, description, priority, deadline }) => {
  const theme = useTheme();

  const priorityColor = priorityColorSwitcher(priority);
  const priorityStyle = {
    '&::before': {
      content: '""',
      transform: 'translateY(20%)',
      height: '12px',
      width: '12px',
      backgroundColor: `${priorityColor}`,
      borderRadius: '50%',
      display: 'inline-block',
      marginRight: '4px',
    },
  };
  const handleIconClick = () => {};

  return (
    <Card
      elevation={2}
      sx={{
        py: '14px',
        pl: '24px',
        pr: '20px',
        borderLeft: `4px solid ${priorityColor}`,
        mb: '14px',
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

        {/* components below devider       */}

        <Box>
          <Stack direction="row">
            {/* priority container      */}
            <Stack
              justifyContent="flex-end"
              alignItems="flex-start"
              spacing={0}
              sx={{ marginRight: '14px' }}
            >
              <Box>
                <Typography variant="caption" color="text.sideSecond">
                  Priority
                </Typography>
              </Box>
              <Box>
                <Typography variant="h6" sx={priorityStyle}>
                  {priority}
                </Typography>
              </Box>
            </Stack>

            {/* deadline container     */}
            <Stack
              flexGrow={1}
              justifyContent="flex-end"
              alignItems="flex-start"
              spacing={0}
            >
              <Box>
                <Typography variant="caption" color="text.sideSecond">
                  Deadline
                </Typography>
              </Box>
              <Box>
                <Typography variant="h6" color="text.primary">
                  {deadline}
                </Typography>
              </Box>
            </Stack>

            {/* icons container     */}

            <Stack
              direction="row"
              justifyContent="flex-end"
              alignItems="flex-end"
              spacing={1}
            >
              <Box>
                <IconBtn onClick={handleIconClick} iconId="alert" />
              </Box>
              <Box>
                <IconBtn onClick={handleIconClick} iconId="move" />
              </Box>

              <Box>
                <IconBtn onClick={handleIconClick} iconId="pencil" />
              </Box>

              <Box>
                <IconBtn onClick={handleIconClick} iconId="trash" />
              </Box>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Card>
  );
};
export default Task;
