import { FlatList, Pressable } from 'react-native';
import React, { useEffect } from 'react';
import { Icon } from '@rneui/themed';
import { useNavigation, useRoute } from '@react-navigation/native';
import { FollowerRouteParams, User } from '../types/types';
import UserItem from '../components/UserItem';
import { AuthNavigationProp } from '../types/navigationTypes';

const Followers = () => {
  const navigation = useNavigation<AuthNavigationProp>();
  const route = useRoute();
  const users = (route.params as FollowerRouteParams)?.users;

  useEffect(() => {
    // set the title of the page
    navigation.setOptions({
      headerShown: true,
      headerTitle: 'Followers',
      headerTitleAlign: 'center',
      headerLeft: () => (
        <Pressable onPress={() => navigation.goBack()}>
          <Icon type="material-community" name="chevron-left" size={30} color="black" style={{ paddingLeft: 5 }} />
        </Pressable>
      ),
    });
  }, []);

  const navigateToProfile = (user: User) => {
    navigation.navigate('FollowerProfile', { user: user })
  };

  return (
    <FlatList
      data={users}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Pressable onPress={() => navigateToProfile(item)}>
          <UserItem user={item} />
        </Pressable>
      )} />
  );
};

export default Followers;