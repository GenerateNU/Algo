import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import FeedPage from '../pages/FeedPage';

import SharePost from '../pages/MakePost/SharePost';

// Trade Post
import SelectTrade from '../pages/MakePost/TradePost/SelectTrade';
import TradePostDetails from '../pages/MakePost/TradePost/TradePostDetails';

// Text Based Post
import TextBasedPost from '../pages/MakePost/TextBasedPost/TextBasedPost';

// Portfolio Summary
import SharePortfolioSummary from '../pages/MakePost/PortfolioSummary/SharePortfolioSummary';
import PortfolioSummary from '../pages/MakePost/PortfolioSummary/PortfolioSummary';

const Stack = createStackNavigator();

const MakePostNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="FeedPage">
      <Stack.Screen
        name="FeedPage"
        component={FeedPage}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="SharePost"
        component={SharePost}
        options={{ headerShown: false }}
      />

      {/* Trade Post */}
      <Stack.Screen
        name="SelectTrade"
        component={SelectTrade}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TradePostDetails"
        component={TradePostDetails}
        options={{ headerShown: false }}
      />

      {/* Text Based Post */}
      <Stack.Screen
        name="TextBasedPost"
        component={TextBasedPost}
        options={{ headerShown: false }}
      />
        
      {/* Portfolio Summary */}
      <Stack.Screen
        name="SharePortfolioSummary"
        component={SharePortfolioSummary}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PortfolioSummary"
        component={PortfolioSummary}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default MakePostNavigator;