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
    width: 393,
    height: 65,
    backgroundColor: 'white',
    // backgroundRepeat: 'no-repeat',
    // backgroundPosition: 'center center',
    // backgroundSize: 'cover',
    padding: 20,
    margin: 100,
    position: 'absolute',
    top: -49,
    left: -100,
    overflow: 'hidden',
    zIndex: 2,
  },
  explore: {
    width: 67,
    color: 'rgba(0,0,0,1)',
    position: 'absolute',
    top: 25,
    left: 55,
    // top: 30,
    // left: 55,
    // fontFamily: 'Circular Std',
    fontWeight: '500',
    fontSize: 17,
    opacity: 1,
    textAlign: 'center',
  },
  follow: {
    width: 83,
    color: 'rgba(102,102,102,1)',
    position: 'absolute',
    top: 25,
    right: 75,
    // top: 30,
    // right: 65,
    // fontFamily: 'Circular Std',
    fontWeight: '500',
    fontSize: 17,
    opacity: 1,
    textAlign: 'center',
  },
})
