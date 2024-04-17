// eslint-disable-next-line @typescript-eslint/ban-ts-comment
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import { Trending } from '../types/types';
import { TrendingUp, TrendingDown } from '@mui/icons-material';

type TrendingUserProps = {
trending: Trending;
}

const TrendingUser: React.FC<TrendingUserProps> = ({ trending }: TrendingUserProps) => {
    return (
        <View style={styles.container}>
            {/* Column for image */}
            <View style={[styles.column, styles.imageColumn]}>
                <View style={styles.imageContainer}>
                    <Image
                        source={{uri: trending.trending_user_reference.image_url}}
                        style={styles.image}
                    />
                </View>
            </View>

            <View style={[styles.column, styles.textColumn]}>
                <View style={styles.textContainer}>
                    <Text style={styles.nameText}>
                        {trending.trending_user_reference.first_name} {trending.trending_user_reference.last_name}
                    </Text>
                    <Text style={styles.actionText}>
                        Recent: Recent actions will display{"\n"} here
                    </Text>
                </View>
            </View>


            <View style={[styles.column, styles.followersColumn]}>
                {
                    trending.day_gain_pct > 0 ?
                    (
                        <TrendingUp sx={styles.followersLogo}/>
                    ) : (
                        <TrendingDown sx={styles.followersLogo}/>
                    )
                }
                <Text style={styles.followersText}>
                    {trending.day_gain_pct}%
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
        flexDirection: 'row', 
        justifyContent: 'flex-end', 
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
    },
    greenIcon: {
        width: 20,
        height: 20,
        marginRight: 5,
        color: 'green', // Adjust the color as needed
    },
    redIcon: {
        width: 20,
        height: 20,
        marginRight: 5,
        color: 'red', // Adjust the color as needed
    },
});

export default TrendingUser;
