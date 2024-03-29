// AuthStack.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import { useSession } from '@clerk/clerk-expo';
// import { useSelector } from 'react-redux';
// import { RootState } from '../components/LayoutWrapper';
import SplashScreen from '../pages/SplashScreen';
import Signup from '../pages/Onboarding/Signup';
import Fullname from '../pages/Onboarding/Fullname';
import GoalsPage from '../pages/Onboarding/GoalsPage';
import ExperienceAndRisk from '../pages/Onboarding/ExperienceAndRisk';
import LevelPage from '../pages/Onboarding/LevelPage';
import ConnectPage from '../pages/Onboarding/ConnectPage';
import Etrade from '../pages/Onboarding/Etrade';
import Confirmation from '../pages/Onboarding/Confirmation';
import Login from '../pages/Login';
// import Profile from '../pages/Profile';

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      {/* The SplashScreen component is diplayed first for 1 second or while the app loads*/}
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{ headerShown: false }} // Hide the header for the splash screen
      />
      {/* user gets taken to LoginPage after SplashScreen*/}
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Fullname"
        component={Fullname}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="GoalsPage"
        component={GoalsPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ExperienceAndRisk"
        component={ExperienceAndRisk}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LevelPage"
        component={LevelPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ConnectPage"
        component={ConnectPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Etrade"
        component={Etrade}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Confirmation"
        component={Confirmation}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
