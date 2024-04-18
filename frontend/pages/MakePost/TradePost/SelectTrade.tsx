import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { MakePostNavigationProp } from '../../../types/navigationTypes';
import ColorTrade from './UtilityTradeAbstraction/ColorTrade';

const SelectTrade: React.FC = () => {
    const navigation = useNavigation<MakePostNavigationProp>();

    return (
        <View style={styles.background}>

            <Icon name="navigate-before" style={styles.navigateBefore} onPress={() => navigation.goBack()} />

            <View style={styles.contentContainer}>
                <Text style={styles.title}>Select a Trade</Text>
                <Text style={styles.description}>Choose a recent trade you want to share</Text>
            </View>
        
            <View style={styles.buttonsContainer}>

                <ColorTrade action="BUY" ticker="AAPL" amount={150.55} percent={-17} />

                <ColorTrade action="SELL" ticker="NVDA" amount={170.55} percent={17} />

                <ColorTrade action="SELL" ticker="AAPL" amount={170.55} percent={21} />

                <ColorTrade action="SELL" ticker="TSLA" amount={170.55} percent={4} />

                <ColorTrade action="BUY" ticker="AAPL" amount={150.55} percent={-11} />

            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#FFFFFF',
        flex: 1,
    },
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