import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { User } from './types';
// import { createStackNavigator } from '@react-navigation/stack';

export type RootStackParamList = {
  Login: undefined;
  SplashScreen: undefined;
  Signup: undefined;
  Fullname: undefined;
  GoalsPage: undefined;
  ExperienceAndRisk: undefined;
  LevelPage: undefined;
  ConnectPage: undefined;
  Etrade: undefined;
  Confirmation: undefined;
  LongTermGoals: undefined;
  ShortTermGoals: undefined;
  Profile: undefined | { screen: "FollowerProfile"; params: { user: User } };
  ProfilePage: undefined;
  FollowerProfile: { user: User }
  Followers: { label: string, users: User[] };
};

export type ProfileOtherStack = {
  Profile: undefined | { screen: "FollowerProfile"; params: { user: User } };
};

export type OutsideProfileNavProp = StackNavigationProp<ProfileOtherStack>;

export type AuthNavigationProp = StackNavigationProp<
  RootStackParamList
>;

export type ProfileParamList = {
  FollowerProfile: { user: User }
  Followers: { label: string, users: User[] };
}

export type ToProfileParamList = {
  
}

export type LevelPageNavigationProp = StackNavigationProp<
  RootStackParamList,
  'LevelPage'
>;

// export type ConnectPageNavigationProp = StackNavigationProp<
//   RootStackParamList,
//   'ConnectPage'
// >;

// export type TutorialPageNavigationProp = StackNavigationProp<
//   RootStackParamList,
//   'TutorialPage'
// >;

// export type MainAppNavigationProp = StackNavigationProp<
//   RootStackParamList,
//   'MainApp'
// >;

// export type AuthPageNavigationProp = StackNavigationProp<
//   RootStackParamList,
//   'AuthPage'
// >;

export type SplashScreenRouteProp = RouteProp<RootStackParamList, 'SplashScreen'>;
