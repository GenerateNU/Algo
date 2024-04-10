import React from 'react';
import { useSession } from '@clerk/clerk-expo';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavBar from '../router/BottomNavBar';
import AuthNavigator from '../router/AuthNavigation';
import { configureStore } from '@reduxjs/toolkit';
import onboardingReducer from '../reducers/onboarding/onboardingReducer';
import { useSelector } from 'react-redux';

const store = configureStore({
  reducer: {
    onboarding: onboardingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default function LayoutWrapper() {
  const { session } = useSession();

  const onboarding = useSelector((state: RootState) => {
    return state.onboarding;
  });

  return (
    <NavigationContainer>
      {
        {
          onboarding: <AuthNavigator/>,
          normal: <BottomNavBar/>,
          makingPost: (null),
        }[onboarding.isOnboarding]
      }
      {/* {session?.user !== undefined && !onboarding.isOnboarding  ? (
        <BottomNavBar />
      ) : (
        <AuthNavigator />
      )} */}
    </NavigationContainer>
  );
}
