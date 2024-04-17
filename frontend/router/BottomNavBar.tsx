import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from '@rneui/themed';
import { RouteProp } from '@react-navigation/native';
import Profile from '../pages/Profile';
import FeedPage from '../pages/FeedPage';
import Leaderboard from '../pages/Leaderboard';

//import SharePost from '../pages/MakePost/SharePost';
//import SelectTrade from '../pages/MakePost/TradePost/SelectTrade';
//import TradePostDetails from '../pages/MakePost/TradePost/TradePostDetails';
//import TextBasedPost from '../pages/MakePost/TextBasedPost/TextBasedPost';
//import SharePortfolioSummary from '../pages/MakePost/PortfolioSummary/SharePortfolioSummary';
//import PortfolioSummary from '../pages/MakePost/PortfolioSummary/PortfolioSummary';

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
  // const { session } = useSession();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarIcon: ({ color }) => screenOptionsIcon(route, color),
      })}>
      <Tab.Screen
        name="Explore"
        component={FeedPage}
        options={{
          tabBarActiveTintColor: '#02AD98',
          tabBarShowLabel: false,
          tabBarInactiveTintColor: '#333333'
        }}
      />
      <Tab.Screen
        name="Leaderboard"
        component={Leaderboard}
        options={{
          tabBarActiveTintColor: '#02AD98',
          tabBarShowLabel: false,
          tabBarInactiveTintColor: '#333333'
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarActiveTintColor: '#02AD98',
          tabBarShowLabel: false,
          tabBarInactiveTintColor: '#333333'
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavBar;