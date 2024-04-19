import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MakePostNavigationProp } from '../../../../types/navigationTypes';

import SmallColorText from '../../UtilityTextAbstractions/SmallColorText';

import { useDispatch } from 'react-redux';
import { updatePercentData, updateTickerSymbol } from '../../../../reducers/makePost/makePostReducer';

const ColorTrade = ({ action, ticker, amount, percent }: { action: string, ticker: string, amount: number, percent: number }) => {
    const navigation = useNavigation<MakePostNavigationProp>();

    const dispatch = useDispatch();

    const nextStep = () => {
        dispatch(updateTickerSymbol(ticker));
        dispatch(updatePercentData(percent));

        navigation.navigate('TradePostDetails')
    }

    return (
        <TouchableOpacity style={percent < 0 ? styles.buy : styles.sell} onPress={nextStep}>
            <View style={styles.buttonContentContainer}>
                <Text style={action == "BUY" ? styles.buyDescription : styles.sellDescription}>{action}</Text>
                <Text style={styles.symbolDescription}>{ticker}</Text>
                <Text style={styles.priceDescription}>@ {amount}</Text>
            </View>
            <SmallColorText amount={percent} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
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

export default ColorTrade;