import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface CounterState {
  data: Array<any>;
  name: string;
}

const initialState: CounterState = {
  data: [],
  name: 'Nam',
};

export const LoginSlice = createSlice({
  name: 'LoginSlice',
  initialState,
  reducers: {
    setUserInfor: (state, action) => {
      state.data = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setUserInfor} = LoginSlice.actions;

export default LoginSlice.reducer;
