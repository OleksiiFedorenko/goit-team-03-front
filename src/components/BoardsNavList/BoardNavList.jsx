import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams, useNavigate } from 'react-router-dom';
import Modal from 'components/Modal/Modal';
import BoardForm from 'components/BoardForm/BoardForm';
import { Icon } from 'components/Icons';
import DeleteConfirmModal from 'components/DeleteConfirmModal/DeleteConfirmModal';

import {
  getBoardById,
  updateBoard,
  deleteBoard,
} from 'store/boards/operations';

import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
} from '@mui/material';
import { container, button, icon } from 'styles';

import { selectBoard, selectBoards } from 'store/boards/selectors';
import { selectNavIndex } from 'store/nav/selectors';
import { setNavIndex } from 'store/nav/navSlice';

export const BoardNavList = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const { boardId } = useParams();
  const board = useSelector(selectBoard);
  const [ShowDeleteConfirmModal, setShowDeleteConfirmModal] = useState(false);
  const navigate = useNavigate();
  const boards = useSelector(selectBoards);
  const navIndex = useSelector(selectNavIndex);

  useEffect(() => {
    if (!boards.length) {
      navigate('/home');
    } else {
      navigate(boards[navIndex]._id);
    }
  }, [boards, navIndex, navigate]);

  useEffect(() => {
    if (boardId) dispatch(getBoardById(boardId));
  }, [dispatch, boardId]);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setShowDeleteConfirmModal(false);
  };

  const handleDeleteBoard = () => {
    dispatch(deleteBoard(board._id));
    setShowDeleteConfirmModal(false);
    dispatch(setNavIndex(0));
  };

  const openDeleteConfirmModal = () => {
    setShowDeleteConfirmModal(true);
  };

  return (
    <>
      <List sx={container.boardListGroup}>
        {boards.map((board, index) => {
          return (
            <ListItem key={board._id} disablePadding>
              <ListItemButton
                component={NavLink}
                to={board._id}
                sx={button.boardListItem}
                onClick={() => {
                  dispatch(setNavIndex(index));
                }}
              >
                <Icon id={board.icon} sx={icon.board} />
                <ListItemText primary={board.title} disableTypography />
                {board._id === boardId && (
                  <>
                    <Box
                      onClick={handleOpenModal}
                      color="inherit"
                      size="small"
                      sx={{ mr: '8px', display: 'flex' }}
                    >
                      <Icon id={'pencil'} sx={icon.boardItem} />
                    </Box>
                    <Box
                      onClick={openDeleteConfirmModal}
                      size="small"
                      color="inherit"
                      sx={{ mr: '20px', display: 'flex' }}
                    >
                      <Icon id={'trash'} sx={icon.boardItem} />
                    </Box>
                  </>
                )}
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>

      <Modal isOpenModal={showModal} onCloseModal={handleCloseModal}>
        <BoardForm
          onCloseModal={handleCloseModal}
          title="Edit board"
          type="Edit"
          boardOperation={updateBoard}
          id={board._id}
          initData={{
            title: board.title,
            icon: board.icon,
            background: board.background,
          }}
        />
      </Modal>

      <DeleteConfirmModal
        isOpenModal={ShowDeleteConfirmModal}
        onCloseModal={handleCloseModal}
        onConfirm={handleDeleteBoard}
      />
    </>
  );
};
