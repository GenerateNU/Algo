import { createSlice } from '@reduxjs/toolkit';

const onboardingSlice = createSlice({
  name: 'onboarding',
  initialState: {
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    email: '',
    risk: '',
    yearsOfExperience: 0,
    financialGoals: [],
    financialLiteracy: [],
    isOnboarding: false,
  },
  reducers: {
    updateFirstName(state, action) {
      state.firstName = action.payload;
    },
    updateLastName(state, action) {
      state.lastName = action.payload;
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
    updateYearsOfExperience(state, action) {
      state.yearsOfExperience = action.payload;
    },
    updateFinancialGoals(state, action) {
      state.financialGoals = action.payload;
    },
    updateFinancialLiteracy(state, action) {
      state.financialLiteracy = action.payload;
    },
    beginOnboarding(state) {
      state.isOnboarding = true;
    },
    completeOnboarding(state) {
      state.isOnboarding = false;
    },
  },
});

export const {
  updateFirstName,
  updateLastName,
  updateUsername,
  updateEmail,
  updatePassword,
  updateRisk,
  updateYearsOfExperience,
  updateFinancialGoals,
  updateFinancialLiteracy,
  completeOnboarding,
  beginOnboarding,
} = onboardingSlice.actions;
export default onboardingSlice.reducer;
