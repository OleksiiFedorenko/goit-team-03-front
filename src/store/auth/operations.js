import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { updateToken } from './authSlice';
import {store} from '../index';

axios.defaults.baseURL = 'http://localhost:3001/api';

const token = {

  set(accessToken) {
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const refresh = async () => {
  try {
    const state = store.getState();
    const refreshToken = state.auth.token.refreshToken;
    const { data } = await axios.post('/auth/refresh', { refreshToken });
    token.set(data.tokens.accessToken);
    store.dispatch(updateToken(data.tokens));
  } catch (error) {
    console.log(error);
  }
};

axios.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      await refresh();
      return axios(originalRequest);
    }
    throw error;
  }
);


export const getRegistration = createAsyncThunk(
  'auth/register',
  async ({ name, email, password }, { rejectWithValue }) => {
    try {
      await axios.post('/auth/register', {
        name,
        email,
        password,
      });
      const { data } = await axios.post('/auth/login', { email, password });

      token.set(data.tokens.accessToken);
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
      const { data } = await axios.post('/auth/login', { email, password });
      token.set(data.tokens.accessToken);
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
      await axios.post('/auth/logout');
      token.unset();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const persistedToken = state.auth.token.accessToken;
    if (!persistedToken) {
      return rejectWithValue('No valid token');
    }
    token.set(persistedToken);
    try {
      const { data } = await axios.get('/auth/current');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateTheme = createAsyncThunk(
  'auth/updateTheme',
  async ({ theme }, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch('/auth', { theme });
      return data;
    } catch (error) {
      toast.error('Something went wrong! Please, try again.', {
        position: toast.POSITION.TOP_RIGHT,
      });
      return rejectWithValue(error.message);
    }
  }
);

export const updateProfile = createAsyncThunk(
  'auth/updateProfile',
  async ({ credentials, id }, { rejectWithValue }) => {
    try {
      const { data } = await axios.put(`auth`, credentials);
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
