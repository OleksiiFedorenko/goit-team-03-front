import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import Modal from 'components/Modal/Modal';
import BoardForm from 'components/BoardForm/BoardForm';
import { Icon } from 'components/Icons';

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
  IconButton,
  Box,
} from '@mui/material';
import { button, icon } from 'styles';

export const BoardNavList = ({ boards }) => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const { boardId } = useParams();

  useEffect(() => {
    if (boardId) dispatch(getBoardById(boardId));
  }, [dispatch, boardId]);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleDeleteBoard = () => {
    if (window.confirm('Do you really want to delete board?')) {
      dispatch(deleteBoard(boardId));
    }
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
                <Box
                  onClick={handleOpenModal}
                  sx={{
                    display: 'flex',
                    mr: '8px',
                  }}
                >
                  <Icon id={'pencil'} sx={icon.boardItem} />
                </Box>
                <Box
                  onClick={handleDeleteBoard}
                  sx={{ display: 'flex', mr: '20px' }}
                >
                  <Icon id={'trash'} sx={icon.boardItem} />
                </Box>
                <Box className="activeBoardBtn" sx={button.boardListBox} />
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
          id={boardId}
        />
      </Modal>
    </>
  );
};
