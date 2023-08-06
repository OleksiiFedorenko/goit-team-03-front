import { useState } from 'react';
import cards from '../../test-data/cards.json';
import Button from '@mui/material/Button';
import ColumnHeader from './ColumnHeader';
import TaskList from './TaskList';
import { Stack } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Modal from 'components/Modal/Modal';
import AddCardForm from 'components/AddCardForm';

const Column = () => {
  const [showModal, setShowModal] = useState(false);
  const openModalHandler = () => {
    setShowModal(true);
  };
  const closeModalHandler = () => {
    setShowModal(false);
  };
  return (
    <Stack
      sx={{
        width: '100%',
        maxWidth: 360,
        height: '100vh',
        marginLeft: '15px',
      }}
    >
      <ColumnHeader title={'Todo'}></ColumnHeader>
      <TaskList cards={cards}></TaskList>
      <Button
        variant="contained"
        startIcon={<AddBoxIcon />}
        onClick={openModalHandler}
      >
        Add another card
      </Button>
      <Modal isOpenModal={showModal} onCloseModal={closeModalHandler}>
        <AddCardForm />
      </Modal>
    </Stack>
  );
};

export default Column;
