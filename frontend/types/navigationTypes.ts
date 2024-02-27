import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
// import { createStackNavigator } from '@react-navigation/stack';

export type RootStackParamList = {
  Login: undefined;
  SplashScreen: undefined;
  Signup: undefined;
  Fullname: undefined;
  GoalsPage: undefined;
  ExperienceAndRisk: undefined;
  Confirmation: undefined;
};

export type AuthNavigationProp = StackNavigationProp<
  RootStackParamList
>;

export type SplashScreenRouteProp = RouteProp<RootStackParamList, 'SplashScreen'>;
