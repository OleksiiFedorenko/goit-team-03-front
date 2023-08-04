import React, { useState } from 'react';
import Modal from 'components/Modal/Modal';
import {
  BoardsContainer,
  BoardsTitle,
  CreateBoardWrapper,
  CreateBoardTitle,
  CreateBoardButton,
  BoardsWrapper,
  BoardsList,
  BoardsItem,
  StyledLink,
  BoardInfo,
} from './Boards.styled';

export const Boards = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <BoardsContainer>
      <BoardsTitle>My boards</BoardsTitle>
      <CreateBoardWrapper>
        <CreateBoardTitle>
          Create a <br />
          new board
        </CreateBoardTitle>
        <CreateBoardButton
          type="button"
          onClick={handleOpenModal}
        ></CreateBoardButton>
        {showModal && <Modal onCloseModal={handleCloseModal} />}
      </CreateBoardWrapper>
      <BoardsWrapper>
        <BoardsList>
          <BoardsItem>
            <StyledLink
              to={'1'}
              active={activeLink === '1'}
              onClick={() => setActiveLink('1')}
            >
              <BoardInfo>Project office</BoardInfo>
            </StyledLink>
          </BoardsItem>
          <BoardsItem>
            <StyledLink
              to={'2'}
              active={activeLink === '2'}
              onClick={() => setActiveLink('2')}
            >
              <BoardInfo>Neon Light Project</BoardInfo>
            </StyledLink>
          </BoardsItem>
        </BoardsList>
      </BoardsWrapper>
    </BoardsContainer>
  );
};
