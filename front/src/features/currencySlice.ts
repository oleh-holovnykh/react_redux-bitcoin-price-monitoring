/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getCurrencyDataById from 'api/btc';
import { BtcRecord } from 'types/BtcRecord';

export type CurrencyState = {
  btc: BtcRecord[];
};

const initialState: CurrencyState = {
  btc: [],
};

export const loadBtc = createAsyncThunk('get/btc', () => getCurrencyDataById(1));

const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadBtc.fulfilled, (state, action) => {
      const id = action.payload.status.timestamp;
      const dateObj = new Date(action.payload.status.timestamp);
      const date = dateObj.toDateString().slice(4, 10);
      const time = dateObj.toLocaleTimeString();

      const newRecord = {
        id,
        date,
        time,
        price: action.payload.data[1].quote.USD.price,
      };

      state.btc.push(newRecord);
    });
  },
});

export default currencySlice.reducer;
export const { actions } = currencySlice;
