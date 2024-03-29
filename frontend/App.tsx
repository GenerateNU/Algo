import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import onboardingReducer from './reducers/onboarding/onboardingReducer';
import LayoutWrapper from './components/LayoutWrapper';
import { ClerkProvider } from '@clerk/clerk-expo';
import * as SecureStore from 'expo-secure-store';

const store = configureStore({
  reducer: {
    onboarding: onboardingReducer,
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
  useEffect(() => {
    console.log(process.env.EXPO_USERNAME);
  }, []);

  return (
    <ClerkProvider
      publishableKey={"pk_test_Y29tcGxldGUtcGFudGhlci05NS5jbGVyay5hY2NvdW50cy5kZXYk" as string}
      tokenCache={tokenCache}>
      <Provider store={store}>
        <LayoutWrapper />
      </Provider>
    </ClerkProvider>
  );
}
