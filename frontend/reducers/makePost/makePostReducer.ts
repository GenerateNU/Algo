import { createSlice } from '@reduxjs/toolkit';

const makePostSlice = createSlice({
  name: 'makePost',
  initialState: {
    percentData: 0,
    tickerSymbol: '',
    summaryType: '', // One Month, Six Month, One Year
    title: '',
    description: '',
  },
  reducers: {
    updatePercentData(state, action) {
      state.percentData = action.payload;
    },
    updateTickerSymbol(state, action) {
      state.tickerSymbol = action.payload;
    },
    updateSummaryType(state, action) {
      state.summaryType = action.payload;
    },
    updateTitle(state, action) {
      state.title = action.payload;
    },
    updateDescription(state, action) {
      state.description = action.payload;
    }
  },
});

export const {
  updatePercentData,
  updateTickerSymbol,
  updateSummaryType,
  updateTitle,
  updateDescription
} = makePostSlice.actions;
export default makePostSlice.reducer;