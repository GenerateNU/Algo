import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import FeedPage from '../../pages/FeedPage';
// import Follow from '../../pages/Follow';
import { AuthNavigationProp } from '../../types/navigationTypes';

type FeedBarProps = {
  tab: string;
  setTab: React.Dispatch<React.SetStateAction<string>>;
};

const FeedTopBar: React.FC<FeedBarProps> = ({ tab, setTab }) => {
  const navigation = useNavigation<AuthNavigationProp>();

  const handleButtonPress = () => {
    setTab('Explore')
    navigation.navigate('Feed');
  };

  const handleButtonPress2 = () => {
    setTab('Explore')
    navigation.navigate('Follow');
  };

  return (
    <View style={styles.top_bar}>
      <Text
        style={tab == 'Explore' ? styles.explore : styles.follow}
        onPress={handleButtonPress}>
        Explore
      </Text>
      <Text
        style={tab == 'Following' ? styles.explore : styles.follow}
        onPress={handleButtonPress2}>
        Following
      </Text>
    </View>
  );
};

export default FeedTopBar;

const styles = StyleSheet.create({
  top_bar: {
    width: '100%',
    flex: 1,
    marginTop: '15%',
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    // backgroundRepeat: 'no-repeat',
    // backgroundPosition: 'center center',
    // backgroundSize: 'cover',
    padding: 20,
    overflow: 'hidden',
    zIndex: 2,
  },
  explore: {
    width: '50%',
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
    width: '50%',
    color: 'rgba(102,102,102,1)',
    fontFamily: 'Circular Std',
    fontWeight: '500',
    fontSize: 17,
    opacity: 1,
    textAlign: 'center',
  },
});
