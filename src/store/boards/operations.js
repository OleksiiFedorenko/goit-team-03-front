import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { instance } from '../auth/operations';

export const needHelp = createAsyncThunk(
  'help',
  async ({ email, text }, thunkAPI) => {
    try {
      const { data } = await instance.post('/auth/help', {
        email,
        message: text,
      });
      toast.info(
        'Thank you for your request, we will answer you as soon as possible.'
      );
      return data;
    } catch (e) {
      toast.error('Something going wrong!');
      // console.log(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getAllBoards = createAsyncThunk(
  'boards/getAllBoards',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.get('/boards');

      // console.log(data);


      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getBoardById = createAsyncThunk(
  'boards/getBoardById',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(`boards/${id}`);

      // console.log(data);


      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addBoard = createAsyncThunk(
  'boards/addBoard',
  async ({ title, icon, background }, { rejectWithValue }) => {
    try {
      const { data } = await instance.post('boards', {
        title,
        icon,
        background,
      });
  

      // console.log(data);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateBoard = createAsyncThunk(
  'board/updateBoard',
  async ({ id, title, icon, background }, { rejectWithValue }) => {
    try {
      const { data } = await instance.put(`/boards/${id}`, {
        title,
        icon,
        background,
      });

      // console.log(data);


      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteBoard = createAsyncThunk(
  'boards/deleteBoard',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await instance.delete(`/boards/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addColumn = createAsyncThunk(
  'boards/addColumn',
  async ({ title, parentBoard }, { rejectWithValue }) => {
    try {
      const { data } = await instance.post('/columns', { title, parentBoard });

      // console.log(data);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getColumnById = createAsyncThunk(
  'boards/getColumnById',
  async (columnId, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(`/columns/${columnId}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateColumn = createAsyncThunk(
  'boards/updateColumn',
  async ({ columnId, title }, { rejectWithValue }) => {
    try {
      const { data } = await instance.put(`/columns/${columnId}`, { title });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteColumn = createAsyncThunk(
  'boards/deleteColumn',
  async (columnId, { rejectWithValue }) => {
    try {
      const { data } = await instance.delete(`/columns/${columnId}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addTask = createAsyncThunk(
  'boards/addTask',
  async (values, { rejectWithValue }) => {
    try {
      // console.log(values);
      const { data } = await instance.post('/tasks', values);

      // console.log(data);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getTaskById = createAsyncThunk(
  'boards/getTaskById',
  async (taskId, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(`/tasks/${taskId}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateTask = createAsyncThunk(
  'boards/updateTask',
  async (
    { taskId, title, description, priority, deadline },
    { rejectWithValue }
  ) => {
    try {
      // console.log({ taskId, title, description, priority, deadline });
      const { data } = await instance.put(`/tasks/${taskId}`, {
        title,
        description,
        priority,
        deadline,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  'boards/deleteTask',
  async (_id, { rejectWithValue }) => {
    try {
      const { data } = await instance.delete(`/tasks/${_id}`);

      // console.log(data);


      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const changeColumn = createAsyncThunk(
  'boards/changeColumn',
  async ({ taskId, columnId, parentColumn }, { rejectWithValue }) => {
    try {
      const { data } = await instance.patch(
        `/tasks/${taskId}/owner/${columnId}`,
        {
          parentColumn,
        }
      );

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateColumnOrderAsync = createAsyncThunk(
  'boards/updateColumnOrderAsync',
  async ({ boardId, newColumnOrder }, { rejectWithValue }) => {
    try {
      const { data } = await instance.put(`/boards/${boardId}`, {
        columnOrder: newColumnOrder,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateSingleTaskOrderAsync = createAsyncThunk(
  'boards/updateSingleTaskOrderAsync',
  async ({ taskId, columnId, newTaskOrder }, { rejectWithValue }) => {
    try {
      const { data } = await instance.patch(`/tasks/${taskId}`, {
        parentColumn: columnId,
        orderForCurrentColumn: newTaskOrder,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateComplexDNDAsync = createAsyncThunk(
  'boards/updateComplexDNDAsync',
  async (
    { taskId, finishId, startTaskOrder, finishTaskOrder },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await instance.patch(`/tasks/${taskId}`, {
        parentColumn: finishId,
        orderForCurrentColumn: startTaskOrder,
        orderForNewColumn: finishTaskOrder,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
