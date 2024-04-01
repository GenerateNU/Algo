// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import React from 'react'; //TODO: Check on this import with Leroy or Ania
import {Image, StyleSheet, Text, View} from 'react-native';
import { Leader } from '../types/types';

// Infinite scroll->Option for leaderboard


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
                <Text style={PopularUserStyles.nameText}>
                    {leader.leader_user.first_name} {leader.leader_user.last_name}
                </Text>
                <Text style={PopularUserStyles.actionText}>Recent: Recent actions will display{"\n"}
                    here</Text>
                <Text style={PopularUserStyles.followersText}>Followers: {leader.follower_count}</Text>
            </View>
        </View>
    )
}


const PopularUserStyles = StyleSheet.create({
    container: {
        marginVertical: 0,
        marginHorizontal: 0,
        height : "20%",
        flexDirection: 'row',
        alignItems: 'center',
    },
    followersText: {
        alignSelf: 'flex-end',
        color: '#787878',
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
        justifyContent: 'center',
    },
    actionText: {
        fontFamily: 'inter',
        fontSize: 8,
        color: '#787878',
    },
    nameText: {
        fontFamily: 'inter',
        fontWeight: 'bold',
        fontSize: 12,
        marginBottom: 1,
        color: '#787878',
    }
});

export default PopularUser;