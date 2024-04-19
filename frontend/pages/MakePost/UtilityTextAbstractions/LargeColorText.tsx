import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

const LargeColorText = ({ amount }: { amount: number }) => {
    return (
        <View style={styles.allTimeAmountContainer}>
            <Icon name={amount < 0 ? "south" : "north"} style={amount < 0 ? styles.allTimeDownArrow : styles.allTimeUpArrow} />
            <Text style={amount < 0 ? styles.allTimeDownAmountText : styles.allTimeUpAmountText}>{amount < 0 ? -amount : amount}%</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    allTimeAmountContainer: {
        minWidth: 62.21,
        height: 31,
        flexDirection: 'row',
        alignItems: 'center'
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
});  

export default LargeColorText;