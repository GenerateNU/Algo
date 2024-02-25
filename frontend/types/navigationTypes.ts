import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { createStackNavigator } from '@react-navigation/stack';

export type RootStackParamList = {
  SplashScreen: undefined;
  LoginPage: undefined;
  SignInPage: undefined;
  GoalsPage: undefined;
  LevelPage: undefined;
  ConnectPage: undefined;
  TutorialPage: undefined;
  // define other screens here
};

export type SplashScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'SplashScreen'
>;

export type LoginPageNavigationProp = StackNavigationProp<
  RootStackParamList,
  'LoginPage'
>;

export type SignInPageNavigationProp = StackNavigationProp<
  RootStackParamList,
  'SignInPage'
>;

export type GoalsPageNavigationProp = StackNavigationProp<
  RootStackParamList,
  'GoalsPage'
>;

export type LevelPageNavigationProp = StackNavigationProp<
  RootStackParamList,
  'LevelPage'
>;

export type ConnectPageNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ConnectPage'
>;

export type TutorialPageNavigationProp = StackNavigationProp<
  RootStackParamList,
  'TutorialPage'
>;

export type SplashScreenRouteProp = RouteProp<RootStackParamList, 'SplashScreen'>;
