import {
  updateColumnOrder,
  updateComplexDND,
  updateSingleTaskOrder,
} from 'store/boards/boardSlice';

export const handleDragEnd = ({ result, board, columns, dispatch }) => {
  const { destination, source, draggableId, type } = result;

  if (!destination) return;

  if (
    destination.droppableId === source.droppableId &&
    destination.index === source.index
  )
    return;

  // Dragging columns:
  if (type === 'column') {
    const newColumnOrder = Array.from(board.columnOrder);
    newColumnOrder.splice(source.index, 1);
    newColumnOrder.splice(destination.index, 0, draggableId);

    // TODO: ---------- on Redux :::
    dispatch(updateColumnOrder(newColumnOrder));
    return;
  }

  // Dragging tasks:

  // Start column:
  const start = columns.find(column => column._id === source.droppableId);

  // Finish column:
  const finish = columns.find(column => column._id === destination.droppableId);

  if (start === finish) {
    const newTaskOrder = Array.from(start.taskOrder);
    newTaskOrder.splice(source.index, 1);
    newTaskOrder.splice(destination.index, 0, draggableId);

    // TODO: ---------- on Redux :::
    dispatch(updateSingleTaskOrder({ columnId: start._id, newTaskOrder }));
    return;
  }

  // Moving from one column to another:

  const draggableTask = start.tasks.find(task => task._id === draggableId);
  const newDraggableTask = {
    ...draggableTask,
    parentColumn: finish._id,
  };

  const startTaskOrder = Array.from(start.taskOrder);
  startTaskOrder.splice(source.index, 1);

  const startTasksArr = Array.from(start.tasks);
  const draggableTaskIndex = startTasksArr.findIndex(
    item => item._id === draggableId
  );
  startTasksArr.splice(draggableTaskIndex, 1);

  const newStart = {
    ...start,
    taskOrder: startTaskOrder,
    tasks: startTasksArr,
  };
  // console.log('NEW START COLUMN: ', newStart);

  const finishTaskOrder = Array.from(finish.taskOrder);
  finishTaskOrder.splice(destination.index, 0, draggableId);

  const finishTasksArr = Array.from(finish.tasks);
  finishTasksArr.push(newDraggableTask);

  const newFinish = {
    ...finish,
    taskOrder: finishTaskOrder,
    tasks: finishTasksArr,
  };
  // console.log('NEW FINISH COLUMN: ', newFinish);

  // TODO: ---------- on Redux :::
  dispatch(
    updateComplexDND({
      // updatedTask: newDraggableTask,
      updatedStartColumn: newStart,
      updatedFinishColumn: newFinish,
    })
  );
  return;
};
