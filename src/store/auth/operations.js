import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'http://localhost:3001/api';

const token = {
  set(accessToken) {
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

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
      const { data } = await axios.post('/auth/login', { email, password });
      console.log(data);
      token.set(data.tokens.accessToken);
      // const { refreshToken } = data.tokens;
      // localStorage.setItem('refreshToken', refreshToken);
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
      const { data } = await axios.put(`auth/${id}`, credentials);
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
