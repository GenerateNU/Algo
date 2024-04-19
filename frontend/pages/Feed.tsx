import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import FeedPage from "./FeedPage";
import Follow from "./Follow";

const Stack = createStackNavigator();

const Feed = () => {
    return (
        <Stack.Navigator initialRouteName="Feed">
            <Stack.Screen
                name="Feed"
                component={FeedPage}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Follow"
                component={Follow}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}

export default Feed;