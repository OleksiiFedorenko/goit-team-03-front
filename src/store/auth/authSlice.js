import { createSlice } from '@reduxjs/toolkit';
import {
  getRegistration,
  getLogin,
  logout,
  fetchCurrentUser,
} from './operations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null, avatar: "", theme: 'violet'},
    token: '',
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: builder => {
    builder
      .addCase(getRegistration.fulfilled, (state, action) => {
        state.user = {...state.user, ...action.payload.user};
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(getLogin.fulfilled, (state, action) => {
        state.user = {...state.user, ...action.payload.user};
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.user = { name: null, email: null, theme: 'violet', avatar: "" };
        state.token = '';
        state.isLoggedIn = false;
      })
      .addCase(fetchCurrentUser.pending, state => {
        state.isRefreshing = true;
      })

      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(fetchCurrentUser.rejected, state => {
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;
