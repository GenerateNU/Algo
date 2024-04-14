import React from "react";
import { StyleSheet, Text, View } from "react-native";

const FeedTopBar: React.FC = () => {
    return (
        <View style={styles.top_bar}>
          <Text style={styles.explore}>Explore</Text>
          <Text style={styles.follow}>Following</Text>
        </View>
    )
}

export default FeedTopBar;

const styles = StyleSheet.create({
    top_bar: {
        width: "100%",
        marginTop: "10%",
        backgroundColor: '#F7F7F7',
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