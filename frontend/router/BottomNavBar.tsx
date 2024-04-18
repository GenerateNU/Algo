import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from '@rneui/themed';
import { RouteProp } from '@react-navigation/native';
import ProfileNavigator from './ProfileNavigation';
import Leaderboard from '../pages/Leaderboard';
import Feed from '../pages/Feed';

const Tab = createBottomTabNavigator<BottomTabParamList>();
type TabRouteName =
  | 'Explore'
  | 'Leaderboard'
  | 'Profile'

const tabBarIconMapping: Record<TabRouteName, string> = {
  Explore: 'feature-search',
  Leaderboard: 'podium-gold',
  Profile: 'account-circle',
};

const screenOptionsIcon = (
  route: RouteProp<BottomTabParamList, keyof BottomTabParamList>,
  color: string,
) => {
  const iconName = tabBarIconMapping[route.name];
  return (
    <Icon type="material-community" name={iconName} size={24} color={color} />
  );
};

export type BottomTabParamList = {
  Leaderboard: undefined;
  Explore: undefined;
  Profile: undefined;
};

const BottomNavBar = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarIcon: ({ color }) => screenOptionsIcon(route, color),
      })}>
      <Tab.Screen
        name="Explore"
        component={Feed}
        options={{
          tabBarActiveTintColor: '#02AD98',
          tabBarShowLabel: false,
          tabBarInactiveTintColor: '#333333',
        }}
      />
      <Tab.Screen
        name="Leaderboard"
        component={Leaderboard}
        options={{
          tabBarActiveTintColor: '#02AD98',
          tabBarShowLabel: false,
          tabBarInactiveTintColor: '#333333',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          tabBarActiveTintColor: '#02AD98',
          tabBarShowLabel: false,
          tabBarInactiveTintColor: '#333333',
        }}
      />
    </Tab.Navigator>
  );
};


// const ProfileStack = createStackNavigator();
// const ProfileStackNavigator = () => (
//   <ProfileStack.Navigator initialRouteName="Profile">
//     <ProfileStack.Screen name="Profile" component={Profile} />
//     <ProfileStack.Screen name="CopyTrades" component={CopyTradesPage} />
//   </ProfileStack.Navigator>
// );

export default BottomNavBar;