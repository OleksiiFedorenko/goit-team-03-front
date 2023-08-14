import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTask, deleteTask } from 'store/boards/operations';
import priorityColorSwitcher from 'helpers/priorityColorSwitcher';
import IconBtn from './IconBtn';
import Modal from 'components/Modal/Modal';
import AddCardForm from 'components/AddCardForm';
import { Card, Typography, Stack, Box } from '@mui/material';
import { card } from 'styles';
import DeleteConfirmModal from 'components/DeleteConfirmModal/DeleteConfirmModal';

import { Draggable } from 'react-beautiful-dnd';
import Alerticon from './AlertIcon';
import { formatDate } from 'helpers/formatDate';

const Task = ({ name, description, priority, deadline, taskId, index }) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [ShowDeleteConfirmModal, setShowDeleteConfirmModal] = useState(false);

  const openModalHandler = () => {
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
    setShowDeleteConfirmModal(false);
  };

  const handleDeleteTask = () => {
    // if (window.confirm(`Do you really want to delete task ${name}?`)) {
    dispatch(deleteTask(taskId));
    setShowDeleteConfirmModal(false);
    // }
  };

  const openDeleteConfirmModal = () => {
    setShowDeleteConfirmModal(true);
  };

  const priorityColor = priorityColorSwitcher(priority);
  const priorityStyles = {
    textTransform: 'capitalize',
    '&::before': {
      ...card.priorityCircle,
      bgcolor: priorityColor,
    },
  };
  const handleIconClick = () => {};
  const isDeadline = () => {
    return deadline === formatDate(new Date());
  };

  return (
    <Draggable draggableId={taskId} index={index}>
      {(provided, snapshot) => {
        const isDragging = snapshot.isDragging;

        return (
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <Box
              sx={{
                transform: isDragging ? 'rotate(5deg)' : 'rotate(0deg)',
              }}
            >
              <Card
                sx={{
                  ...card.task,
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '4px',
                    height: '100%',
                    background: priorityColor,
                  },
                }}
              >
                <Box>
                  <Box sx={card.taskMainBox}>
                    <Typography variant="h5" component="h3" mb={1}>
                      {name}
                    </Typography>
                    <Typography variant="body2" sx={card.taskDescription}>
                      {description}
                    </Typography>
                  </Box>

                  {/* components below devider       */}

                  <Box>
                    <Stack direction="row">
                      {/* priority container      */}
                      <Stack
                        justifyContent="flex-end"
                        alignItems="flex-start"
                        spacing={0}
                        sx={{ marginRight: '14px' }}
                      >
                        <Box>
                          <Typography variant="caption" color="text.sideSecond">
                            Priority
                          </Typography>
                        </Box>
                        <Box>
                          <Typography variant="h6" sx={priorityStyles}>
                            {priority}
                          </Typography>
                        </Box>
                      </Stack>

                      {/* deadline container     */}
                      <Stack
                        flexGrow={1}
                        justifyContent="flex-end"
                        alignItems="flex-start"
                        spacing={0}
                      >
                        <Box>
                          <Typography variant="caption" color="text.sideSecond">
                            Deadline
                          </Typography>
                        </Box>
                        <Box>
                          <Typography variant="h6" color="text.primary">
                            {deadline}
                          </Typography>
                        </Box>
                      </Stack>

                      {/* icons container     */}

                      <Stack
                        direction="row"
                        justifyContent="flex-end"
                        alignItems="flex-end"
                        spacing={1}
                      >
                        {isDeadline() && <Alerticon />}
                        <Box>
                          <IconBtn onClick={handleIconClick} iconId="move" />
                        </Box>

                        <Box>
                          <IconBtn onClick={openModalHandler} iconId="pencil" />
                        </Box>

                        <Box>
                          <IconBtn
                            onClick={openDeleteConfirmModal}
                            iconId="trash"
                          />
                        </Box>
                      </Stack>
                    </Stack>
                  </Box>
                </Box>
                <Modal isOpenModal={showModal} onCloseModal={closeModalHandler}>
                  <AddCardForm
                    onCloseModal={closeModalHandler}
                    taskId={taskId}
                    formTitle={'Edit card'}
                    buttonTitle={'Edit'}
                    taskOperation={updateTask}
                    initData={{ title: name, description, priority, deadline }}
                  />
                </Modal>
                <DeleteConfirmModal
                  isOpenModal={ShowDeleteConfirmModal}
                  onCloseModal={closeModalHandler}
                  onConfirm={handleDeleteTask}
                />
              </Card>
            </Box>
          </div>
        );
      }}
    </Draggable>
  );
};
export default Task;
