import { createSlice } from '@reduxjs/toolkit';
import {
  getAllBoards,
  getBoardById,
  addBoard,
  updateBoard,
  deleteBoard,
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
      columnOrder: []
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
        state.board = action.payload;
      })
      .addCase(updateBoard.rejected, handleRejected)

      .addCase(deleteBoard.pending, handlePending)
      .addCase(deleteBoard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.boards = state.boards.filter(
          board => board._id !== action.payload._id
        );
      })
      .addCase(deleteBoard.rejected, handleRejected);
  },
});

export const boardReducer = boardSlice.reducer;
