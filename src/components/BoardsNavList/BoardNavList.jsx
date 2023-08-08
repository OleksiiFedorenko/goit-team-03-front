import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Modal from 'components/Modal/Modal';
import BoardForm from 'components/BoardForm/BoardForm';
import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  IconButton,
} from '@mui/material';
import { Icon } from 'components/Icons';

import { getBoardById, updateBoard } from 'store/boards/operations';

export const BoardNavList = ({ boards }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const { boardId } = useParams();

  const handleListItemClick = (event, index, boardId) => {
    setSelectedIndex(index);
    dispatch(getBoardById(boardId));
  };
  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <Box sx={{ width: '100%', m: '0', p: '0' }}>
      <List
        component="nav"
        sx={{ width: '100%', m: '0', p: '0', color: 'text.sideSecond' }}
      >
        {boards.map((board, index) => {
          return (
            <ListItemButton
              key={board._id}
              component={NavLink}
              to={board._id}
              sx={[
                {
                  '&:focus': {
                    color: 'text.sideMain',
                    backgroundColor: 'background.sideSecond',
                  },
                },
              ]}
              selected={selectedIndex === index}
              onClick={event => handleListItemClick(event, index, board._id)}
            >
              <Icon id={board.icon} />

              <ListItemText primary={board.title} />
              <IconButton
                onClick={handleOpenModal}
                color="inherit"
                size="small"
                sx={[
                  {
                    '&:focus': {
                      color: 'secondary',
                      backgroundColor: 'background.sideSecond',
                    },
                  },
                ]}
              >
                <Icon id={'pencil'} />
              </IconButton>
              <IconButton size="small" color="inherit">
                <Icon id={'trash'} />
              </IconButton>
            </ListItemButton>
          );
        })}
      </List>
      <Modal isOpenModal={showModal} onCloseModal={handleCloseModal}>
        <BoardForm
          onCloseModal={handleCloseModal}
          title="Edit bord"
          type="Edit"
          boardOperation={updateBoard}
          id={boardId}
        />
      </Modal>
    </Box>
  );
};
