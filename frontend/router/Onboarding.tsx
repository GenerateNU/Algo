// AuthStack.js
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../pages/SplashScreen';
import GoalsPage from '../pages/GoalsPage';
import LoginPage from '../pages/LoginPage';

const Stack = createStackNavigator();

const OnBoardingNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="LoginPage">
      <Stack.Screen
        name="LoginPage"
        component={LoginPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{ headerShown: false }} // Hide the header for the splash screen
      />
      <Stack.Screen
        name="GoalsPage"
        component={GoalsPage}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default OnBoardingNavigator;
