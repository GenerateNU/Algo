import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { User } from './types';
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
  Follow: undefined;
  Feed: undefined;
};

export type ProfileOtherStack = {
  Profile: undefined | { screen: "FollowerProfile"; params: { user: User } };
};


export type MakePostParamList = {
  SharePost: undefined;
  SelectTrade: undefined;
  TradePostDetails: undefined;
  TextBasedPost: undefined;
  SharePortfolioSummary: undefined;
  PortfolioSummary: undefined;
};

export type ProfileStackParamList = {
  Profile: undefined;
  FollowerProfile: { user: User };
  Followers: { label: string; users: User[] };
  CopyTrades: { user: User };
};

export type MakePostNavigationProp = StackNavigationProp<
  MakePostParamList
>;

export type OutsideProfileNavProp = StackNavigationProp<ProfileOtherStack>;


export type AuthNavigationProp = StackNavigationProp<
  RootStackParamList
>;

export type ProfileParamList = {
  FollowerProfile: { user: User }
  Followers: { label: string, users: User[] };
}

export type LevelPageNavigationProp = StackNavigationProp<
  RootStackParamList,
  'LevelPage'
>;

export type ProfileNavigationProp = StackNavigationProp<
  RootStackParamList
>;

export type SplashScreenRouteProp = RouteProp<RootStackParamList, 'SplashScreen'>;