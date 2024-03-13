import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useSession } from '@clerk/clerk-expo';
import SignOut from '../components/SignOutButton';
import ProfileBanner from '../components/ProfileBanner';

const Profile = () => {
  const { session } = useSession();
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      console.log(`Profile Page | session token: ${session?.getToken()}`);
      if (session?.user.username === undefined) {
        /* Unsure why casting to never is required, issue to look into */
        navigation.navigate('Signin' as never);
      }
    });

    return unsubscribe;
  }, []);

  return (
    <View style={styles.container}>
      <ProfileBanner />
      <Text style={styles.text}>Hello {session?.user.username}!</Text>

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
