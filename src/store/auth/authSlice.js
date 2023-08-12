import { createSlice } from '@reduxjs/toolkit';
import {
  getRegistration,
  getLogin,
  logout,
  fetchCurrentUser,
  updateTheme,
  updateProfile,
} from './operations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null, avatarURL: '', theme: 'violet' },
    token: '',
    refreshToken: '',
    isLoggedIn: false,
    isRefreshing: false,
  },
   extraReducers: builder => {
    builder
      .addCase(getRegistration.fulfilled, (state, action) => {

        state.user = {...state.user, ...action.payload};
        state.token = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;        
        state.isLoggedIn = true;
      })
      .addCase(getLogin.fulfilled, (state, action) => {
        state.user = {...state.user, ...action.payload};
        state.token = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;       

        state.isLoggedIn = true;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.user = {
          name: null,
          email: null,
          theme: 'violet',
          avatarURL: '',
        };
        state.token = '';
        state.refreshToken = '';
        state.isLoggedIn = false;
      })
      .addCase(fetchCurrentUser.pending, state => {
        state.isRefreshing = true;
      })

      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(fetchCurrentUser.rejected, state => {
        state.isRefreshing = false;
        state.token = '';
      })

      .addCase(updateTheme.fulfilled, (state, action) => {
        state.user = { ...state.user, ...action.payload };
      })

      .addCase(updateProfile.fulfilled, (state, action) => {
        const {name, email, avatarURL, theme} = action.payload
        state.user = { name, email, avatarURL, theme};
      });
  },
});

export const authReducer = authSlice.reducer;
