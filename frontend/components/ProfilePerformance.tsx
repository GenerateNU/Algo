import { View, Text, Pressable } from 'react-native'
import React from 'react'

interface ProfilePerformanceProps {
  portfolioValue: number
}

const ProfilePerformance = ({portfolioValue} : ProfilePerformanceProps) => {
  return (
    <View className='flex flex-col justify-between space-y-1 py-3 px-6 border-b-[1px] border-b-gray-200'>
      <Text className='font-semibold text-base'>Performance</Text>
      <View className='flex flex-row justify-between items-center'>
        <Text className={`text-2xl ${portfolioValue >= 0 ? 'text-[#02AD98]' : 'text-[#FF2B51]'}`}>
          {portfolioValue} %
        </Text>
        <Pressable>
          <Text>Copy Trades</Text>
        </Pressable>
      </View>
      <Text>YTD Performance</Text>
    </View>
  )
}

export default ProfilePerformance