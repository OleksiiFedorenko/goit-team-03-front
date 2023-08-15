import { useSelector } from 'react-redux';
// import Column from 'components/Column/Column';
import AddColumnButton from 'components/AddColumn/AddColumnButton';
import {
  selectBoard,
  selectColumns,
  selectError,
} from 'store/boards/selectors';

import { Box, Typography } from '@mui/material';
import { container, text } from 'styles';
import { FilterBtn } from 'components/Filter';

import bgImg from 'images/backgrounds.json';

import { DragDropContext } from 'react-beautiful-dnd';
import { BoardInnerList, StrictModeDroppable } from 'components/DragAndDrop';
import { useDispatch } from 'react-redux';
import { handleDragEnd } from 'helpers';
import { selectPrioFilter } from 'store/filters/selectors';
import { toast } from 'react-toastify';

const BoardPage = () => {
  const dispatch = useDispatch();
  const board = useSelector(selectBoard);
  const columns = useSelector(selectColumns);
  const error = useSelector(selectError);

  if (error) {
    toast.error(error);
  }

  // console.log('BOARD: ', board);
  // console.log('COLUMNS: ', columns);

  const filter = useSelector(selectPrioFilter);

  const onDragEnd = result => {
    if (filter !== 'all') {
      toast.error(
        'Please, skip priority filters to drag elements to another position.'
      );
      return;
    }

    handleDragEnd({ result, board, columns, dispatch });
  };

  // if (board._id === '' || columns[0]._id === '') {
  //   return <div>Loading...</div>;
  // } // ----- triggers bug on empty board

  const bgURL =
    board.background === 0 ? '' : bgImg.find(bg => bg.id === board.background);
  const bgImage = {
    background: {
      zeroUp: `url("${bgURL?.retina_m}") no-repeat 50% 50%`,
      tablet: `url("${bgURL?.retina_t}") no-repeat 50% 50%`,
      desktop: `url("${bgURL?.retina_d}") no-repeat 50% 50%`,
    },
    backgroundSize: 'cover',
  };

  return (
    <>
      <Box sx={{ ...container.board, ...bgImage }}>
        <Box sx={container.boardInner}>
          <Typography component="h2" variant="h3" sx={text.boardTitle}>
            {board.title}
          </Typography>
          <FilterBtn />

          <Box sx={container.columns}>
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

                        // console.log('COLUMN: ', column);

                        // todo ///////////////////
                        // if (!column) return null;
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
    </>
  );
};

export default BoardPage;
