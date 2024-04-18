import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

interface ProfileBioProps {
  fullName: string
  username: string
  description: string
}

const ProfileBio = ({ fullName, username, description }: ProfileBioProps) => {
  return (
    <View className='flex flex-col space-y-1 w-96'>
      <Text className='text-base font-bold'>{fullName}</Text>
      {username != "" && <Text style={styles.username}>@{username}</Text> }
      <Text>{description}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  username: {
    color: "#02AD98",
    marginBottom: 10,
  }
})

export default ProfileBio