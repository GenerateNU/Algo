// AuthStack.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../pages/Profile';
import Followers from '../pages/Followers';

const Stack = createStackNavigator();

const ProfileNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="ProfilePage">
      {}
      <Stack.Screen
        name="ProfilePage"
        component={Profile}
      />
      <Stack.Screen
        name="FollowerProfile"
        component={Profile}
      />
      <Stack.Screen
        name="Followers"
        component={Followers}
      />
    </Stack.Navigator>
  );
};

export default ProfileNavigator;
