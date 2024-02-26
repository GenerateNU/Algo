// AuthStack.js
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../pages/SplashScreen';
import GoalsPage from '../pages/GoalsPage';
import Signup from '../pages/Signup';

const Stack = createStackNavigator();

const OnBoardingNavigator = () => {
  
  return (
    <Stack.Navigator initialRouteName="Signup">
      <Stack.Screen
        name="Signup"
        component={Signup}
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
