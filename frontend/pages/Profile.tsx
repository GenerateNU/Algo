import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { useSession } from '@clerk/clerk-expo';
import SignOut from '../components/SignOutButton';

const PROFILE_IMAGE_SIZE = 100;

const Profile = () => {
  const { session } = useSession();
  const navigation = useNavigation();

  useEffect(() => {
    // set the title of the page
    navigation.setOptions({ title: 'Profile' });

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
    <ScrollView style={{ paddingHorizontal: '0%' }} >
        <View style={{ display: "flex", flexDirection: "column", paddingHorizontal: '3%' }}>
          <ProfileBanner />

          <View style={{ paddingVertical: 10 }}>
            <Text>Portfolio</Text>
            <View style={{
              display: "flex", flexDirection: "row", flexWrap: 'wrap', justifyContent: 'space-between', gap: 13
            }}>
            </View>
          </View>
        </View>
        <SignOut />
    </ScrollView>
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

const profileStyles = StyleSheet.create({
  profileImage: {
    maxWidth: PROFILE_IMAGE_SIZE,
    maxHeight: PROFILE_IMAGE_SIZE,
    width: 250,
    height: 250,
    borderRadius: 180,
    borderColor: "red",
    borderWidth: 2,
  },
  followButton: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "red",
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 5
  },
})


export default Profile;
