import { createSlice } from '@reduxjs/toolkit';

const onboardingSlice = createSlice({
  name: 'onboarding',
  initialState: {
    completed: false,
    financialGoals: [],
    financialLiteracy: [],
    yearsOfExperience: 0,
    username: '',
    email: '',
    password: '',
  },
  reducers: {
    completeOnboarding(state) {
      state.completed = true;
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
  },
});

export const {
  completeOnboarding,
  updateFinancialGoals,
  updateFinancialLiteracy,
  updateYearsOfExperience,
  updateUsername,
  updateEmail,
  updatePassword,
} = onboardingSlice.actions;
export default onboardingSlice.reducer;
