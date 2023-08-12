import { useSelector } from 'react-redux';
// import Column from 'components/Column/Column';
import AddColumnButton from 'components/AddColumn/AddColumnButton';
import { selectBoard, selectColumns } from 'store/boards/selectors';

import { Box, Typography } from '@mui/material';
import { container, text } from 'styles';
import { FilterBtn } from 'components/Filter';

import { DragDropContext } from 'react-beautiful-dnd';
import { BoardInnerList, StrictModeDroppable } from 'components/DragAndDrop';
import { useDispatch } from 'react-redux';
import { handleDragEnd } from 'helpers';
import { selectPrioFilter } from 'store/filters/selectors';

const BoardPage = () => {
  const board = useSelector(selectBoard);
  const columns = useSelector(selectColumns);
  // console.log('BOARD: ', board);
  // console.log('COLUMNS: ', columns);

  const filter = useSelector(selectPrioFilter);

  const dispatch = useDispatch();

  const onDragEnd = result => {
    if (filter !== 'all') {
      // TODO: Change to toast-notification...
      alert('Please, change skip to drag elements.');
      return;
    }

    handleDragEnd({ result, board, columns, dispatch });
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
