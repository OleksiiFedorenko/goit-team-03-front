import { useState } from 'react';
import { addTask } from 'store/boards/operations';
import ColumnHeader from './ColumnHeader';
import TaskList from './TaskList';
import Modal from 'components/Modal/Modal';
import AddCardForm from 'components/AddCardForm';
import { Icon } from 'components/Icons';

import { Stack, Button, Box } from '@mui/material';
import { card, button, icon } from 'styles';
import Scrollbar from 'components/Scroll/Scroll';

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
      <Scrollbar>
        <TaskList cards={column.tasks} />
      </Scrollbar>
      <Button
        variant="contained"
        sx={button.addCard}
        onClick={openModalHandler}
      >
        <Box sx={button.addAnotherCard}>
          <Icon id={'plus'} sx={icon.svgAddCard} />
        </Box>
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
