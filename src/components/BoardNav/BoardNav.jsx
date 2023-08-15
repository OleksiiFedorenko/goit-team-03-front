import { useState } from 'react';

import Modal from 'components/Modal/Modal';
import BoardForm from 'components/BoardForm/BoardForm';
import { BoardNavList } from 'components/BoardsNavList';
import { Icon } from 'components/Icons';
import { addBoard } from 'store/boards/operations';

import { Stack, Box, Typography, Button } from '@mui/material';
import { container, text, button, icon } from 'styles';

export const BoardNav = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Stack sx={container.boardNav}>
      <Typography component="h2" variant="h4" sx={text.boardNavTitle}>
        My boards
      </Typography>

      <Box sx={button.createBoardWrapper}>
        <Button
          onClick={handleOpenModal}
          variant="text"
          sx={button.createBoard}
        >
          Create a<br />
          new board
          <Box className="createBoardBox" sx={button.createBoardBox}>
            <Icon id={'plus'} sx={icon.createNewBoard} />
          </Box>
        </Button>
      </Box>
      <Box sx={container.boardNavList}>
        <BoardNavList />
      </Box>

      <Modal isOpenModal={showModal} onCloseModal={handleCloseModal}>
        <BoardForm
          onCloseModal={handleCloseModal}
          title="New board"
          type="Create"
          boardOperation={addBoard}
        />
      </Modal>
    </Stack>
  );
};
