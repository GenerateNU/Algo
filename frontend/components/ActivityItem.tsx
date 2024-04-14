import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed';

interface ActivityItemProps {
  title: string;
  description: string;
  icon: string;
}

const ActivityItem = ({ title, description, icon }: ActivityItemProps) => {
  return (
    <View className='flex flex-row items-center p-4'>
      <View className='flex flex-row items-center flex-1 space-x-3'>
        <Icon type='material-community' name={icon} size={30} color='white' backgroundColor="#D5D5D5" style={{
          padding: 10
        }} />
        <View className='flex flex-col flex-1 pr-3'>
          <Text className='font-medium' >{title}</Text>
          <Text className='text-[#535353] text-sm' numberOfLines={1} ellipsizeMode='tail'>
            {description}
          </Text>
        </View>
      </View>

      <TouchableOpacity className='bg-[#E7E7E7] rounded-lg px-2 py-2' >
        <Icon type='material-community' name='chevron-right' size={30} color='black' />
      </TouchableOpacity>
    </View>
  )
}

export default ActivityItem