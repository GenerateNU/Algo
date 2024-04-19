import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import onboardingReducer from './reducers/onboarding/onboardingReducer';
import makePostReducer from './reducers/makePost/makePostReducer';
import portfolioReducer from './reducers/portfolio/portfolioReducer';
import LayoutWrapper from './components/LayoutWrapper';
import { ClerkProvider } from '@clerk/clerk-expo';
import * as SecureStore from 'expo-secure-store';
import { LogBox } from 'react-native';

const store = configureStore({
  reducer: {
    onboarding: onboardingReducer,
    makePost: makePostReducer,
    portfolio: portfolioReducer,
  },
});

const tokenCache = {
  async getToken(key: string) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

export default function App() {
  LogBox.ignoreAllLogs();
  return (
    <ClerkProvider
      publishableKey={process.env.EXPO_PUBLIC_CLERK_API_KEY as string}
      tokenCache={tokenCache}>
      <Provider store={store}>
        <LayoutWrapper />
      </Provider>
    </ClerkProvider>
  );
}
