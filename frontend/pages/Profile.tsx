import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, Pressable, ScrollView, View } from 'react-native';
import { useSession } from '@clerk/clerk-expo';
import ProfileBanner from '../components/ProfileBanner';
import SubTabButton from '../components/SubTabButton';
import { Icon } from '@rneui/themed';
import ActivityItem from '../components/ActivityItem';
import { ProfileActivityData } from '../constants';
import ProfilePerformance from '../components/ProfilePerformance';
import SignOut from '../components/SignOutButton';
import { getPortoflio } from '../services/etrade';
import { ProfileRouteParams, UserPortfolio } from '../types/types';
import { ProfilePositions } from '../components/ProfilePositions';
// import SettingsSvg from '../assets/SettingsIcon.svg';



const Profile = () => {
  const { session } = useSession();
  const navigation = useNavigation();
  const [pageNumber, setPageNumber] = useState<number>(0);
  const [portfolio, setPortfolio] = useState<UserPortfolio>()
  const route = useRoute()
  const user = (route.params as ProfileRouteParams)?.user || session!.user!;

  const OnActivitySelected = () => {
    setPageNumber(1)
  }

  const OnPortfolioSelected = () => {
    setPageNumber(0)
  }

  useEffect(() => {
    // set the title of the page
    navigation.setOptions({
      headerShown: true,
      headerTitle: `@${user.username}`,
      headerTitleAlign: 'center',
      headerRight: () => (
        <Icon type='material-community' name='cog' size={30} color='black' style={{paddingRight: 10}} />
      ),
      headerLeft: () => (
        <Pressable onPress={() => navigation.goBack()}>
          <Icon type='material-community' name='chevron-left' size={30} color='black' style={{paddingLeft: 5}} />
        </Pressable>
      ),
    })

    return navigation.addListener('focus', () => {
      if (session?.user.username === undefined) {
        /* Unsure why casting to never is required, issue to look into */
        navigation.navigate('Signin' as never);
      }
    });
  }, []);

  useEffect(() => {
    getPortoflio(user.id).then(userPortfolio => {
      setPortfolio(userPortfolio)
    })
  }, []);

  return (
    <ScrollView className='bg-white'>
      <View className='flex flex-col space-y-2'>
        <ProfileBanner user={user}/>

        <View className='flex flex-row'>
          <SubTabButton title='Portfolio' selected={pageNumber == 0} onPress={OnPortfolioSelected} />
          <SubTabButton title='Activity' selected={pageNumber == 1} onPress={OnActivitySelected} />
        </View>

        <ScrollView
          horizontal={true} className='flex flex-row h-screen' pagingEnabled={true}
          showsHorizontalScrollIndicator={true}
          onMomentumScrollEnd={(event) => {
            const offset = event.nativeEvent.contentOffset.x;
            const page = Math.round(offset / 375);
            console.log(`Page number: ${page}`);
            setPageNumber(page);
          }}
        >
            {pageNumber === 0 && (
              <View className='flex flex-col w-screen'>
                <ProfilePerformance portfolioValue={portfolio?.total_gain_pct || 0} />
                <ProfilePositions positions={portfolio?.positions}/>
              </View>
            )}
          <View className='flex flex-col w-screen'>
            {pageNumber == 1 && (
              <FlatList
                data={ProfileActivityData}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <ActivityItem
                    title={item.title}
                    description={item.description}
                    icon={item.icon} />
                )} />
            )}
          </View>
        </ScrollView>

      </View>
      <SignOut />
    </ScrollView>
  );
};

export default Profile;