import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Text } from "react-native"
import NotFound from "../pages/NotFound"
import TestPage from "../pages/TestPage"
import AuthPage from "../pages/AuthPage"

const Tab = createBottomTabNavigator<BottomTabParamList>()
type TabRouteName = "SignUp" | "Home" | "PostListing" | "PublicProfile" | "Me"

const tabBarIconMapping: Record<TabRouteName, string> = {
  "SignUp": "ios-person",
  "Home": "ios-calendar",
  "PostListing": "ios-add-circle-outline",
  "PublicProfile": "ios-person",
  "Me": "ios-person"
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
