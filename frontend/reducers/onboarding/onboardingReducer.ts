import { createSlice } from "@reduxjs/toolkit";

const onboardingSlice = createSlice({
  name: "onboarding",
  initialState: { completed: false, financialGoals: [], financialLiteracy: [], yearsOfExperience: 0},
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
  },
});


export const { completeOnboarding, updateFinancialGoals, updateFinancialLiteracy, updateYearsOfExperience } = onboardingSlice.actions;
export default onboardingSlice.reducer;