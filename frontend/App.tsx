import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './types/navigationTypes';
import SplashScreen from './pages/SplashScreen'; 
import LoginPage from './pages/LoginPage'; 
import SignInPage from './pages/SignInPage';
import GoalsPage from './pages/GoalsPage';
import LevelPage from './pages/LevelPage';
import ConnectPage from './pages/ConnectPage';
import TutorialPage from './pages/TutorialPage';
import BottomNavBar from './components/BottomNavBar';
import AuthPage from './pages/AuthPage';

// Create a stack navigator
const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        {/* The SplashScreen component is diplayed first for 1 second or while the app loads*/}
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }} // Hide the header for the splash screen
        />
        {/* user gets taken to LoginPage after SplashScreen*/}
        <Stack.Screen
          name="LoginPage"
          component={LoginPage}
          options={{ headerShown: false }} // You can set this to true if you want a header on the login page
        />
         <Stack.Screen
          name="SignInPage"
          component={SignInPage}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="GoalsPage"
          component={GoalsPage}
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
          name="TutorialPage"
          component={TutorialPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MainApp"
          component={BottomNavBar}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AuthPage"
          component={AuthPage}
          options={{ headerShown: false }}
        />
        {/* add more screens here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

