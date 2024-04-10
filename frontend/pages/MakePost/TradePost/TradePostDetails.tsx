import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthNavigationProp } from '../../../types/navigationTypes';

import Icon from 'react-native-vector-icons/MaterialIcons';

const TradePostDetails: React.FC = () => {
    const navigation = useNavigation<AuthNavigationProp>();

    return (
        <View>

            <View style={styles.actionContainer}>
                <Icon name="navigate-before" style={styles.navigateBefore} onPress={() => navigation.goBack()} />
                <TouchableOpacity style={styles.postButton}>
                    <Text style={styles.postButtonText}>Post</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.detailsContainer}>
                <View style={styles.statsContainer}>
                    <View style={styles.buySellContainer}>
                        <Text style={styles.buySellText}>Sell</Text>
                        <Text style={styles.buySellAmountText}>$170.55</Text>
                    </View>
                    <View style={styles.allTimeContainer}>
                        <Text style={styles.allTimeText}>All Time</Text>
                        <View style={styles.allTimeAmountContainer}>
                            <Icon name="south" style={styles.allTimeDownArrow} />
                            <Text style={styles.allTimeDownAmountText}>7%</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.descriptionContainer}>
                    <TextInput style={styles.descriptionTitleText}>Check out my Apple trade</TextInput>
                    <TextInput style={styles.descriptionText}>Description</TextInput>
                </View>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    navigateBefore: {
        fontSize: 25,
        opacity: 0.25,
        color: '#000000'
    },
    actionContainer: {
        position: 'absolute',
        top: 82,
        left: 23,
        width: 346,
        height: 37,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    postButton: {
        width: 71,
        height: 37,
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#00000014',
        backgroundColor: '#000000',
        justifyContent: 'center',
        alignItems: 'center'
    },
    postButtonText: {
        fontSize: 14,
        lineHeight: 16.94, 
        fontWeight: "500",
        fontFamily: 'Inter',
        color: '#FFFFFF', 
    },
    detailsContainer: {
        position: 'absolute',
        top: 328,
        left: 24,
        width: 327,
        height: 164,
        gap: 50,
        justifyContent: 'center',
    },
    statsContainer: {
        width: 181.21,
        height: 52,
        gap: 25,
        flexDirection: 'row',
        alignItems: 'center'
    },
    buySellContainer: {
        minWidth: 94,
        height: 52,
        gap: 5
    },
    buySellText: {
        fontSize: 13,
        lineHeight: 15.51,
        letterSpacing: -0.03, 
        fontWeight: "500",
        fontFamily: 'SF Pro Text',
        color: '#A5A5A5'
    },
    buySellAmountText: {
        fontSize: 26,
        lineHeight: 31.03,
        letterSpacing: -0.01,
        fontWeight: "500",
        fontFamily: 'SF Pro Display',
        color: '#666666'
    },
    allTimeContainer: {
        width: 62.21,
        height: 52,
        gap: 5
    },
    allTimeAmountContainer: {
        minWidth: 62.21,
        height: 31,
        flexDirection: 'row',
        alignItems: 'center'
    },
    allTimeText: {
        fontSize: 13,
        lineHeight: 15.51,
        letterSpacing: -0.03, 
        fontWeight: "500",
        fontFamily: 'SF Pro Text',
        color: '#A5A5A5'
    },
    allTimeDownArrow: {
        fontSize: 26,
        color: '#FF2B51'
    },
    allTimeDownAmountText: {
        fontSize: 26,
        lineHeight: 31.03,
        letterSpacing: -0.01,
        fontWeight: "500",
        fontFamily: 'SF Pro Display',
        color: '#FF2B51',
    },
    allTimeUpArrow: {
        fontSize: 26,
        color: '#02AD98'
    },
    allTimeUpAmountText: {
        fontSize: 26,
        lineHeight: 31.03,
        letterSpacing: -0.01,
        fontWeight: "500",
        fontFamily: 'SF Pro Display',
        color: '#02AD98',
    },
    descriptionContainer: {
        width: 327,
        height: 62,
        gap: 25
    },
    descriptionTitleText: {
        fontSize: 22,
        lineHeight: 26.25,
        letterSpacing: -0.01,
        fontWeight: "500",
        fontFamily: 'SF Pro Display',
        color: '#333333'
    },
    descriptionText: {
        fontSize: 16,
        lineHeight: 19.09,
        letterSpacing: -0.02,
        fontWeight: "400",
        fontFamily: 'SF Pro Text',
        color: '#666666'
    }
});  

export default TradePostDetails;