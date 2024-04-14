import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import FeedPage from "./FeedPage";

const Stack = createStackNavigator();

const Feed = () => {
    return (
        <Stack.Navigator initialRouteName="Feed">
            <Stack.Screen
                name="Feed"
                component={FeedPage}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}

export default Feed;