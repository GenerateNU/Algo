import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Button, FlatList, Image, Pressable } from 'react-native';
import { useSession } from '@clerk/clerk-expo';
import ProfileBanner from '../components/ProfileBanner';
import SubTabButton from '../components/SubTabButton';
import { Icon } from '@rneui/themed';
import ActivityItem from '../components/ActivityItem';
import { ProfileActivityData } from '../constants';
import ProfilePerformance from '../components/ProfilePerformance';
import SignOut from '../components/SignOutButton';
// import SettingsSvg from '../assets/SettingsIcon.svg';

const PROFILE_IMAGE_SIZE = 100;

const Profile = () => {
  const { session } = useSession();
  const navigation = useNavigation();
  const [isPortfolioSelected, setIsPortfolioSelected] = useState<boolean>(true);
  const [isActivitySelected, setIsActivitySelected] = useState<boolean>(false);

  const OnActivitySelected = () => {
    setIsPortfolioSelected(false);
    setIsActivitySelected(true);
  }

  const OnPortfolioSelected = () => {
    setIsPortfolioSelected(true);
    setIsActivitySelected(false);
  }

  useEffect(() => {
    // set the title of the page
    navigation.setOptions({
      headerShown: true,
      headerTitle: `@${session?.user.username}`,
      headerTitleAlign: 'center',
      headerRight: () => (
        <Icon type='material-community' name='cog' size={30} color='black' />
      ),
      headerLeft: () => (
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
          <SubTabButton title='Portfolio' selected={true} onPress={OnPortfolioSelected} />
          <SubTabButton title='Activity' selected={true} onPress={OnActivitySelected} />
        </View>

        {isPortfolioSelected && (
          <View className='flex flex-col'>
            <ProfilePerformance portfolioValue='+10000.99' />
          </View>
        )}

        {isActivitySelected && (
          <View className='flex flex-col'>
            <FlatList
              data={ProfileActivityData}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <ActivityItem
                  title={item.title}
                  description={item.description}
                  icon={item.icon} />
              )} />
          </View>
        )}
      </View>
      <SignOut />
    </ScrollView>
  );
};

export default Profile;
