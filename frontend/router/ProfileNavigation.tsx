// AuthStack.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../pages/Profile';
import Followers from '../pages/Followers';
import { useSession } from '@clerk/clerk-expo';

const Stack = createStackNavigator();

const ProfileNavigator = () => {
  const { session } = useSession();

  return (
    <Stack.Navigator initialRouteName="ProfilePage">
      {}
      <Stack.Screen
        name="ProfilePage"
        initialParams={{ userId: session?.user.id }}
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
