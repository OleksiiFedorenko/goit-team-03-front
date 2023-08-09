import { createSlice } from '@reduxjs/toolkit';
import {
  getAllBoards,
  getBoardById,
  addBoard,
  updateBoard,
  deleteBoard,
  addColumn
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
      board: {
        _id: '',
        title: '',
        icon: '',
        background: '',
        owner: '',
        columnOrder: [],
      },
      columns: [],
    },
    isLoading: false,
    error: null,
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
        state.board = action.payload;
      })
      .addCase(getBoardById.rejected, handleRejected)

      .addCase(addBoard.pending, handlePending)
      .addCase(addBoard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.boards.push(action.payload);
      })
      .addCase(addBoard.rejected, handleRejected)

      .addCase(updateBoard.pending, handlePending)
      .addCase(updateBoard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.board.board = action.payload;
        const index = state.boards.findIndex(board => board._id === action.payload._id);
        state.boards.splice(index, 1, action.payload);
      })
      .addCase(updateBoard.rejected, handleRejected)

      .addCase(deleteBoard.pending, handlePending)
      .addCase(deleteBoard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.boards = state.boards.filter(
          board => board._id !== action.payload._id
        );
        state.board = {};
      })
      .addCase(deleteBoard.rejected, handleRejected)

      .addCase(addColumn.pending, handlePending)
      .addCase(addColumn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.board.columns.push(action.payload)
      })
      .addCase(addColumn.rejected, handleRejected)  
      
  },
});

export const boardReducer = boardSlice.reducer;
