import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Modal from 'components/Modal/Modal';
import BoardForm from 'components/BoardForm/BoardForm';

import { Box, Typography } from '@mui/material';
import { container, text } from 'styles';

import {
  CreateBoardWrapper,
  CreateBoardTitle,
  CreateBoardButton,
} from './BoardNav.styled';
import { BoardNavList } from 'components/BoardsNavList';
import { addBoard } from 'store/boards/operations';

import { selectBoards } from 'store/boards/selectors';

export const BoardNav = () => {
  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const boards = useSelector(selectBoards);

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
            title="New bord"
            type="Create"
            boardOperation={addBoard}
          />
        </Modal>
      </CreateBoardWrapper>

      <BoardNavList boards={boards} />
      {/* <BoardsWrapper>
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
      </BoardsWrapper> */}
    </Box>
  );
};
