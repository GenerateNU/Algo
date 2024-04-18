import { createSlice } from '@reduxjs/toolkit';
import { UserPortfolio } from '../../types/types';

const onboardingSlice = createSlice({
  name: 'onboarding',
  initialState: {
    portfolio: null as UserPortfolio | null,
  },
  reducers: {
    updatePortfolio(state, action) {
      state.portfolio = action.payload;
    },
  },
});

export const { updatePortfolio } = onboardingSlice.actions;
export default onboardingSlice.reducer;
