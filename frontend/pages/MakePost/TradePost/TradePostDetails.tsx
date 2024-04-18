import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MakePostNavigationProp } from '../../../types/navigationTypes';

import Icon from 'react-native-vector-icons/MaterialIcons';
import LargeColorText from '../UtilityTextAbstractions/LargeColorText';

import { useSelector } from 'react-redux';
import { createTradePost } from '../../../services/post';
import { useSession } from '@clerk/clerk-expo';
import { RootState } from '../../../components/LayoutWrapper';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTitle, updateDescription } from '../../../reducers/makePost/makePostReducer';
import { finishPost } from '../../../reducers/onboarding/onboardingReducer';

const TradePostDetails: React.FC = () => {
    const navigation = useNavigation<MakePostNavigationProp>();

    const makePost = useSelector((state: RootState) => {
        return state.makePost;
    });

    const { session } = useSession();

    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const createPost = async () => {
        dispatch(updateTitle(title));
        dispatch(updateDescription(description));

        await createTradePost(
            //"user_2chL8dX6HdbBAuvu3DDM9f9NzKK",
            session?.user.id ?? '',
            makePost.percentData, // TODO: Fetch using financial API
            makePost.tickerSymbol, // TODO: Fetch using financial API
            title,
            description,
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

            <View style={styles.detailsContainer}>
                <View style={styles.statsContainer}>
                    <View style={styles.buySellContainer}>
                        <Text style={styles.buySellText}>Sell</Text>
                        <Text style={styles.buySellAmountText}>$170.55</Text>
                    </View>
                    <View style={styles.allTimeContainer}>
                        <Text style={styles.allTimeText}>All Time</Text>
                        <LargeColorText amount={makePost.percentData} />
                    </View>
                </View>

                <View style={styles.descriptionContainer}>
                    <TextInput
                        style={styles.descriptionTitleText}
                        value={title}
                        onChangeText={setTitle}
                        placeholder="Trade"
                    />
                    <TextInput
                        style={styles.descriptionText}
                        value={description}
                        onChangeText={setDescription}
                        placeholder="Check out this trade!"
                    />
                </View>
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