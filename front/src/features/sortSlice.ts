/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SortField } from 'types/SortField';

export type SortState = {
  sortBy: SortField;
  isReversed: boolean;
};

const initialState: SortState = {
  sortBy: SortField.None,
  isReversed: false,
};

const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    changeSortType: (state, action: PayloadAction<SortField>) => {
      if (state.sortBy !== action.payload) {
        state.sortBy = action.payload;
      } else {
        state.sortBy = SortField.None;
      }
    },
    changeReverse: (state, action: PayloadAction<boolean>) => {
      state.isReversed = action.payload;
    },
  },
});

export default sortSlice.reducer;
export const { actions } = sortSlice;
