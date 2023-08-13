// import { createSlice } from '@reduxjs/toolkit';
// import {
//   getRegistration,
//   getLogin,
//   logout,
//   fetchCurrentUser,
//   updateTheme,
//   updateProfile,
// } from './operations';

// const authSlice = createSlice({
//   name: 'auth',
//   initialState: {
//     user: { name: null, email: null, avatarURL: '', theme: 'violet' },
//     accessToken: '',
//     refreshToken: '',
//     isLoggedIn: false,
//     isRefreshing: false,
//   },
//    reducers: {
//     setRefreshToken(state, action) {
//       state.refreshToken = action.payload;
//     },
//   },
//    extraReducers: builder => {
//     builder
//       .addCase(getRegistration.fulfilled, (state, action) => {
//         state.user = {...state.user, ...action.payload};
//         state.accessToken = action.payload.accessToken;
//         state.refreshToken = action.payload.refreshToken;        
//         state.isLoggedIn = true;
//       })
//       .addCase(getLogin.fulfilled, (state, action) => {
//         state.user = {...state.user, ...action.payload};
//         state.accessToken = action.payload.accessToken;
//         state.refreshToken = action.payload.refreshToken;
//         state.isLoggedIn = true;
//       })
//       .addCase(logout.fulfilled, (state, action) => {
//         state.user = {
//           name: null,
//           email: null,
//           theme: 'violet',
//           avatarURL: '',
//         };
//         state.accessToken = '';
//         state.refreshToken = '';
//         state.isLoggedIn = false;
//       })
//       .addCase(fetchCurrentUser.pending, state => {
//         state.isRefreshing = true;
//       })

//       .addCase(fetchCurrentUser.fulfilled, (state, action) => {
//         state.user = action.payload;
//         state.accessToken = action.payload.accessToken;
//         state.isLoggedIn = true;
//         state.isRefreshing = false;
//       })
//       .addCase(fetchCurrentUser.rejected, state => {
//         state.isRefreshing = false;
//         // state.accessToken = '';
//       })

//       .addCase(updateTheme.fulfilled, (state, action) => {
//         state.user = { ...state.user, ...action.payload };
//       })

//       .addCase(updateProfile.fulfilled, (state, action) => {
//         const {name, email, avatarURL, theme} = action.payload
//         state.user = { name, email, avatarURL, theme};
//       });
//   },
// });
// export const { setRefreshToken } = authSlice.actions;
// export const authReducer = authSlice.reducer;
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
    accessToken: '',
    refreshToken: '',
    isLoggedIn: false,
    isRefreshing: false,
  },
   reducers: {
    setRefreshToken(state, action) {
      state.refreshToken = action.payload;
    },
    setAccessToken(state, action) {
      state.accessToken = action.payload;
    },
    setLoggedIn(state, action) {
      state.isLoggedIn = action.payload;
    },
  },
   extraReducers: builder => {
    builder
      .addCase(getRegistration.fulfilled, (state, action) => {
        state.user = {...state.user, ...action.payload};
        state.accessToken = action.payload.token;
        state.refreshToken = action.payload.refreshToken;        
        state.isLoggedIn = true;
      })
      .addCase(getLogin.fulfilled, (state, action) => {
        state.user = {...state.user, ...action.payload};
        state.accessToken = action.payload.token;
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
        state.accessToken = '';
        state.refreshToken = '';
        state.isLoggedIn = false;
      })
      .addCase(fetchCurrentUser.pending, state => {
        state.isRefreshing = true;
      })

      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.accessToken = action.payload.accessToken;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(fetchCurrentUser.rejected, state => {
        state.isRefreshing = false;
        state.isLoggedIn = false;
        state.accessToken = '';
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
export const { setRefreshToken, setAccessToken, setLoggedIn } = authSlice.actions;
export const authReducer = authSlice.reducer;
