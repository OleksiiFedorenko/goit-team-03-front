import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { store } from '../index';
import { setRefreshToken, setAccessToken } from './authSlice';

export const instance = axios.create({
  baseURL: 'https://taskpro-m75b.onrender.com/api',
});

const setToken = token => {
  if (token) {
    return (instance.defaults.headers.common.Authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.common.Authorization = '';
};

instance.interceptors.response.use(
  response => response,
  async error => {
    if (error.response.status === 401) {
      const refreshToken = store.getState().auth.refreshToken;
      try {
        const { data } = await instance.post('/auth/refreshToken', {
          refreshToken,
        });
        setToken(data.accessToken);
        store.dispatch(setAccessToken(data.accessToken));
        store.dispatch(setRefreshToken(data.refreshToken));
        error.config.headers.Authorization = `Bearer ${data.accessToken}`;

        return instance(error.config);
      } catch (error) {
        return Promise.reject(error);
      }
    } else if (error.response.status === 500 || error.response.status === 400) {
      console.log('some problem 500 or 400');
    }

    return Promise.reject(error);
  }
);

export const getRegistration = createAsyncThunk(
  'auth/register',
  async ({ name, email, password }, { rejectWithValue }) => {
    try {
      await instance.post('/auth/register', {
        name,
        email,
        password,
      });
      const { data } = await instance.post('/auth/login', { email, password });
      setToken(data.accessToken);
      return data;
    } catch (error) {
      toast.error(
        'Something went wrong! Please check the correctness of the entered data'
      );
      return rejectWithValue(error.message);
    }
  }
);

export const getLogin = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const { data } = await instance.post('/auth/login', { email, password });
      setToken(data.accessToken);
      return data;
    } catch (error) {
      toast.error(
        'Something went wrong! Please check the correctness of the entered data'
      );
      return rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await instance.post('/auth/logout');
      setToken();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, { getState, rejectWithValue }) => {
    const store = getState();
    const persistedToken = store.auth.accessToken;
    if (!persistedToken) {
      return rejectWithValue('No valid token');
    }
    setToken(persistedToken);

    try {
      const { data } = await instance.get('/auth/current');

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateTheme = createAsyncThunk(
  'auth/updateTheme',
  async (theme, { rejectWithValue }) => {
    try {
      const { data } = await instance.patch('/auth', { theme });
      return data;
    } catch (error) {
      toast.error('Something went wrong! Please, try again.');
      return rejectWithValue(error.message);
    }
  }
);

export const updateProfile = createAsyncThunk(
  'auth/updateProfile',
  async (formData, { rejectWithValue }) => {
    try {
      const { data } = await instance.put(`/auth`, formData);
      console.log(data);
      return data;
    } catch (error) {
      toast.error(
        'Something went wrong! Please check the correctness of the entered data'
      );
      return rejectWithValue(error.message);
    }
  }
);
