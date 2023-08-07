import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Modal from 'components/Modal/Modal';
import BoardForm from 'components/BoardForm/BoardForm';

import {
  Box,
  Typography,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import { container, text, button } from 'styles';

export const BoardNav = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Box sx={container.boardNav}>
      <Typography component="h2" variant="h4" sx={text.boardNavTitle}>
        My boards
      </Typography>

      <Button onClick={handleOpenModal} variant="text" sx={button.createBoard}>
        <Typography component="span">
          Create a<br />
          new board
        </Typography>
        <Box className="createBoardBox" sx={button.createBoardBox}></Box>
      </Button>

      <Modal isOpenModal={showModal} onCloseModal={handleCloseModal}>
        <BoardForm
          onCloseModal={handleCloseModal}
          title="New bord"
          type="Create"
        />
      </Modal>

      <List sx={button.boardListGroup}>
        <ListItem disablePadding>
          <ListItemButton component={NavLink} to="1" sx={button.boardListItem}>
            <ListItemText primary="Project office" disableTypography />
            <Box className="activeBoardBtn" sx={button.boardListBox} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={NavLink} to="2" sx={button.boardListItem}>
            <ListItemText primary="Neon Light Project" disableTypography />
            <Box className="activeBoardBtn" sx={button.boardListBox} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};
