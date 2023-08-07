import React, { useState } from 'react';
import Modal from 'components/Modal/Modal';
import BoardForm from 'components/BoardForm/BoardForm';

import { Box, Typography } from '@mui/material';
import { container, text } from 'styles';

import {
  CreateBoardWrapper,
  CreateBoardTitle,
  CreateBoardButton,
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
      <CreateBoardWrapper>
        <CreateBoardTitle>
          Create a <br />
          new board
        </CreateBoardTitle>
        <CreateBoardButton
          type="button"
          onClick={handleOpenModal}
        ></CreateBoardButton>
        <Modal isOpenModal={showModal} onCloseModal={handleCloseModal}>
          <BoardForm
            onCloseModal={handleCloseModal}
            title="New board"
            type="Create"
          />
        </Modal>
      </CreateBoardWrapper>
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
