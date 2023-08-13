import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectBoards } from 'store/boards/selectors';
import { Box, Typography } from '@mui/material';
import { container, text } from 'styles';

export const NoBoardPage = () => {
  const boards = useSelector(selectBoards);
  const haveBoards = boards.length > 0;

  if (haveBoards) return <Navigate to={boards[0]._id} />;

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
