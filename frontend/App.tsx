import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import onboardingReducer from './reducers/onboarding/onboardingReducer';
import LayoutWrapper from './components/LayoutWrapper';

const store = configureStore({
  reducer: {
    onboarding: onboardingReducer,
  },
});

export default function App() {
  return (
    <Provider store={store}>
      <LayoutWrapper />
    </Provider>
  );
}
