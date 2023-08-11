import { createSlice } from '@reduxjs/toolkit';

const prioFilters = {
  all: 'all',
  without: 'without',
  low: 'low',
  medium: 'medium',
  high: 'high',
};

const filtersInitialState = {
  prio: prioFilters.all,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: filtersInitialState,
  reducers: {
    setPrioFilter(state, action) {
      state.prio = action.payload;
    },
  },
});

export const { setPrioFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
