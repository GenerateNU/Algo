import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import NotFound from '../pages/NotFound';
import Profile from '../pages/Profile';
import TestPage from '../pages/TestPage';
import AuthPage from '../pages/AuthPage';
import { Icon } from '@rneui/themed';
import { RouteProp } from '@react-navigation/native';
import { useSession } from '@clerk/clerk-expo';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
// import OnBoardingNavigator from '../router/Onboarding';

const Tab = createBottomTabNavigator<BottomTabParamList>();
type TabRouteName =
  | 'Explore'
  | 'Leaderboard'
  | 'Profile'
  | 'Login'
  | 'Signup';

const tabBarIconMapping: Record<TabRouteName, string> = {
  Explore: 'feature-search',
  Leaderboard: 'podium',
  Profile: 'account-circle',
  Login: 'login',
  Signup: 'account-plus',
};

const screenOptionsIcon = (
  route: RouteProp<BottomTabParamList, keyof BottomTabParamList>,
  color: string,
) => {
  const iconName = tabBarIconMapping[route.name];
  return (
    <Icon type="material-community" name={iconName} size={22} color={color} />
  );
};

export type BottomTabParamList = {
  Leaderboard: undefined;
  Explore: undefined;
  Profile: undefined;
  Login: undefined;
  Signup: undefined;
};

const BottomNavBar = () => {
  const { session } = useSession();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarIcon: ({ color }) => screenOptionsIcon(route, color),
      })}>
      <Tab.Screen
        name="Explore"
        component={TestPage}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Leaderboard"
        component={AuthPage}
        options={{
          headerShown: false,
          title: 'Leaderboard',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
      {session?.user === undefined && (
        <Tab.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
      )}
      {session?.user === undefined && (
        <Tab.Screen
          name="Signup"
          component={Signup}
          options={{
            headerShown: false,
          }}
        />
      )}
    </Tab.Navigator>
  );
};

export default BottomNavBar;