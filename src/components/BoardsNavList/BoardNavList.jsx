import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams, Navigate } from 'react-router-dom';
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
import { button, icon } from 'styles';

import { selectBoard } from 'store/boards/selectors';

export const BoardNavList = ({ boards }) => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const { boardId } = useParams();
  const board = useSelector(selectBoard);
  const [isDeleteBoard, setIsDeleteBoard] = useState(false);
  const [ShowDeleteConfirmModal, setShowDeleteConfirmModal] = useState(false);

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
    // if (window.confirm(`Do you really want to delete board ${board.title}?`)) {
    dispatch(deleteBoard(board._id));
    setIsDeleteBoard(true);
    setShowDeleteConfirmModal(false);
    // }
  };
  useEffect(() => {
    setIsDeleteBoard(false);
  }, [isDeleteBoard]);

  const openDeleteConfirmModal = () => {
    setShowDeleteConfirmModal(true);
  };

  return (
    <>
      <List sx={button.boardListGroup}>
        {boards.map(board => {
          return (
            <ListItem key={board._id} disablePadding>
              <ListItemButton
                component={NavLink}
                to={board._id}
                sx={button.boardListItem}
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
                    {isDeleteBoard && <Navigate to={'/home'} />}
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
