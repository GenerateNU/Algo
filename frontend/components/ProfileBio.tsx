import { View, Text } from 'react-native'
import React from 'react'

interface ProfileBioProps {
  username: string
  fullName: string
  description: string
}

const ProfileBio = ({ username, fullName, description }: ProfileBioProps) => {
  return (
    <View className='flex flex-col space-y-1'>
      <Text className='font-medium'>@{username}</Text>
      <Text className='font-semibold'>{fullName}</Text>
      <Text>{description}</Text>
    </View>
  )
}

export default ProfileBio