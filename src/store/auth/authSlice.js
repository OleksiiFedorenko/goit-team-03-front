import { createSlice } from '@reduxjs/toolkit';
import {
  getRegistration,
  getLogin,
  logout,
  fetchCurrentUser,
  updateTheme,
  updateProfile
} from './operations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null, avatar: "", theme: 'violet'},
    token:  { accessToken: '', refreshToken: '' },
    isLoggedIn: false,
    isRefreshing: false,
  },
  reducers: {
    updateToken(state, action) {
      state.token.accessToken = action.payload.accessToken;
      state.token.refreshToken = action.payload.refreshToken;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getRegistration.fulfilled, (state, action) => {
        state.user = {...state.user, ...action.payload};
        state.token.accessToken = action.payload.tokens.accessToken;
  state.token.refreshToken = action.payload.tokens.refreshToken;
        state.isLoggedIn = true;
      })
      .addCase(getLogin.fulfilled, (state, action) => {
        state.user = {...state.user, ...action.payload};
        state.token.accessToken = action.payload.tokens.accessToken;
        state.token.refreshToken = action.payload.tokens.refreshToken;
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
      })

      .addCase(updateTheme.fulfilled, (state, action) => {
        state.user = {...state.user, ...action.payload}
      })

      .addCase(updateProfile.fulfilled, (state, action) => {
        state.user = {...state.user, ...action.payload}
      })
  },
});
export const { updateToken } = authSlice.actions;
export const authReducer = authSlice.reducer;
