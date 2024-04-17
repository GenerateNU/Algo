import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MakePostNavigationProp } from '../../../../types/navigationTypes';

import SmallColorText from '../../UtilityTextAbstractions/SmallColorText';

import { useDispatch } from 'react-redux';
import { updatePercentData, updateSummaryType } from '../../../../reducers/makePost/makePostReducer';

const SummaryOption = ({ summaryType, percent }: { summaryType: string, percent: number }) => {
    const navigation = useNavigation<MakePostNavigationProp>();

    const dispatch = useDispatch();

    const summary = () => {
        dispatch(updateSummaryType(summaryType));
        dispatch(updatePercentData(percent));
        navigation.navigate('PortfolioSummary');
    }

    return (
        <TouchableOpacity style={styles.button} onPress={summary}>
            <View style={styles.buttonContentContainer}>
                <Text style={styles.buttonTitle}>{summaryType}</Text>
            </View>
            <SmallColorText amount={percent} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
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
});

export default SummaryOption;