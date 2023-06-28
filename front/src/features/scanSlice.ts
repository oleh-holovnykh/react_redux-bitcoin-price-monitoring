/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type ScanState = {
  interval: number;
};

const initialState: ScanState = {
  interval: 1,
};

const scanSlice = createSlice({
  name: 'scan',
  initialState,
  reducers: {
    applyInterval: (state, action: PayloadAction<number>) => {
      state.interval = action.payload;
    },
  },
});

export default scanSlice.reducer;
export const { actions } = scanSlice;
