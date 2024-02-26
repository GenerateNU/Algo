import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
// import { createStackNavigator } from '@react-navigation/stack';

export type RootStackParamList = {
  SplashScreen: undefined;
  Login: undefined;
  Signin: undefined;
  GoalsPage: undefined;
  ExperienceAndRisk: undefined;
  // define other screens here
};

export type SplashScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'SplashScreen'
>;

export type LoginPageNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Login'
>;

export type SignInPageNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Signin'
>;

export type GoalsPageNavigationProp = StackNavigationProp<
  RootStackParamList,
  'GoalsPage'
>;

export type ExperienceAndRiskNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ExperienceAndRisk'
>;

export type SplashScreenRouteProp = RouteProp<RootStackParamList, 'SplashScreen'>;
