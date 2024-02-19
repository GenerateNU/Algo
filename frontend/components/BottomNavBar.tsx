import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import NotFound from '../pages/NotFound';
import Profile from '../pages/Profile';
import TestPage from '../pages/TestPage';
import AuthPage from '../pages/AuthPage';
import { Icon } from '@rneui/themed';
import { RouteProp } from '@react-navigation/native';
import SignInScreen from '../pages/SignInScreen';
import SignUpScreen from '../pages/SignUpScreen';
import { useClerk } from '@clerk/clerk-expo';

const Tab = createBottomTabNavigator<BottomTabParamList>();
type TabRouteName =
  | 'Explore'
  | 'Leaderboard'
  | 'Profile'
  | 'Signin'
  | 'Registration';

const tabBarIconMapping: Record<TabRouteName, string> = {
  Explore: 'feature-search',
  Leaderboard: 'podium',
  Profile: 'account-circle',
  Signin: 'login',
  Registration: 'account-plus',
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
  Signin: undefined;
  Registration: undefined;
};

const BottomNavBar = () => {
  const { user } = useClerk();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarIcon: ({ color }) => screenOptionsIcon(route, color),
        // tabBarVisible: route.name !== 'Signin' && route.name !== 'Registration',
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
      {user !== null && (
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: false,
          }}
        />
      )}
      {user === null && (
        <Tab.Screen
          name="Signin"
          component={SignInScreen}
          options={{
            headerShown: false,
          }}
        />
      )}
      {user === null && (
        <Tab.Screen
          name="Registration"
          component={SignUpScreen}
          options={{
            headerShown: false,
          }}
        />
      )}
    </Tab.Navigator>
  );
};

export default BottomNavBar;
