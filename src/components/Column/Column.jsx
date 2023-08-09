import { useState } from 'react';
import Button from '@mui/material/Button';
import ColumnHeader from './ColumnHeader';
import TaskList from './TaskList';
import { Stack } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Modal from 'components/Modal/Modal';
import AddCardForm from 'components/AddCardForm';

const Column = ({ column }) => {
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
      }}
    >
      <ColumnHeader title={column.title} columnId={column._id} />
      <TaskList cards={column.taskOrder} />
      <Button
        variant="contained"
        startIcon={<AddBoxIcon />}
        onClick={openModalHandler}
      >
        Add another card
      </Button>
      <Modal isOpenModal={showModal} onCloseModal={closeModalHandler}>
        <AddCardForm onCloseModal={closeModalHandler} parentColumn={column._id}/>
      </Modal>
    </Stack>
  );
};

export default Column;
