// AppNavigator.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FeedPage from './pages/FeedPage';
import ProfileExplore from './pages/ProfileExplore';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="FeedPage" component={FeedPage} />
      <Stack.Screen name="ProfileExplore" component={ProfileExplore} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
