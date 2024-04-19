import { createSlice } from '@reduxjs/toolkit';
import { UserPortfolio } from '../../types/types';

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState: {
    portfolio: null as UserPortfolio | null,
  },
  reducers: {
    updatePortfolio(state, action) {
      state.portfolio = action.payload;
    },
  },
});

export const { updatePortfolio } = portfolioSlice.actions;
export default portfolioSlice.reducer;
