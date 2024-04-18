import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MakePostNavigationProp } from '../../../types/navigationTypes';

import Icon from 'react-native-vector-icons/MaterialIcons';
import SummaryOption from './UtilitySummaryAbstraction/SummaryOption';

const SharePortfolioSummary: React.FC = () => {
    const navigation = useNavigation<MakePostNavigationProp>();

    return (
        <View style={styles.background}>

            <Icon name="navigate-before" style={styles.navigateBefore} onPress={() => navigation.goBack()} />

            <View style={styles.contentContainer}>
                <Text style={styles.title}>Share Portfolio Summary</Text>
                <Text style={styles.description}>Choose the duration you want to share</Text>
            </View>
        
            <View style={styles.buttonsContainer}>

                <SummaryOption summaryType="One Month Summary" percent={-7} />

                <SummaryOption summaryType="Six Month Summary" percent={21} />

                <SummaryOption summaryType="One Year Summary" percent={7} />

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
        height: 71,
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
        top: 279,
        left: 24,
        width: 346,
        height: 330,
        gap: 15
    },
});  

export default SharePortfolioSummary;
