import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthNavigationProp } from '../../../types/navigationTypes';

import Icon from 'react-native-vector-icons/MaterialIcons';

const SelectTrade: React.FC = () => {
    const navigation = useNavigation<AuthNavigationProp>();

    return (
        <View>

            <Icon name="navigate-before" style={styles.navigateBefore} onPress={() => navigation.goBack()} />

            <View style={styles.contentContainer}>
                <Text style={styles.title}>Select a Trade</Text>
                <Text style={styles.description}>Choose a recent trade you want to share</Text>
            </View>
        
            <View style={styles.buttonsContainer}>

                <TouchableOpacity style={styles.buy}>
                    <View style={styles.buttonContentContainer}>
                        <Text style={styles.buyDescription}>BUY</Text>
                        <Text style={styles.symbolDescription}>AAPL</Text>
                        <Text style={styles.priceDescription}>@ 150.55</Text>
                    </View>
                    <View style={styles.percentContentContainer}>
                        <Icon name="south" style={styles.buyDownArrow} />
                        <Text style={styles.buyDownPercent}>17%</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.sell}>
                    <View style={styles.buttonContentContainer}>
                        <Text style={styles.sellDescription}>SELL</Text>
                        <Text style={styles.symbolDescription}>NVDA</Text>
                        <Text style={styles.priceDescription}>@ 170.55</Text>
                    </View>
                    <View style={styles.percentContentContainer}>
                        <Icon name="north" style={styles.sellUpArrow} />
                        <Text style={styles.sellUpPercent}>17%</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.sell}>
                    <View style={styles.buttonContentContainer}>
                        <Text style={styles.sellDescription}>SELL</Text>
                        <Text style={styles.symbolDescription}>AAPL</Text>
                        <Text style={styles.priceDescription}>@ 170.55</Text>
                    </View>
                    <View style={styles.percentContentContainer}>
                        <Icon name="north" style={styles.sellUpArrow} />
                        <Text style={styles.sellUpPercent}>21%</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.sell}>
                    <View style={styles.buttonContentContainer}>
                        <Text style={styles.sellDescription}>SELL</Text>
                        <Text style={styles.symbolDescription}>TSLA</Text>
                        <Text style={styles.priceDescription}>@ 170.55</Text>
                    </View>
                    <View style={styles.percentContentContainer}>
                        <Icon name="north" style={styles.sellUpArrow} />
                        <Text style={styles.sellUpPercent}>4%</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buy}>
                    <View style={styles.buttonContentContainer}>
                        <Text style={styles.buyDescription}>BUY</Text>
                        <Text style={styles.symbolDescription}>AAPL</Text>
                        <Text style={styles.priceDescription}>@ 150.55</Text>
                    </View>
                    <View style={styles.percentContentContainer}>
                        <Icon name="south" style={styles.buyDownArrow} />
                        <Text style={styles.buyDownPercent}>11%</Text>
                    </View>
                </TouchableOpacity>

            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    navigateBefore: {
        fontSize: 25,
        opacity: 0.25,
        position: 'absolute',
        top: 83,
        left: 24,
        color: '#000000'
    },
    contentContainer: {
        position: 'absolute',
        top: 158,
        left: 24,
        width: 327,
        height: 52,
        gap: 15,
        justifyContent: 'center',
    },
    title: {
        fontSize: 22,
        lineHeight: 26.25,
        letterSpacing: -0.01, 
        fontWeight: "500",
        fontFamily: 'SF Pro Display',
        color: '#000000', 
    },
    description: {
        fontSize: 16,
        lineHeight: 19.09,
        letterSpacing: -0.02,
        fontWeight: "400",
        fontFamily: 'SF Pro Text', 
        color: '#666666', 
    },
    buttonsContainer: {
        position: 'absolute',
        top: 260,
        left: 24,
        width: 346,
        height: 435,
        gap: 15
    },
    buttonContentContainer: {
        minWidth: 150,
        height: 17,
        gap: 3, // Added to create space
        flexDirection: 'row',
        alignItems: 'center'
    },
    buyDescription: {
        fontSize: 16,
        lineHeight: 19.09,
        letterSpacing: -0.02,
        fontWeight: "500",
        fontFamily: 'SF Pro Text',
        color: '#FF2B51', 
    },
    sellDescription: {
        fontSize: 16,
        lineHeight: 19.09,
        letterSpacing: -0.02,
        fontWeight: "500",
        fontFamily: 'SF Pro Text',
        color: '#02AD98', 
    },
    symbolDescription: {
        fontSize: 16,
        lineHeight: 19.09,
        letterSpacing: -0.02,
        fontWeight: "700",
        fontFamily: 'SF Pro Text',
        color: '#121212', 
    },
    priceDescription: {
        fontSize: 16,
        lineHeight: 19.09,
        letterSpacing: -0.02,
        fontWeight: "500",
        fontFamily: 'SF Pro Text',
        color: '#121212', 
    },
    percentContentContainer: {
        width: 51.14,
        height: 24,
        flexDirection: 'row',
        alignItems: 'center'
    },
    buyDownArrow: {
        fontSize: 17,
        color: '#FF2B51'
    },
    buyDownPercent: {
        fontSize: 17,
        lineHeight: 24,
        fontWeight: "500",
        fontFamily: 'SF Pro',
        color: '#FF2B51',
    },
    sellUpArrow: {
        fontSize: 17,
        color: '#02AD98'
    },
    sellUpPercent: {
        fontSize: 17,
        lineHeight: 24,
        fontWeight: "500",
        fontFamily: 'SF Pro',
        color: '#02AD98',
    },
    buy: {
        width: 346,
        height: 75,
        paddingVertical: 22,
        paddingHorizontal: 20,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#FF385C0F',
        backgroundColor: '#FF2B511A',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    sell: {
        width: 346,
        height: 75,
        paddingVertical: 22,
        paddingHorizontal: 20,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#FF385C0F',
        backgroundColor: '#02AD9814',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    }
});  

export default SelectTrade;