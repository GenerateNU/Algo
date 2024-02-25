import React from 'react';
import { ClerkProvider } from '@clerk/clerk-expo';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavBar from './components/BottomNavBar';
import * as SecureStore from 'expo-secure-store';

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
  return (
    <ClerkProvider
      publishableKey={process.env.EXPO_PUBLIC_CLERK_API_KEY as string}
      tokenCache={tokenCache}
      >
      <NavigationContainer>
        <BottomNavBar />
      </NavigationContainer>
    </ClerkProvider>
  );
}
