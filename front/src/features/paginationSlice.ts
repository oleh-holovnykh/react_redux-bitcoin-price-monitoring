/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type PaginationState = {
  currentPage: number;
  itemsPerPage: number;
};

const initialState: PaginationState = {
  currentPage: 1,
  itemsPerPage: 10,
};

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setItemsPerPage: (state, action: PayloadAction<number>) => {
      state.itemsPerPage = action.payload;
    },
  },
});

export default paginationSlice.reducer;
export const { actions } = paginationSlice;
