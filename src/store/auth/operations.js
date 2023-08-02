import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const getRegistration = createAsyncThunk(
  'auth/register',
  async ({ name, email, password }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/signup', {
        name,
        email,
        password,
      });
      token.set(data.token);
      return data;
    } catch (error) {
      toast.error(
        'Something went wrong! Please check the correctness of the entered data',
        {
          position: toast.POSITION.TOP_RIGHT,
        }
      );
      return rejectWithValue(error.message);
    }
  }
);

export const getLogin = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/login', { email, password });
      token.set(data.token);
      return data;
    } catch (error) {
      toast.error(
        'Something went wrong! Please check the correctness of the entered data',
        {
          position: toast.POSITION.TOP_RIGHT,
        }
      );
      return rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.post('/users/logout');
      token.unset();
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const persistedToken = state.auth.token;
    if (!persistedToken) {
      return rejectWithValue('No valid token');
    }
    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
