import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useClerk } from '@clerk/clerk-react';
import SignOut from '../components/SignOutButton';

const Profile = () => {
  const { user } = useClerk();
  const userSignedIn = user !== null;
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // User has navigated to the page
      if (!userSignedIn) {
        /* Unsure why casting to never is required, issue to look into */
        navigation.navigate('Signin' as never);
      }
    });

    return unsubscribe;
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello {user?.username}!</Text>
      <SignOut />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    textAlign: 'center',
  },
});

export default Profile;
