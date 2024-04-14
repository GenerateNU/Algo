import { FlatList, Pressable } from 'react-native';
import React, { useEffect } from 'react';
import { Icon } from '@rneui/themed';
import { useNavigation, useRoute } from '@react-navigation/native';
import { FollowerRouteParams } from '../types/types';
import UserItem from '../components/UserItem';

const Followers = () => {
    const navigation = useNavigation();
    const route = useRoute()
    const users = (route.params as FollowerRouteParams)?.users;
    const label = (route.params as FollowerRouteParams)?.label;
    console.log(users)
    console.log(label)
    useEffect(() => {
    // set the title of the page
    navigation.setOptions({
      headerShown: true,
      headerTitle: 'Followers',
      headerTitleAlign: 'center',
      headerRight: null,
      headerLeft: () => (
        <Pressable onPress={() => navigation.goBack()}>
          <Icon type='material-community' name='chevron-left' size={30} color='black' style={{paddingLeft: 5}} />
        </Pressable>
      ),
    })
  }, []);

  return (
    // <Text>Hello!</Text>
    <FlatList
    data={users}
    keyExtractor={(item) => item.email}
    renderItem={({ item }) => (
      <UserItem user={item} />
    )} />
  )
}

export default Followers