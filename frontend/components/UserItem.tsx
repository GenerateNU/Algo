import { View, Text } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed';
import { User } from '../types/types';

interface UserItemProps {
  user: User;
}

const UserItem = ({ user }: UserItemProps) => {
  return (
    <View className='flex flex-row items-center p-4'>
      <View className='flex flex-row items-center flex-1 space-x-3'>
        <Icon type='material-community' name="account" size={30} color='white' backgroundColor="#D5D5D5" style={{
          padding: 2
        }} />
        <View className='flex flex-col flex-1 pr-3'>
          <Text className='font-medium' >{user.username}</Text>
        </View>
      </View>
    </View>
  )
}

export default UserItem