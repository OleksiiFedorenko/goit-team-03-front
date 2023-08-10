import { useState } from 'react';
import { addTask } from 'store/boards/operations';
import ColumnHeader from './ColumnHeader';
import TaskList from './TaskList';
import Modal from 'components/Modal/Modal';
import AddCardForm from 'components/AddCardForm';

import { Stack, Button } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { card, button } from 'styles';

const Column = ({ column }) => {
  const [showModal, setShowModal] = useState(false);
  const openModalHandler = () => {
    setShowModal(true);
  };
  const closeModalHandler = () => {
    setShowModal(false);
  };

  return (
    <Stack sx={card.column}>
      <ColumnHeader title={column.title} columnId={column._id} />
      <TaskList cards={column.tasks} />
      <Button
        variant="contained"
        sx={button.addCard}
        startIcon={<AddBoxIcon />}
        onClick={openModalHandler}
      >
        Add another card
      </Button>
      <Modal isOpenModal={showModal} onCloseModal={closeModalHandler}>
        <AddCardForm
          onCloseModal={closeModalHandler}
          parentColumn={column._id}
          formTitle={'Add card'}
          buttonTitle={'Add'}
          taskOperation={addTask}
        />
      </Modal>
    </Stack>
  );
};

export default Column;
