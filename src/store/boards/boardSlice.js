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
        state.boards = [...state.boards, action.payload];
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
        const index = state.boards.findIndex(board => board._id === action.payload._id);
        state.boards.splice(index, 1);
        state.board = {...state.board, _id: '', title: ''};
        state.columns = [];
       
      })
      .addCase(deleteBoard.rejected, handleRejected)

      .addCase(addColumn.pending, handlePending)
      .addCase(addColumn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.columns = [...state.columns, action.payload];
        // state.board.columnOrder = [...state.board.columnOrder, action.payload];
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
        const index = state.columns.findIndex(column => column._id === action.payload._id);
        state.columns.splice(index, 1);
      })
      .addCase(deleteColumn.rejected, handleRejected)

      .addCase(addTask.pending, handlePending)
      .addCase(addTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.columns.forEach(column => {
          if (column._id === action.payload.parentColumn) {
            column.tasks = [...column.tasks, action.payload];
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
        let columnId;
        let spliceIndex;
        state.columns.forEach(column => {
          column.tasks.forEach((task, index) => {
            if (task._id === action.payload._id) {
              columnId = task.parentColumn;
              spliceIndex = index;
            }
          });
        });
        state.columns.forEach(column => {
          if (column._id === columnId) {
            column.tasks.splice(spliceIndex, 1);
          }
        });
      })

      .addCase(deleteTask.rejected, handleRejected);
  },
  reducers: {
    updateColumnOrder(state, action) {
      state.board.columnOrder = action.payload;
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
