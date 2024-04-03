// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import React from 'react'; //TODO: Check on this import with Leroy or Ania
import {Image, StyleSheet, Text, View} from 'react-native';
import { Leader } from '../types/types';

type PopularUserProps = {
leader: Leader;
}

const PopularUser: React.FC<PopularUserProps> = ({ leader }: PopularUserProps) => {
    return (
        <View style={styles.container}>
            {/* Column for image */}
            <View style={[styles.column, styles.imageColumn]}>
                <View style={styles.imageContainer}>
                    <Image
                        source={require("../assets/temp_pfp.png")}
                        style={styles.image}
                    />
                </View>
            </View>

            {/* Column for name and action text */}
            <View style={[styles.column, styles.textColumn]}>
                <View style={styles.textContainer}>
                    <Text style={styles.nameText}>
                        {leader.leader_user.first_name} {leader.leader_user.last_name}
                    </Text>
                    <Text style={styles.actionText}>
                        Recent: Recent actions will display{"\n"} here
                    </Text>
                </View>
            </View>

            {/* Column for follower text */}
            <View style={[styles.column, styles.followersColumn]}>
                <Image
                    source={require("../assets/followers_logo.png")}
                    style={styles.followersLogo}
                />
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
    },
    column: {
        flex: 1,
    },
    imageColumn: {
        flex: 0.17,
    },
    textColumn: {
        flex: 0.65,
    },
    followersColumn: {
        flex: 0.18,
        flexDirection: 'row', // Check
        justifyContent: 'flex-end', //check
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
        flex: 1,
    },
    actionText: {
        fontSize: 8,
        color: '#787878',
    },
    nameText: {
        fontWeight: 'bold',
        fontSize: 12,
        marginBottom: 1,
        color: '#787878',
    },
    followersText: {
        alignSelf: 'flex-end',
        color: '#787878',
    },
    followersLogo: {
        width: 20,
        height: 20,
        marginRight: 5,
    }
});

export default PopularUser;
