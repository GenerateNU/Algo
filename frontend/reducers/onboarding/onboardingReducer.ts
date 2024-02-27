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
    financialGoalsShortTerm: [],
    financialGoalsLongTerm: [],
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
    updateFinancialGoalsShortTerm(state, action) {
      state.financialGoalsShortTerm = action.payload;
    },
    updateFinancialGoalsLongTerm(state, action) {
      state.financialGoalsLongTerm = action.payload;
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
  updateFinancialGoalsShortTerm,
  updateFinancialGoalsLongTerm,
  updateFinancialLiteracy,
  completeOnboarding,
  beginOnboarding,
} = onboardingSlice.actions;
export default onboardingSlice.reducer;
