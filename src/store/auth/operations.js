// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { toast } from 'react-toastify';
// // import {store} from '../index';
// import {setRefreshToken} from './authSlice';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectAccessToken, selectRefreshToken } from 'store/auth/selectors';



// export const instance =axios.create({baseURL: 'http://localhost:3001/api',});


// const setToken =(token) => {

//   if(token) {
//     return instance.defaults.headers.common.Authorization = `Bearer ${token}`;
//   };
//     instance.defaults.headers.common.Authorization = '';
//   };

// instance.interceptors.response.use(
//   response => response,
//   async error => { 
//     if (error.response.status === 401 ) {
     
//       // const refreshToken = localStorage.getItem('refreshToken');
//       const refreshToken = useSelector(selectRefreshToken);       

//       try {
//         const dispatch = useDispatch();
//         const { data } = await instance.post('/auth/refreshToken', { refreshToken });
//         setToken(data.accessToken);
//         // localStorage.setItem('refreshToken', data.refreshToken);
//         dispatch(setRefreshToken(data.refreshToken));
         
//       return instance(error.config);
//       // return instance(originalRequest);
//     } catch (error) {
//       return Promise.reject(error);
//     };
//   };
//   return Promise.reject(error);
//   }
// );


// export const getRegistration = createAsyncThunk(
//   'auth/register',
//   async ({ name, email, password }, { rejectWithValue }) => {
//     try {
//       const dispatch = useDispatch();
//       await instance.post('/auth/register', {
//         name,
//         email,
//         password,
//       });
//       const { data } = await instance.post('/auth/login', { email, password });

//       setToken(data.accessToken);
//       // localStorage.setItem('refreshToken', data.refreshToken);
//       dispatch(setRefreshToken(data.refreshToken));
//       return data;
//     } catch (error) {
//       toast.error(
//         'Something went wrong! Please check the correctness of the entered data',
//         {
//           position: toast.POSITION.TOP_RIGHT,
//         }
//       );
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const getLogin = createAsyncThunk(
//   'auth/login',
//   async ({ email, password }, { rejectWithValue }) => {
//     try {
//       const dispatch = useDispatch();
//       const { data } = await instance.post('/auth/login', { email, password });
//      console.log(data);
//       setToken(data.accessToken);
//       // localStorage.setItem('refreshToken', data.refreshToken);
//      dispatch(setRefreshToken(data.refreshToken));
//       return data;
//     } catch (error) {
//       toast.error(
//         'Something went wrong! Please check the correctness of the entered data',
//         {
//           position: toast.POSITION.TOP_RIGHT,
//         }
//       );
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const logout = createAsyncThunk(
//   'auth/logout',
//   async (_, { rejectWithValue }) => {
//     try {
//       await instance.post('/auth/logout');
//       setToken();
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const fetchCurrentUser = createAsyncThunk(
//   'auth/refresh',
//   async (_, { rejectWithValue }) => {
   
//     const persistedToken = useSelector(selectAccessToken);
       
//     if (!persistedToken) {
//       return rejectWithValue('No valid token');
//     }
//     setToken(persistedToken);
//     try {
//       const { data } = await instance.get('/auth/current');
//       console.log(data);
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const updateTheme = createAsyncThunk(
//   'auth/updateTheme',
//   async (theme, { rejectWithValue }) => {
//     try {
//       const { data } = await instance.patch('/auth', { theme });
//       return data;
//     } catch (error) {
//       toast.error('Something went wrong! Please, try again.', {
//         position: toast.POSITION.TOP_RIGHT,
//       });
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const updateProfile = createAsyncThunk(
//   'auth/updateProfile',
//   async (formData, { rejectWithValue }) => {
//     try {

//       const { data } = await instance.put(`auth`, formData);
//       return data;
//     } catch (error) {
//       toast.error(
//         'Something went wrong! Please check the correctness of the entered data',
//         {
//           position: toast.POSITION.TOP_RIGHT,
//         }
//       );
//       return rejectWithValue(error.message);
//     }
//   }
// );

import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import {store} from '../index';
import {setRefreshToken, setAccessToken} from './authSlice';
// import { useSelector } from 'react-redux';
// import { selectAccessToken, selectRefreshToken } from './selectors';


export const instance =axios.create({baseURL: 'https://taskpro-m75b.onrender.com/api',});
// http://localhost:3001/api

const setToken =(token) => {

  if(token) {
    console.log("token в headers", token);
    return instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  };
    instance.defaults.headers.common.Authorization = '';
  };

instance.interceptors.response.use(
  response => response,
  async error => { 
    if (error.response.status === 401 ) {
     
      // const refreshToken = localStorage.getItem('refreshToken');
      const refreshToken = store.getState().auth.refreshToken       
      // const refreshToken = useSelector(selectRefreshToken)       
console.log('refresh interceptors: ', refreshToken);
      try {
        //  const dispatch = useDispatch();
        const { data } = await instance.post('/auth/refreshToken', { refreshToken });

        console.log("data interceptors: ", data);
        setToken(data.accessToken);
        // localStorage.setItem('refreshToken', data.refreshToken);
        store.dispatch(setRefreshToken(data.refreshToken));
         
      return instance(error.config);
      // return instance(originalRequest);
    } catch (error) {
      return Promise.reject(error);
    };
  };
  if(error.response.status === 500){
    setToken();
    store.dispatch(setRefreshToken());
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
      // localStorage.setItem('refreshToken', data.refreshToken);
      store.dispatch(setRefreshToken(data.refreshToken));
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
      // localStorage.setItem('refreshToken', data.refreshToken);
      store.dispatch(setRefreshToken(data.refreshToken));
      store.dispatch(setAccessToken(data.accessToken));
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
    const store = getState();
    const persistedToken = store.getState().auth.accessToken;
    // const persistedToken = useSelector(selectAccessToken)       
    
     console.log("persistedToken: ",persistedToken);
    if (!persistedToken) {
      return rejectWithValue('No valid token');
    }
    setToken(persistedToken);
    store.dispatch(setAccessToken(persistedToken));

    try {
      const { data } = await instance.get('/auth/current');
      
      console.log("data после current: ", data);
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
      toast.error('Something went wrong! Please, try again.', {
        position: toast.POSITION.TOP_RIGHT,
      });
      return rejectWithValue(error.message);
    }
  }
);

export const updateProfile = createAsyncThunk(
  'auth/updateProfile',
  async (formData, { rejectWithValue }) => {
    try {

      const { data } = await instance.put(`auth`, formData);
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