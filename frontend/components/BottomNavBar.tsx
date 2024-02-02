import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Text } from "react-native"
import NotFound from "../pages/NotFound"
import TestPage from "../pages/TestPage"
import AuthPage from "../pages/AuthPage"

const Tab = createBottomTabNavigator<BottomTabParamList>()
type TabRouteName = "SignUp" | "Home" | "PostListing" | "PublicProfile" | "Me"

const tabBarIconMapping: Record<TabRouteName, string> = {
  SignUp: "ios-person",
  Home: "ios-calendar",
  "PostListing": "ios-add-circle-outline",
  "PublicProfile": "ios-person",
  "Me": "ios-person"
}

export type BottomTabParamList = {
  Home: undefined
  SignUp: undefined
  FeedPage: undefined
  Leaderboard: undefined
  Preferences: undefined
}

const BottomNavBar = () => {
  /*
  */
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarHideOnKeyboard: true,
      })}
    >
      <Tab.Screen name="Home" component={TestPage} options={{
        headerShown: true,
        title: "DEV Test Home"
      }} />
      <Tab.Screen name="SignUp" component={AuthPage} options={{
        headerShown: true,
        title: "DEV Auth"
      }} />
      <Tab.Screen name="FeedPage" component={NotFound} options={{
        headerShown: true,
        title: "Feed Page"
      }} />
      <Tab.Screen name="Leaderboard" component={NotFound} options={{
        headerShown: true,
        title: "Leaderboard"
      }} />
      <Tab.Screen name="Preferences" component={NotFound} options={{
        headerShown: true,
        title: "Preferences"
      }} />
    </Tab.Navigator>
  )
}

export default BottomNavBar
