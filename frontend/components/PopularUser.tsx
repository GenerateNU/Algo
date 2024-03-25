import React, { useState } from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import { Leader } from '../types/types';


type PopularUserProps = {
    leader: Leader
}

const PopularUser : React.FC<PopularUserProps> = ({leader}:  PopularUserProps) => {
    return (
        <View style={PopularUserStyles.container}>
            <View style={PopularUserStyles.imageContainer}>
                <Image
                    source={require("../assets/temp_pfp.png")}
                    style={PopularUserStyles.image}
                />
            </View>
            <View style={PopularUserStyles.textContainer}>
                <Text>
                    {leader.leader_user.first_name} {leader.leader_user.last_name}
                </Text>
                <Text style={PopularUserStyles.followersText}>Followers: {leader.follower_count}</Text>
            </View>
        </View>
    )
}


const PopularUserStyles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: 'black',
        borderBottomWidth: 0.5,
        marginVertical: 0,
        marginHorizontal: 0,
        height : "20%",
        flexDirection: 'row', // Arrange children horizontally
        alignItems: 'center',
    },
    followersText: {
        alignSelf: 'flex-end',
    },
    imageContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        overflow: 'hidden',
        marginRight: 12,
        marginLeft: 4,
    },
    image: {
        width: "100%",
        height: "100%",
    },
    textContainer: {
        flex: 1,
    }

});

export default PopularUser;