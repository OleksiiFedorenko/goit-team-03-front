import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTask, deleteTask } from 'store/boards/operations';
import priorityColorSwitcher from 'helpers/priorityColorSwitcher';
import IconBtn from './IconBtn';
import Modal from 'components/Modal/Modal';
import AddCardForm from 'components/AddCardForm';
import { Icon } from 'components/Icons';
import { Card, Typography, Stack, Box } from '@mui/material';
import { card } from 'styles';

import { Draggable } from 'react-beautiful-dnd';

const Task = ({ name, description, priority, deadline, taskId, index }) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const openModalHandler = () => {
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const handleDeleteTask = () => {
    if (window.confirm(`Do you really want to delete task ${name}?`)) {
      dispatch(deleteTask(taskId));
    }
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
      {(provided, snapshot) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isdragging={`${snapshot.isDragging}`} // lowercase & 'true' or 'false' string (bool triggers a warning)
        >
          <Card
            sx={{
              ...card.task,
              borderLeft: `4px solid ${priorityColor}`,
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
                    <Box>
                      <IconBtn onClick={handleIconClick} iconId="alert" />
                    </Box>
                    <Box>
                      <IconBtn onClick={handleIconClick} iconId="move" />
                    </Box>

                    <Box>
                      <IconBtn onClick={openModalHandler} iconId="pencil" />
                    </Box>

                    <Box>
                      <IconBtn onClick={handleDeleteTask} iconId="trash" />
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
          </Card>
        </div>
      )}
    </Draggable>
  );
};
export default Task;
