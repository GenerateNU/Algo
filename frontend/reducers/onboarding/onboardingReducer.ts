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
    knowledge: '',
    financialGoalsShortTerm: [],
    financialGoalsLongTerm: [],
    financialLiteracy: [],
    isOnboarding: 'normal', // 'onboarding', 'normal', 'makingPost'
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
    updateKnowledge(state, action) {
      state.knowledge = action.payload;
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
      state.isOnboarding = 'onboarding';
    },
    completeOnboarding(state) {
      state.isOnboarding = 'normal';
    },
    makePost(state) {
      state.isOnboarding = 'makingPost';
    },
    signOutUser(state) {
      state.isOnboarding = 'onboarding';
    },
    finishPost(state) {
      state.isOnboarding = 'normal';
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
  updateKnowledge,
  updateFinancialGoalsShortTerm,
  updateFinancialGoalsLongTerm,
  updateFinancialLiteracy,
  completeOnboarding,
  makePost,
  signOutUser,
  finishPost,
  beginOnboarding,
} = onboardingSlice.actions;
export default onboardingSlice.reducer;
