import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface CounterState {
  openModal: boolean;
}

const initialState: CounterState = {
  openModal: false,
};

export const scheduleOverviewSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setOpenModal: (state, action) => {
      state.openModal = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setOpenModal} = scheduleOverviewSlice.actions;

export default scheduleOverviewSlice.reducer;
