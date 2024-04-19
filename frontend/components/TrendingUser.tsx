// eslint-disable-next-line @typescript-eslint/ban-ts-comment
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { Trending } from '../types/types';
import { AntDesign } from '@expo/vector-icons';
import { OutsideProfileNavProp } from '../types/navigationTypes';
import { useNavigation } from '@react-navigation/native';

type TrendingUserProps = {
trending: Trending;
index: number,
}

const TrendingUser: React.FC<TrendingUserProps> = ({ trending, index }: TrendingUserProps) => {
    console.log(trending);
    const navigation = useNavigation<OutsideProfileNavProp>();
    const handlePress = () => {
        navigation.navigate('Profile', 
        {screen: "FollowerProfile", params: { user: trending.trending_user_reference}
        });
    };
    
    return (
        <TouchableOpacity style={styles.container} onPress={handlePress}>
            {/* Column for image */}
            <Text style={styles.rank}>{index + 1}</Text>
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
                </View>
            </View>


            <View style={[styles.column, styles.followersColumn]}>
                {
                    trending.day_gain_pct > 0 ?
                    (
                        <AntDesign name="arrowup" size={18} color="#02AD98" />
                    ) :
                    (
                        <AntDesign name="arrowdown" size={18} color="#FF2B51" />
                    )
                }
                {/* {
                    trending.day_gain_pct > 0 ?
                    (
                        <FontAwesome name="arrow-trend-up" size={20} color="black"/>
                    ) : (
                        <FontAwesome name="arrow-trend-down" size={20} color="black"/>
                    )
                } */}
                <Text style={trending.day_gain_pct > 0 ? styles.followersText : styles.downFollText}>
                    {Math.abs(trending.day_gain_pct)}%
                </Text>
            </View>
        </TouchableOpacity>
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
    rank: {
        fontSize: 18,
        marginRight: 15
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
    followersText: {
        alignSelf: 'flex-end',
        color: '#02AD98',
        fontSize: 12,
    },
    downFollText: {
        alignSelf: 'flex-end',
        color: '#FF2B51',
        fontSize: 12,
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
