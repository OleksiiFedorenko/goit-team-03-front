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
        state.bgrURL = action.payload.bgrURL;
      })
      .addCase(getBoardById.rejected, handleRejected)

      .addCase(addBoard.pending, handlePending)
      .addCase(addBoard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.boards.push(action.payload);
        state.board = action.payload;
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
        const id = action.payload.message.split('');
        const index = state.boards.findIndex(board => board._id === id[1]);
        state.boards.splice(index, 1);
        state.board = {};
      })
      .addCase(deleteBoard.rejected, handleRejected)

      .addCase(addColumn.pending, handlePending)
      .addCase(addColumn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.columns.push(action.payload);
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
        state.columns.splice(index, 1, action.payload);
      })
      .addCase(updateColumn.rejected, handleRejected)

      .addCase(deleteColumn.pending, handlePending)
      .addCase(deleteColumn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const id = action.payload.message.split('');
        const index = state.columns.findIndex(
          column => column._id === id[1]
        );
        state.columns.splice(index, 1);
      })
      .addCase(deleteColumn.rejected, handleRejected)

      .addCase(addTask.pending, handlePending)
      .addCase(addTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.columns.findIndex(
          column => column._id === action.payload.parentColumn
        );
        state.columns[index].tasks.push(action.payload);
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
        const index = state.columns.findIndex(
          column => column._id === action.payload.parentColumn
        );
        const indexTask = state.columns[index].tasks.findIndex(
          task => task._id === action.payload._id
        );
        state.columns[index].tasks.splice(indexTask, 1);
      })
      .addCase(deleteTask.rejected, handleRejected);
  },
});

export const boardReducer = boardSlice.reducer;
