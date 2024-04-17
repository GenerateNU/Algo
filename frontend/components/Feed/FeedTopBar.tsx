import React from "react";
import { StyleSheet, Text, View } from "react-native";

type FeedBarProps  = {
    tab: string,
    setTab: React.Dispatch<React.SetStateAction<string>>,
}

const FeedTopBar: React.FC<FeedBarProps> = ({tab, setTab}) => {
    return (
        <View style={styles.top_bar}>
          <Text 
            style={tab == 'Explore' ? styles.explore : styles.follow}
            onPress={() => setTab('Explore')}>
                Explore
            </Text>
          <Text 
            style={tab == 'Following' ? styles.explore : styles.follow}
            onPress={() => setTab('Following')}>
                Following
            </Text>
        </View>
    )
}

export default FeedTopBar;

const styles = StyleSheet.create({
    top_bar: {
        width: "100%",
        flex: 1,
        marginTop: "15%",
        backgroundColor: '#FFFFFF',
        flexDirection: "row",
        // backgroundRepeat: 'no-repeat',
        // backgroundPosition: 'center center',
        // backgroundSize: 'cover',
        padding: 20,
        overflow: 'hidden',
        zIndex: 2,
    },
    explore: {
        width: "50%",
        color: 'rgba(0,0,0,1)',
        fontFamily: 'Circular Std',
        fontWeight: '500',
        fontSize: 17,
        opacity: 1,
        textAlign: 'center',
        borderBottomColor: 'rgba(0,0,0,1)',
        borderBottomWidth: 1,
    },
    follow: {
        width: "50%",
        color: 'rgba(102,102,102,1)',
        fontFamily: 'Circular Std',
        fontWeight: '500',
        fontSize: 17,
        opacity: 1,
        textAlign: 'center',
    },
})