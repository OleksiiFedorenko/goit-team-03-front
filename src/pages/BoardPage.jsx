import { useSelector } from 'react-redux';
// import Column from 'components/Column/Column';
import AddColumnButton from 'components/AddColumn/AddColumnButton';
import { selectBoard, selectColumns } from 'store/boards/selectors';

import { Box, Typography } from '@mui/material';
import { container, text } from 'styles';
import { FilterBtn } from 'components/Filter';

import { DragDropContext } from 'react-beautiful-dnd';
import { BoardInnerList, StrictModeDroppable } from 'components/DragAndDrop';

const BoardPage = () => {
  const board = useSelector(selectBoard);
  const columns = useSelector(selectColumns);
  // console.log('BOARD: ', board);
  // console.log('COLUMNS: ', columns);

  const onDragEnd = result => {
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
      // const newState = {
      //   ...state,
      //   board: {
      //     ...state.board,
      //     columnOrder: newColumnOrder,
      //   },
      // };

      // setState(newState);
      // -------------------------------
      return;
    }

    // Dragging tasks:

    // Start column:
    const start = columns.find(column => column._id === source.droppableId);

    // Finish column:
    const finish = columns.find(
      column => column._id === destination.droppableId
    );

    if (start === finish) {
      const newTaskOrder = Array.from(start.taskOrder);
      newTaskOrder.splice(source.index, 1);
      newTaskOrder.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskOrder: newTaskOrder,
      };

      const columnIndex = columns.findIndex(
        column => column._id === newColumn._id
      );
      const newColumns = Array.from(columns);
      newColumns.splice(columnIndex, 1, newColumn);
      // console.log('OLD COLUMNS: ', columns);
      // console.log('NEW COLUMN: ', newColumn);
      // console.log('COLUMN INDEX TO UPDATE: ', columnIndex);
      // console.log('NEW COLUMNS: ', newColumns);
      //
      // TODO: ---------- on Redux :::
      // const newState = {
      //   ...state,
      //   columns: newColumns,
      // };

      // setState(newState);
      // -----------------------------
      return;
    }

    // Moving from one column to another:

    const draggableTask = start.tasks.find(task => task._id === draggableId);
    // console.log('DRAGGABLE TASK: ', draggableTask);
    draggableTask.parentColumn = finish._id;
    // console.log('DRAGGABLE TASK UPD: ', draggableTask);

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
    finishTasksArr.push(draggableTask);

    const newFinish = {
      ...finish,
      taskOrder: finishTaskOrder,
      tasks: finishTasksArr,
    };

    // console.log('NEW FINISH COLUMN: ', newFinish);

    const newColumns = Array.from(columns);
    const startColumnIndex = newColumns.findIndex(
      ({ _id }) => _id === start._id
    );
    const finishColumnIndex = newColumns.findIndex(
      ({ _id }) => _id === finish._id
    );
    newColumns.splice(startColumnIndex, 1, newStart);
    newColumns.splice(finishColumnIndex, 1, newFinish);
    // console.log('NEW COLUMNS: ', newColumns);

    // TODO: ---------- on Redux :::
    // const newState = {
    //   ...state,
    //   columns: newColumns,
    // };
    // setState(newState);
    // ------------------------------
    return;
  };

  if (board._id === '' || columns[0]._id === '') {
    return <div>Loading...</div>;
  }

  return (
    <Box sx={container.board}>
      <Box sx={container.boardInner}>
        <Box sx={container.boardTopBar}>
          <Typography component="h2" variant="h3" sx={text.boardTitle}>
            {board.title}
          </Typography>

          <FilterBtn />
        </Box>

        <Box
          // style={{ outline: '2px dashed tomato' }}
          sx={container.columns}
        >
          <Box>
            {/* ---------------------------------------------------------------- */}
            <DragDropContext
              onDragStart={() => {}}
              onDragUpdate={() => {}}
              onDragEnd={onDragEnd}
            >
              <StrictModeDroppable
                droppableId={'all-columns'}
                direction="horizontal"
                type="column"
              >
                {provided => (
                  <Box
                    // style={{ outline: '1px dashed teal', display: 'flex' }}
                    sx={container.columnsInner}
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {board.columnOrder.map((columnId, index) => {
                      const column = columns.find(
                        item => item._id === columnId
                      );

                      return (
                        <BoardInnerList
                          key={column._id}
                          column={column}
                          tasksArr={column.tasks}
                          index={index}
                        />
                      );
                    })}

                    {provided.placeholder}
                  </Box>
                )}
              </StrictModeDroppable>
            </DragDropContext>
            {/* ---------------------------------------------------------------- */}
          </Box>
          <AddColumnButton />
        </Box>
      </Box>
    </Box>
  );
};

export default BoardPage;
