import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

const SmallColorText = ({ amount }: { amount: number }) => {
    return (
        <View style={styles.percentContentContainer}>
            <Icon name={amount < 0 ? "south" : "north"} style={amount < 0 ? styles.buyDownArrow : styles.sellUpArrow} />
            <Text style={amount < 0 ? styles.buyDownPercent : styles.sellUpPercent}>{amount < 0 ? -amount : amount}%</Text>
        </View>
    );
};

const styles = StyleSheet.create({
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
    }
});  

export default SmallColorText;
