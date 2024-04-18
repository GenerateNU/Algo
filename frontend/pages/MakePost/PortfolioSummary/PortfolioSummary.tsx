import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MakePostNavigationProp } from '../../../types/navigationTypes';

import Icon from 'react-native-vector-icons/MaterialIcons';
import LargeColorText from '../UtilityTextAbstractions/LargeColorText';

import { createPortfolioPost } from '../../../services/post';
import { useSelector } from 'react-redux';
import { useSession } from '@clerk/clerk-expo';
import { RootState } from '../../../components/LayoutWrapper';
import { useDispatch } from 'react-redux';
import { finishPost } from '../../../reducers/onboarding/onboardingReducer';

const PortfolioSummary: React.FC = () => {
    const navigation = useNavigation<MakePostNavigationProp>();

    const makePost = useSelector((state: RootState) => {
        return state.makePost;
    });

    const dispatch = useDispatch();

    const { session } = useSession();

    const createPost = async () => {
        await createPortfolioPost(
            //"user_2chL8dX6HdbBAuvu3DDM9f9NzKK",
            session?.user.id ?? '',
            makePost.percentData, // TODO: Fetch using financial API
            makePost.summaryType, // TODO: Fetch using financial API
        ).then(() => {
            dispatch(finishPost());
        });
    }

    return (
        <View style={styles.background}>

            <View style={styles.actionContainer}>
                <Icon name="navigate-before" style={styles.navigateBefore} onPress={() => navigation.goBack()} />
                <TouchableOpacity style={styles.postButton} onPress={createPost}>
                    <Text style={styles.postButtonText}>Post</Text>
                </TouchableOpacity>
            </View>

            <Image source={makePost.percentData < 0 ? require('./TradeGraphs/BadTrade.png') : require('./TradeGraphs/GoodTrade.png')} style={styles.lineGraphContainer} />

            <View style={styles.timelineContainer}>
                <View style={styles.timelineStartContainer}>
                    <Text style={styles.timelineStartText}>OCT 14</Text>
                </View>
                <View style={styles.timelineEndContainer}>
                    <Text style={styles.timelineEndText}>NOW</Text>
                </View>
            </View>
            <View style={styles.statsContainer}>
                <View style={styles.buySellContainer}>
                    <Text style={styles.buySellText}>Performance</Text>
                    <LargeColorText amount={makePost.percentData} />
                </View>
                <View style={styles.allTimeContainer}>
                    <Text style={styles.allTimeText}>Yield Cost Ratio</Text>
                    <Text style={styles.buySellAmountText}>4.6%</Text>
                </View>
                <View style={styles.balanceContainer}>
                    <Text style={styles.buySellText}>Balance</Text>
                    <Text style={styles.buySellAmountText}>$1900.3</Text>
                </View>
            </View>

            <Image source={require('./TradeGraphs/PieChart.png')} style={styles.pieChartContainer} />

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
    lineGraphContainer: {
        position: 'absolute',
        top: 190
    },
    timelineContainer: {
        position: 'absolute',
        top: 303,
        left: 25,
        width: 343,
        height: 26,
        gap: 226,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
    timelineStartContainer: {
        width: 65,
        height: 26,
        gap: 10,
        borderRadius: 5,
        paddingHorizontal: 5,
        paddingVertical: 5,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
    timelineStartText: {
        fontSize: 13,
        lineHeight: 15.51,
        letterSpacing: -0.03,
        fontWeight: "500",
        fontFamily: 'SF Pro Text',
        color: '#A5A5A5'
    },
    timelineEndContainer: {
        width: 65,
        height: 26,
        gap: 10,
        borderRadius: 5,
        paddingHorizontal: 5,
        paddingVertical: 5,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
    timelineEndText: {
        fontSize: 13,
        lineHeight: 15.51,
        letterSpacing: -0.03,
        fontWeight: "500",
        fontFamily: 'SF Pro Text',
        color: '#A5A5A5'
    },
    statsContainer: {
        position: 'absolute',
        top: 388,
        left: 24,
        width: 318,
        height: 52,
        gap: 25,
        flexDirection: 'row',
        alignItems: 'center'
    },
    buySellContainer: {
        minWidth: 77,
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
        minWidth: 94,
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
    balanceContainer: {
        minWidth: 97,
        height: 52,
        gap: 5
    },
    pieChartContainer: {
        position: 'absolute',
        left: 24,
        top: 485
    },
});  

export default PortfolioSummary;