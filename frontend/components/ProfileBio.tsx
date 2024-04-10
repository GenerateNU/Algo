import { View, Text } from 'react-native'
import React from 'react'

interface ProfileBioProps {
  fullName: string
  description: string
}

const ProfileBio = ({ fullName, description }: ProfileBioProps) => {
  return (
    <View className='flex flex-col space-y-1 w-96'>
      <Text className='text-base font-bold'>{fullName}</Text>
      <Text>{description}</Text>
    </View>
  )
}

export default ProfileBio