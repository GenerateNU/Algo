import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthNavigationProp } from '../../../types/navigationTypes';

import Icon from 'react-native-vector-icons/MaterialIcons';
import SmallColorText from '../UtilityTextAbstractions/SmallColorText';

const SharePortfolioSummary: React.FC = () => {
    const navigation = useNavigation<AuthNavigationProp>();

    return (
        <View>

            <Icon name="navigate-before" style={styles.navigateBefore} onPress={() => navigation.goBack()} />

            <View style={styles.contentContainer}>
                <Text style={styles.title}>Share Portfolio Summary</Text>
                <Text style={styles.description}>Choose the duration you want to share</Text>
            </View>
        
            <View style={styles.buttonsContainer}>

                <TouchableOpacity style={styles.button}>
                    <View style={styles.buttonContentContainer}>
                        <Text style={styles.buttonTitle}>One Month Summary</Text>
                    </View>
                    <SmallColorText amount={-7} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <View style={styles.buttonContentContainer}>
                        <Text style={styles.buttonTitle}>Six Month Summary</Text>
                    </View>
                    <SmallColorText amount={21} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <View style={styles.buttonContentContainer}>
                        <Text style={styles.buttonTitle}>One Year Summary</Text>
                    </View>
                    <SmallColorText amount={7} />
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
    buttonContentContainer: {
        width: 260, // Increased to fit description
        height: 41,
        gap: 6,
        flexDirection: 'row',
        alignItems: 'center'
    },
    buttonTitle: {
        fontSize: 16,
        lineHeight: 19.09,
        letterSpacing: -0.03,
        fontWeight: "500",
        fontFamily: 'SF Pro Text',
        color: '#333333',
    },
    button: {
        width: 346,
        height: 100,
        paddingVertical: 22,
        paddingHorizontal: 19,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#00000008',
        backgroundColor: '#FDFDFD',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
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

export default SharePortfolioSummary;
