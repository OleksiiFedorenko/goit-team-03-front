import { createSlice } from '@reduxjs/toolkit';

const navSlice = createSlice({
  name: 'nav',
  initialState: {
    navIndex: 0,
  },
  reducers: {
    setNavIndex(state, action) {
      console.log('new nav index', state);
      state.navIndex = action.payload;
    },
  },
});
export const { setNavIndex } = navSlice.actions;
export const navReducer = navSlice.reducer;
