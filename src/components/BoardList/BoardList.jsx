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
} from './BoardList.styled';
import BoardForm from 'components/BoardForm/BoardForm';

export const BoardList = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeLink, setActiveLink] = useState(false);
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
        <Modal isOpenModal={showModal} onCloseModal={handleCloseModal}>
          <BoardForm
            onCloseModal={handleCloseModal}
            title="New bord"
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
    </BoardsContainer>
  );
};
