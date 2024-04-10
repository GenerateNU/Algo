import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthNavigationProp } from '../../../types/navigationTypes';

import Icon from 'react-native-vector-icons/MaterialIcons';

const TextBasedPost: React.FC = () => {
    const navigation = useNavigation<AuthNavigationProp>();

    return (
        <View>

            <View style={styles.actionContainer}>
                <Icon name="navigate-before" style={styles.navigateBefore} onPress={() => navigation.goBack()} />
                <TouchableOpacity style={styles.postButton}>
                    <Text style={styles.postButtonText}>Post</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.descriptionContainer}>
                <TextInput style={styles.descriptionTitleText}>Title</TextInput>
                <TextInput style={styles.descriptionText}>What's on your mind?</TextInput>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
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
    descriptionContainer: {
        position: 'absolute',
        top: 169,
        left: 25,
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

export default TextBasedPost;