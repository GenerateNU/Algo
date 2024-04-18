import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MakePostNavigationProp } from '../../types/navigationTypes';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch } from 'react-redux';
import { finishPost } from '../../reducers/onboarding/onboardingReducer';

const SharePost: React.FC = () => {
    const navigation = useNavigation<MakePostNavigationProp>();

    const dispatch = useDispatch();

    const cancelMakePost = () => {
        dispatch(finishPost());
    };

    return (
        <View style={styles.background}>

            <Icon name="navigate-before" style={styles.navigateBefore} onPress={cancelMakePost} />

            <View style={styles.contentContainer}>
                <Text style={styles.title}>Share a Post</Text>
                <Text style={styles.description}>Let people on Carbon know what you have been up to!</Text>
            </View>
        
            <View style={styles.buttonsContainer}>

                <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('SelectTrade') }}>
                    <View style={styles.buttonContentContainer}>
                        <Text style={styles.buttonTitle}>Trade Post</Text>
                        <Text style={styles.buttonDescription}>Share a recent trade you made</Text>
                    </View>
                    <Icon name="navigate-next" style={styles.navigateNext} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('SharePortfolioSummary') }}>
                    <View style={styles.buttonContentContainer}>
                        <Text style={styles.buttonTitle}>Portfolio Summary</Text>
                        <Text style={styles.buttonDescription}>Share a summary of your portfolio</Text>
                    </View>
                    <Icon name="navigate-next" style={styles.navigateNext} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('TextBasedPost') }}>
                    <View style={styles.buttonContentContainer}>
                        <Text style={styles.buttonTitle}>Text Based Post</Text>
                        <Text style={styles.buttonDescription}>Talk about what's on your mind</Text>
                    </View>
                    <Icon name="navigate-next" style={styles.navigateNext} />
                </TouchableOpacity>

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
    buttonContentContainer: {
        width: 260, // Increased to fit description
        height: 41,
        gap: 6,
    },
    buttonTitle: {
        fontSize: 16,
        lineHeight: 19.09,
        letterSpacing: -0.03,
        fontWeight: "500",
        fontFamily: 'SF Pro Text',
        color: '#333333',
    },
    buttonDescription: {
        fontSize: 13,
        lineHeight: 15.51,
        letterSpacing: -0.03,
        fontWeight: "500",
        fontFamily: 'SF Pro Text',
        color: '#666666', 
    },
    button: {
        width: 346,
        height: 100,
        paddingVertical: 22,
        paddingHorizontal: 19,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#00000014',
        backgroundColor: '#FDFDFD',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    navigateNext: {
        fontSize: 25,
        opacity: 0.25,
        color: '#000000'
    }
});  

export default SharePost;
