// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import { Leader } from '../types/types';
import { Ionicons } from '@expo/vector-icons';

type PopularUserProps = {
leader: Leader;
index: number
}

const PopularUser: React.FC<PopularUserProps> = ({ leader, index }: PopularUserProps) => {
    return (
        <View style={styles.container}>
            {/* Column for image */}
            <Text style={styles.rank}>{index + 1}</Text>
            <View style={[styles.column, styles.imageColumn]}>
                <View style={styles.imageContainer}>
                    <Image
                        source={{uri: leader.leader_user.image_url}}
                        style={styles.image}
                    />
                </View>
            </View>

            <View style={[styles.column, styles.textColumn]}>
                <View style={styles.textContainer}>
                    <Text style={styles.nameText}>
                        {leader.leader_user.first_name} {leader.leader_user.last_name}
                    </Text>
                </View>
            </View>


            <View style={[styles.column, styles.followersColumn]}>
                {/* <Image
                    source={require("../assets/followers_logo.png")}
                    style={styles.followersLogo}
                /> */}
                <Ionicons name="person-outline" size={18} color="#333333" />
                <Text style={styles.followersText}>
                   {leader.follower_count}
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        borderBottomColor: "#adc4ba",
        borderBottomWidth: 1,
        paddingVertical: 15,
    },
    column: {
        flex: 1,
    },
    imageColumn: {
        flex: 0.17,
    },
    textColumn: {
        marginRight: 12,
        justifyContent: "center"
    },
    followersColumn: {
        flex: 0.18,
        flexDirection: 'row', // Check
        justifyContent: 'flex-end', //check
        alignItems: "center"
    },
    imageContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        overflow: 'hidden',
    },
    image: {
        width: "100%",
        height: "100%",
    },
    textContainer: {
        marginLeft: 18
    },
    actionText: {
        fontSize: 8,
        color: '#787878',
    },
    nameText: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 1,
        color: '#333333',
    },
    rank: {
        fontSize: 18,
        marginRight: 15
    },
    followersText: {
        color: '#333333',
        fontSize: 18
    },
    followersLogo: {
        width: 40,
        height: 40,
        marginRight: 5,
    }
});

export default PopularUser;
