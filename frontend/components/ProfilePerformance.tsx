import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { ProfileNavigationProp } from '../types/navigationTypes';
import { useSession } from '@clerk/clerk-expo';

interface ProfilePerformanceProps {
  portfolioValue: number
}

const ProfilePerformance = ({portfolioValue} : ProfilePerformanceProps) => {
  const { session } = useSession();
  const navigator = useNavigation<ProfileNavigationProp>();
  const handleCopyTrades = () => {
    navigator.navigate('CopyTrades')
  }

  return (
    <View className='flex flex-col justify-between space-y-1 py-3 px-6 border-b-[1px] border-b-gray-200'>
      <Text className='font-semibold text-base'>Performance</Text>
      <View className='flex flex-row justify-between items-center'>
        <Text className={`text-2xl ${portfolioValue >= 0 ? 'text-[#02AD98]' : 'text-[#FF2B51]'}`}>
          {portfolioValue} %
        </Text>
      </View>
      <Text>YTD Performance</Text>
      {(session?.user.username == 'nathan') ? <Pressable onPress={handleCopyTrades}>
        <Text>Copy Trades</Text>
      </Pressable> : null}
    </View>
  )
}

export default ProfilePerformance