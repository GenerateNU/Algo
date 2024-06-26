import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavBar from '../router/BottomNavBar';
import AuthNavigator from '../router/AuthNavigation';
import { configureStore } from '@reduxjs/toolkit';
import onboardingReducer from '../reducers/onboarding/onboardingReducer';
import makePostReducer from '../reducers/makePost/makePostReducer';
import portfolioReducer from '../reducers/portfolio/portfolioReducer';
import { useSelector } from 'react-redux';
import MakePostNavigator from '../router/MakePostNavigation';

const store = configureStore({
  reducer: {
    onboarding: onboardingReducer,
    makePost: makePostReducer,
    portfolio: portfolioReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default function LayoutWrapper() {
  //const { session } = useSession();

  const onboarding = useSelector((state: RootState) => {
    return state.onboarding;
  });

  return (
    <NavigationContainer>
      {
        {
          onboarding: <AuthNavigator/>,
          normal: <BottomNavBar/>,
          makingPost: <MakePostNavigator/>,
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
