import React, { useState } from 'react';
import Modal from 'components/Modal/Modal';
import BoardForm from 'components/BoardForm/BoardForm';

import { Box, Typography, Button } from '@mui/material';
import { container, text, button } from 'styles';

import {
  BoardsWrapper,
  BoardsList,
  BoardsItem,
  StyledLink,
  BoardInfo,
} from './BoardNav.styled';

export const BoardNav = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeLink, setActiveLink] = useState(false);
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
      <Button
        onClick={handleOpenModal}
        variant="outlined"
        sx={button.createBoard}
      >
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
      <BoardsWrapper>
        <BoardsList>
          <BoardsItem>
            <StyledLink
              to={'1'}
              active={activeLink === '1' ? 'true' : undefined}
              onClick={() => setActiveLink('1')}
            >
              <BoardInfo>Project office</BoardInfo>
            </StyledLink>
          </BoardsItem>
          <BoardsItem>
            <StyledLink
              to={'2'}
              active={activeLink === '2' ? 'true' : undefined}
              onClick={() => setActiveLink('2')}
            >
              <BoardInfo>Neon Light Project</BoardInfo>
            </StyledLink>
          </BoardsItem>
        </BoardsList>
      </BoardsWrapper>
    </Box>
  );
};
