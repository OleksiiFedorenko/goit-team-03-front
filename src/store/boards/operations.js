import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Notiflix from 'notiflix';

axios.defaults.baseURL = 'http://localhost:3001/api';

export const needHelp = createAsyncThunk(
  'help',
  async ({ email, text }, thunkAPI) => {
    try {
      await axios.post('/help', {
        email,
        message: text,
      });
      Notiflix.Notify.success('Your Email Send, we will contact you!');
    } catch (e) {
      Notiflix.Notify.failure('Something going wrong!');
      console.log(e.message)
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getAllBoards = createAsyncThunk(
  'boards/getAllBoards',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/boards');
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
      const { data } = await axios.get(`boatds/${id}`);
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
      const { data } = await axios.post('boards', { title, icon, background });
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateBoard = createAsyncThunk(
  'board/updateBoard',
  async ({_id, title, icon, background}, { rejectWithValue }) => {
    try {
      const { data } = await axios.put(`boards/${_id}`,{title, icon, background});
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
      const { data } = await axios.delete(`boards/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
