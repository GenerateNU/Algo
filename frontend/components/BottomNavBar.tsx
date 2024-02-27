import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Profile from '../pages/Profile';
import TestPage from '../pages/TestPage';
import AuthPage from '../pages/AuthPage';
import { Icon } from '@rneui/themed';
import { RouteProp } from '@react-navigation/native';

const Tab = createBottomTabNavigator<BottomTabParamList>();
type TabRouteName =
  | 'Explore'
  | 'Leaderboard'
  | 'Profile'
  | 'Signin'
  | 'Registration';

const tabBarIconMapping: Record<TabRouteName, string> = {
  "Explore": "feature-search",
  "Leaderboard": "podium",
  "Profile": "account-circle",
}

const screenOptionsIcon = (route: RouteProp<BottomTabParamList, keyof BottomTabParamList>, color: string) => {
  const iconName = tabBarIconMapping[route.name]
  return (
    <Icon type='material-community' name={iconName} size={22} color={color} />
  )
}

export type BottomTabParamList = {
  Leaderboard: undefined
  Explore: undefined
  Profile: undefined
}

const BottomNavBar = () => {
  /*
  */
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarIcon: ({ color }) => 
          screenOptionsIcon(route, color)
      })}
    >
      <Tab.Screen name="Explore" component={TestPage} options={{
        headerShown: false,
        
      }} />
      <Tab.Screen name="Leaderboard" component={AuthPage} options={{
        headerShown: false,
        title: "Leaderboard"
      }} />
      <Tab.Screen name="Profile" component={NotFound} options={{
        headerShown: false,
      }} />
    </Tab.Navigator>
  )
}

export default BottomNavBar
