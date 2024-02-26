import { createSlice } from '@reduxjs/toolkit';

const onboardingSlice = createSlice({
  name: 'onboarding',
  initialState: {
    isOnboarding: false,
    username: '',
    email: '',
    password: '',
    financialGoals: [],
    financialLiteracy: [],
    risk: '',
    yearsOfExperience: 0,
  },
  reducers: {
    completeOnboarding(state) {
      state.isOnboarding = false;
    },
    beginOnboarding(state) {
      state.isOnboarding = true;
    },
    updateFinancialGoals(state, action) {
      state.financialGoals = action.payload;
    },
    updateFinancialLiteracy(state, action) {
      state.financialLiteracy = action.payload;
    },
    updateYearsOfExperience(state, action) {
      state.yearsOfExperience = action.payload;
    },
    updateUsername(state, action) {
      state.username = action.payload;
    },
    updateEmail(state, action) {
      state.email = action.payload;
    },
    updatePassword(state, action) {
      state.password = action.payload;
    },
    updateRisk(state, action) {
      state.risk = action.payload;
    },
  },
});

export const {
  completeOnboarding,
  beginOnboarding,
  updateFinancialGoals,
  updateFinancialLiteracy,
  updateYearsOfExperience,
  updateUsername,
  updateEmail,
  updatePassword,
  updateRisk,
} = onboardingSlice.actions;
export default onboardingSlice.reducer;
