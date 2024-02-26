import React from 'react';
import { ClerkProvider } from '@clerk/clerk-expo';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavBar from '../router/BottomNavBar';
import { useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import * as SecureStore from 'expo-secure-store';
import onboardingReducer from '../reducers/onboarding/onboardingReducer';

const store = configureStore({
  reducer: {
    onboarding: onboardingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

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

export default function LayoutWrapper() {
  const onboarding = useSelector((state: RootState) => {
    return state.onboarding;
  });
  return (
      <ClerkProvider
        publishableKey={process.env.EXPO_PUBLIC_CLERK_API_KEY as string}
        tokenCache={tokenCache}>
        {onboarding.completed ? (
          <NavigationContainer>
            <BottomNavBar />
          </NavigationContainer>
        ) : (
          <NavigationContainer>
            <BottomNavBar />
          </NavigationContainer>
        )}
      </ClerkProvider>
  );
}
