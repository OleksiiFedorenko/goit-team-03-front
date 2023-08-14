import { Box, Typography } from '@mui/material';
import { container, text } from 'styles';

export const NoBoardPage = () => {
  return (
    <Box sx={container.board}>
      <Box sx={container.noBoardInner}>
        <Typography component="p" sx={text.noBoard}>
          Before starting your project, it is essential&nbsp;
          <Typography component="span" sx={text.accent}>
            to create a board
          </Typography>
          &nbsp;to visualize and track all the necessary tasks and milestones.
          This board serves as a powerful tool to organize the workflow and
          ensure effective collaboration among team members.
        </Typography>
      </Box>
    </Box>
  );
};
