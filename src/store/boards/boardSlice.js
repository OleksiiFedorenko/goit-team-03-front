import { createSlice } from '@reduxjs/toolkit';
import {
  getAllBoards,
  getBoardById,
  addBoard,
  updateBoard,
  deleteBoard,
  addColumn,
  needHelp,
  updateColumn,
  deleteColumn,
  addTask,
  updateTask,
  deleteTask,
  updateColumnOrderAsync,
  updateSingleTaskOrderAsync,
  updateComplexDNDAsync,
} from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const boardSlice = createSlice({
  name: 'boards',
  initialState: {
    boards: [],
    board: {
      _id: '',
      title: '',
      icon: '',
      background: '',
      owner: '',
      columnOrder: [],
    },
    columns: [
      {
        _id: '',
        parentBoard: '',
        taskOrder: [],
        tasks: [
          {
            _id: '',
            description: '',
            priority: '',
            deadline: '',
            parentColumn: '',
            title: '',
          },
        ],
        title: '',
      },
    ],
    bgrURL: [],
    isLoading: false,
    error: null,
    email: '',
    text: '',
  },
  extraReducers: builder => {
    builder
      .addCase(getAllBoards.pending, handlePending)
      .addCase(getAllBoards.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.boards = action.payload;
      })
      .addCase(getAllBoards.rejected, handleRejected)

      .addCase(getBoardById.pending, handlePending)
      .addCase(getBoardById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.board = action.payload.board;
        state.columns = action.payload.columns;
        state.bgrURL = action.payload.bgrURL; // ?
      })
      .addCase(getBoardById.rejected, handleRejected)

      .addCase(addBoard.pending, handlePending)
      .addCase(addBoard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.boards = [...state.boards, action.payload];
        // todo ---------------------------------------------------------------------------------------------
        // no sense + triggers bugs
        // state.board = action.payload;
      })
      .addCase(addBoard.rejected, handleRejected)

      .addCase(updateBoard.pending, handlePending)
      .addCase(updateBoard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.board = action.payload;
        const index = state.boards.findIndex(
          board => board._id === action.payload._id
        );
        state.boards.splice(index, 1, action.payload);
      })
      .addCase(updateBoard.rejected, handleRejected)

      .addCase(deleteBoard.pending, handlePending)
      .addCase(deleteBoard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.boards.findIndex(
          board => board._id === action.payload._id
        );
        state.boards.splice(index, 1);
        // state.board = { ...state.board, _id: '', title: '' };
        state.board = {
          _id: '',
          title: '',
          icon: '',
          background: '',
          owner: '',
          columnOrder: [],
        };
        state.columns = [];
      })
      .addCase(deleteBoard.rejected, handleRejected)

      .addCase(addColumn.pending, handlePending)
      .addCase(addColumn.fulfilled, (state, action) => {
        console.log('addColumn PAYLOAD: ', action.payload);
        state.isLoading = false;
        state.error = null;

        const newColumn = action.payload;

        if (!newColumn.tasks) {
          newColumn.tasks = [];
        }

        state.columns.push(newColumn);

        // In addition update board & boards fields:
        state.board.columnOrder.push(action.payload._id);
        const boardIndex = state.boards.findIndex(
          ({ _id }) => _id === action.payload.parentBoard
        );
        state.boards[boardIndex].columnOrder.push(action.payload._id);
      })
      .addCase(addColumn.rejected, handleRejected)
      .addCase(needHelp.pending, state => {
        state.error = null;
      })
      .addCase(needHelp.fulfilled, (state, action) => {
        state.email = action.payload.email;
        state.text = action.payload.text;
      })
      .addCase(needHelp.rejected, (state, action) => {
        state.error = action.payload;
      })

      .addCase(updateColumn.pending, handlePending)
      .addCase(updateColumn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        const index = state.columns.findIndex(
          column => column._id === action.payload._id
        );

        // todo: -----------------------------------------------------------------
        // Temporary... because if response without tasks array
        const newColumn = {
          ...state.columns[index],
          title: action.payload.title,
        };
        // state.columns.splice(index, 1, action.payload);
        state.columns.splice(index, 1, newColumn);
      })
      .addCase(updateColumn.rejected, handleRejected)

      .addCase(deleteColumn.pending, handlePending)
      .addCase(deleteColumn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        console.log('deleteColumn PAYLOAD: ', action.payload);

        const { _id: columnId, parentBoard } = action.payload;
        const columnIndex = state.columns.findIndex(
          ({ _id }) => _id === columnId
        );
        state.columns.splice(columnIndex, 1);

        // In addition remove columnId from 'columnOrder' fields inside state.board and state.boards as well
        const orderIndex1 = state.board.columnOrder.indexOf(columnId);
        state.board.columnOrder.splice(orderIndex1, 1);

        const boardIndex = state.boards.findIndex(
          ({ _id }) => _id === parentBoard
        );
        const orderIndex2 =
          state.boards[boardIndex].columnOrder.indexOf(columnId);
        state.boards[boardIndex].columnOrder.splice(orderIndex2);
      })
      .addCase(deleteColumn.rejected, handleRejected)

      .addCase(addTask.pending, handlePending)
      .addCase(addTask.fulfilled, (state, action) => {
        console.log(action.payload);
        state.isLoading = false;
        state.error = null;

        state.columns.forEach(column => {
          if (column._id === action.payload.parentColumn) {
            column.tasks.push(action.payload);
            // In addition update taskOrder:
            column.taskOrder.push(action.payload._id);
          }
        });
      })
      .addCase(addTask.rejected, handleRejected)

      .addCase(updateTask.pending, handlePending)
      .addCase(updateTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.columns.findIndex(
          column => column._id === action.payload.parentColumn
        );
        const indexTask = state.columns[index].tasks.findIndex(
          task => task._id === action.payload._id
        );
        const updatedTask = {
          ...state.columns[index].tasks[indexTask],
          ...action.payload,
        };
        state.columns[index].tasks.splice(indexTask, 1, updatedTask);
      })
      .addCase(updateTask.rejected, handleRejected)

      .addCase(deleteTask.pending, handlePending)
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        console.log('deleteTask PAYLOAD: ', action.payload);

        const { _id: taskId, parentColumn } = action.payload;

        state.columns.forEach(column => {
          if (column._id !== parentColumn) return;

          const taskIndex = column.tasks.findIndex(({ _id }) => _id === taskId);
          column.tasks.splice(taskIndex, 1);

          const orderIndex = column.taskOrder.indexOf(taskId);
          column.taskOrder.splice(orderIndex, 1);
        });
      })
      .addCase(deleteTask.rejected, handleRejected)

      .addCase(updateColumnOrderAsync.pending, handlePending)
      .addCase(updateColumnOrderAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        console.log('updateColumnOrderAsync PAYLOAD: ', action.payload);
      })
      .addCase(updateColumnOrderAsync.rejected, (state, action) => {
        state.isLoading = false;
        console.log('updateColumnOrderAsync ERROR: \n', action.payload);
        state.error =
          'Something went wrong when you tried to drag and drop elements on your board... Please reload page to see actual information and try again later.';
      })

      .addCase(updateSingleTaskOrderAsync.pending, handlePending)
      .addCase(updateSingleTaskOrderAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        console.log('updateSingleTaskOrderAsync PAYLOAD: ', action.payload);
      })
      .addCase(updateSingleTaskOrderAsync.rejected, (state, action) => {
        state.isLoading = false;
        console.log('updateSingleTaskOrderAsync ERROR: \n', action.payload);
        state.error =
          'Something went wrong when you tried to drag and drop elements on your board... Please reload page to see actual information and try again later.';
      })

      .addCase(updateComplexDNDAsync.pending, handlePending)
      .addCase(updateComplexDNDAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        console.log('updateComplexDNDAsync PAYLOAD: ', action.payload);
      })
      .addCase(updateComplexDNDAsync.rejected, (state, action) => {
        state.isLoading = false;
        console.log('updateComplexDNDAsync ERROR: \n', action.payload);
        state.error =
          'Something went wrong when you tried to drag and drop elements on your board... Please reload page to see actual information and try again later.';
      });
  },
  reducers: {
    updateColumnOrder(state, action) {
      const { newColumnOrder, boardId } = action.payload;
      state.board.columnOrder = newColumnOrder;

      const boardIndex = state.boards.findIndex(({ _id }) => _id === boardId);
      // console.log('boardIndex: ', boardIndex);
      state.boards[boardIndex].columnOrder = newColumnOrder;
    },
    updateSingleTaskOrder(state, action) {
      const { columnId, newTaskOrder } = action.payload;

      const columnToUpdate = state.columns.find(item => item._id === columnId);
      const indexToUpdate = state.columns.findIndex(
        item => item._id === columnId
      );
      const newColumn = {
        ...columnToUpdate,
        taskOrder: newTaskOrder,
      };

      state.columns.splice(indexToUpdate, 1, newColumn);
    },
    updateComplexDND(state, action) {
      const { updatedStartColumn, updatedFinishColumn } = action.payload;

      const startIndex = state.columns.findIndex(
        item => item._id === updatedStartColumn._id
      );
      const finishIndex = state.columns.findIndex(
        item => item._id === updatedFinishColumn._id
      );

      state.columns.splice(startIndex, 1, updatedStartColumn);
      state.columns.splice(finishIndex, 1, updatedFinishColumn);
    },
  },
});

export const boardReducer = boardSlice.reducer;

// TODO: --------------------------------------
export const { updateColumnOrder, updateSingleTaskOrder, updateComplexDND } =
  boardSlice.actions;
