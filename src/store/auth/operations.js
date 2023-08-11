import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

export const instance =axios.create({baseURL: 'http://localhost:3001/api',});


const setToken =(token) => {

  if(token) {
    return instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  };
    instance.defaults.headers.common.Authorization = '';
  };


// const refresh = async () => {
//       const refreshToken = localStorage.getItem('refreshToken');       

//   try {
//     const { data } = await instance.post('/auth/refreshToken', { refreshToken });
//     setToken(data.accessToken);
//     localStorage.setItem('refreshToken', data.refreshToken);
   
   
//   } catch (error) {
//     return Promise.reject(error);
//   }
// };

instance.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;
 
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      // await refresh(); 
      const refreshToken = localStorage.getItem('refreshToken');       

      try {
        const { data } = await instance.post('/auth/refreshToken', { refreshToken });
        setToken(data.accessToken);
        localStorage.setItem('refreshToken', data.refreshToken);
         
      return instance(originalRequest);
    } catch (error) {
      return Promise.reject(error);
    };
  };
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
      localStorage.setItem('refreshToken', data.refreshToken);
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
      const { data } = await instance.post('/auth/login', { email, password });
     
      setToken(data.accessToken);
      localStorage.setItem('refreshToken', data.refreshToken);
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
    const state = getState();
    const persistedToken = state.auth.token.accessToken;;
   
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
  async ({ theme }, { rejectWithValue }) => {
    try {
      const { data } = await instance.patch('/auth', { theme });
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
      const { data } = await instance.put(`auth`, credentials);
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
