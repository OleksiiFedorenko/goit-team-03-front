import { Box, Button, Stack, SvgIcon } from '@mui/material';
import ColumnHeader from 'components/Column/ColumnHeader';
import { Draggable } from 'react-beautiful-dnd';
import { container, button, card } from 'styles';
import { StrictModeDroppable } from './StrictModeDroppable';
import TaskList from 'components/Column/TaskList';
import sprite from 'components/Icons/sprite.svg';
import Modal from 'components/Modal/Modal';
import AddCardForm from 'components/AddCardForm/AddCardForm';
import { useState } from 'react';
import { addTask } from 'store/boards/operations';

export const DNDColumn = ({ column, tasks, index }) => {
  const [showModal, setShowModal] = useState(false);
  const openModalHandler = () => {
    setShowModal(true);
  };
  const closeModalHandler = () => {
    setShowModal(false);
  };

  return (
    <Draggable draggableId={column._id} index={index}>
      {(provided, snapshot) => (
        <div {...provided.draggableProps} ref={provided.innerRef}>
          <Stack
            sx={{
              ...card.column,
              bgcolor: snapshot.draggingOver
                ? 'background.alphaDND'
                : 'transparent',
            }}
          >
            <div {...provided.dragHandleProps}>
              <ColumnHeader title={column.title} columnId={column._id} />
            </div>
            <StrictModeDroppable droppableId={column._id} type="task">
              {(provided, snapshot) => (
                <>
                  {/* Adding Box for scrolls and for styling */}
                  <Box
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    // sx={container.dndContainerColumn}
                    sx={{
                      ...container.dndContainerColumn,
                      bgcolor: snapshot.isDraggingOver
                        ? 'background.alphaDND'
                        : 'transparent',
                    }}
                  >
                    {/* <div
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      isdraggingover={`${snapshot.isDraggingOver}`}
                      style={{ minHeight: 20, maxHeight: 470 }}
                    > */}
                    <TaskList
                      cards={tasks}
                      placeholder={provided.placeholder}
                    />
                    {/* </div> */}
                  </Box>
                  <Button
                    variant="contained"
                    sx={button.addCard}
                    // startIcon={<AddBoxIcon />}
                    onClick={openModalHandler}
                  >
                    <Box sx={button.addCardIconBox}>
                      <SvgIcon sx={button.addCardIcon}>
                        <svg stroke="currentColor">
                          <use href={sprite + '#icon-plus'} />
                        </svg>
                      </SvgIcon>
                    </Box>
                    Add another card
                  </Button>
                  <Modal
                    isOpenModal={showModal}
                    onCloseModal={closeModalHandler}
                  >
                    <AddCardForm
                      onCloseModal={closeModalHandler}
                      parentColumn={column._id}
                      formTitle={'Add card'}
                      buttonTitle={'Add'}
                      taskOperation={addTask}
                    />
                  </Modal>
                </>
              )}
            </StrictModeDroppable>
          </Stack>
        </div>
      )}
    </Draggable>
  );
};
