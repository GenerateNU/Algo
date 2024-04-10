import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, Pressable, ScrollView, Text, View } from 'react-native';
import { useSession } from '@clerk/clerk-expo';
import ProfileBanner from '../components/ProfileBanner';
import SubTabButton from '../components/SubTabButton';
import { Icon } from '@rneui/themed';
import ActivityItem from '../components/ActivityItem';
import { ProfileActivityData } from '../constants';
import ProfilePerformance from '../components/ProfilePerformance';
import SignOut from '../components/SignOutButton';
import { getPortoflio } from '../services/etrade';
import { UserPortfolio } from '../types/types';
import { DataTable } from 'react-native-paper';
import { prettifyMoney } from '../components/lib/utils';
// import SettingsSvg from '../assets/SettingsIcon.svg';

const Profile = () => {
  const { session } = useSession();
  const navigation = useNavigation();
  const [isPortfolioSelected, setIsPortfolioSelected] = useState<boolean>(true);
  const [isActivitySelected, setIsActivitySelected] = useState<boolean>(false);
  const [pageNumber, setPageNumber] = useState<number>(0);
  const [portfolio, setPortfolio] = useState<UserPortfolio>()

  const OnActivitySelected = () => {
    setIsPortfolioSelected(false);
    setIsActivitySelected(true);
    console.log(`Activity selected: ${isActivitySelected}`);
  }

  const OnPortfolioSelected = () => {
    setIsPortfolioSelected(true);
    setIsActivitySelected(false);
    console.log(`Portfolio selected: ${isPortfolioSelected}`);
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

    return navigation.addListener('focus', () => {
      console.log(`Profile Page | session token: ${session?.getToken()}`);
      if (session?.user.username === undefined) {
        /* Unsure why casting to never is required, issue to look into */
        navigation.navigate('Signin' as never);
      }
    });
  }, []);

  useEffect(() => {
    getPortoflio("user_2ceWSEk1tU7bByPHmtwsla94w7e").then(userPortfolio => {
      setPortfolio(userPortfolio)
    })
  }, []);

  return (
    <ScrollView className='bg-white'>
      <View className='flex flex-col space-y-2'>
        <ProfileBanner />

        <View className='flex flex-row'>
          <SubTabButton title='Portfolio' selected={true} onPress={OnPortfolioSelected} />
          <SubTabButton title='Activity' selected={true} onPress={OnActivitySelected} />
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
          <View className='flex flex-col w-screen'>
            {pageNumber === 0 && (
              <ProfilePerformance portfolioValue={portfolio?.total_gain_pct || 0} />
            )}
            <DataTable>
              <DataTable.Header>
                <DataTable.Title>Symbol</DataTable.Title>
                <DataTable.Title>Last Price</DataTable.Title>
                <DataTable.Title>Mkt Val / Qty</DataTable.Title>
                <DataTable.Title>Open P/L</DataTable.Title>
              </DataTable.Header>
              {portfolio && portfolio.positions.map((position, index) => (
                <DataTable.Row key={index}>
                  <DataTable.Cell>{position.ticker}</DataTable.Cell>
                  <DataTable.Cell>{prettifyMoney(position.cost)}</DataTable.Cell>
                  <DataTable.Cell>
                    <View className='flex flex-col'>
                      <Text>
                        {prettifyMoney(position.cost * position.quantity)}
                      </Text>
                      <Text>
                        {prettifyMoney(position.quantity)}
                      </Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell>
                    <View className='flex flex-col'>
                      <Text>
                        {prettifyMoney(position.total_gain)}
                      </Text>
                      <Text>
                        {position.total_gain_pct}%
                      </Text>
                    </View></DataTable.Cell>
                </DataTable.Row>
              ))}
            </DataTable>
          </View>
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