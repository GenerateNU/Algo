import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Button, FlatList, Image, Pressable } from 'react-native';
import { useSession } from '@clerk/clerk-expo';
import ProfileBanner from '../components/ProfileBanner';
import SubTabButton from '../components/SubTabButton';
import { Icon } from '@rneui/themed';
import SignOut from '../components/SignOutButton';
// import SettingsSvg from '../assets/SettingsIcon.svg';

const PROFILE_IMAGE_SIZE = 100;

const Profile = () => {
  const { session } = useSession();
  const navigation = useNavigation();
  const [isPortfolioSelected, setIsPortfolioSelected] = useState<boolean>(true);
  const [isActivitySelected, setIsActivitySelected] = useState<boolean>(false);
  const SettingsSvg = require('../assets/SettingsIcon.svg');

  const Data = [
    {
      id: 1,
      title: 'Activity 1',
    },
    {
      id: 2,
      title: 'Activity 2',
    },
    {
      id: 3,
      title: 'Activity 3',
    },
    {
      id: 4,
      title: 'Activity 4',
    },
    {
      id: 5,
      title: 'Activity 5',
    }
  ];

  useEffect(() => {
    // set the title of the page
    navigation.setOptions({
      headerShown: true,
      headerTitle: '@username',
      headerTitleAlign: 'center',
      headerRight: () => (
        // a gear icon
        <Icon type='material-community' name='cog' size={30} color='black' />
      ),
      headerLeft: () => (
        // a back button
        <Pressable onPress={() => navigation.goBack()}>
        <Icon type='material-community' name='chevron-left' size={30} color='black' />
        </Pressable>
      ),
    })

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
    <ScrollView className='bg-white'>
      <View className='flex flex-col space-y-2'>
        <ProfileBanner />

        <View className='flex flex-row'>
          <SubTabButton title='Portfolio' selected={isPortfolioSelected} onPress={() => {
          }} />
          <SubTabButton title='Activity' selected={isActivitySelected} onPress={() => {
          }} />
        </View>

        <View>
        <FlatList
          data={Data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View>
              <Text>{item.title}</Text>
            </View>
          )}
        />
        </View>
        <SignOut />
      </View>
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
  v124_1304: {
    margin: 0,
    position: 'absolute',
    top: 9,
    right: 10,
    overflow: 'hidden',
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
