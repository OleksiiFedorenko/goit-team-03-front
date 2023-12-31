import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import AddColumnButton from 'components/AddColumn/AddColumnButton';
import {
  selectBoard,
  selectColumns,
  selectError,
  selectIsLoading,
} from 'store/boards/selectors';
import { getBoardById } from 'store/boards/operations';

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
import { Loader } from 'components/Loader';

const BoardPage = () => {
  const dispatch = useDispatch();
  const { boardId } = useParams();
  const board = useSelector(selectBoard);
  const columns = useSelector(selectColumns);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    if (boardId) dispatch(getBoardById(boardId));
  }, [dispatch, boardId]);

  if (error) {
    toast.error(error);
  }

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
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Box sx={{ ...container.board, ...bgImage }}>
            <Box sx={container.boardInner}>
              <Typography
                component="h2"
                variant="h3"
                sx={{
                  ...text.boardTitle,
                  display: 'inline-block',
                  borderRadius: board.background !== 0 ? '8px' : 0,
                  paddingRight: board.background !== 0 ? '4px' : 0,
                  paddingLeft: board.background !== 0 ? '4px' : 0,
                  backgroundColor: 'background.default',
                }}
              >
                {board.title}
              </Typography>
              <FilterBtn />

              <Box
                sx={{
                  ...container.columns,
                  gap: board.columnOrder.length === 0 ? 0 : '34px',
                }}
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
                          sx={container.columnsInner}
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                        >
                          {board.columnOrder.map((columnId, index) => {
                            const column = columns.find(
                              item => item._id === columnId
                            );

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
      )}
    </>
  );
};

export default BoardPage;
