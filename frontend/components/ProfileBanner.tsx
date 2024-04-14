import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
// import { theme } from '../../theme'
import React from 'react'
// import ActionButton from '../ActionButton'
// import { useNavigation } from '@react-navigation/native'
import ProfileBio from './ProfileBio'
// import { useSession } from '@clerk/clerk-expo'

interface ProfileBannerProps {
  user?: string
}

const ProfileBanner = ({ user }: ProfileBannerProps) => {
  /*
  const { session } = useSession()
  const navigation = useNavigation()

  const navigateToEditProfile = () => {
    navigation.navigate({ name: "Edit My Profile" })
  }
  */

  return (
    <View className='flex flex-col px-4 mb-2'>

      <View className='flex flex-row items-center justify-between gap-1 mb-4 mt-3'>
        <Image
          // must be a perfect circle
          className='w-32 h-32'
          style={profileStyles.profileImage}
          source={{ uri: "currentAuth?.photoURL" }}
        />

        <View className='flex flex-col items-center flex-1 gap-2'>
          <View className='flex flex-row justify-evenly flex-1' >
            
            <View className='flex flex-col items-center px-4 py-2'>
              <Text className='text-sm font-semibold'>10</Text>
              <Text className='text-sm font-semibold'>
                Followers
              </Text>
            </View>

            <View className='flex flex-col items-center px-4 py-2'>
              <Text className='text-sm font-semibold'>{10}</Text>
              <Text adjustsFontSizeToFit={true} numberOfLines={1} className='text-sm font-semibold'>
                Following
              </Text>
            </View>
          </View>

          <TouchableOpacity
            className='flex items-center justify-center flex-1 mb-5 w-48'
            style={profileStyles.followButton}
            onPress={() => console.log(user)}
          >
            <Text className='font-semibold text-[#02AD98]'>Edit Profile</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ProfileBio
        fullName="first_name last_name"
        description="profile description? Lorem ipsum dolor sit amet, consectetur adipiscing elit.Praesent vel nisi sed diam ultricies viverra sit amet nec dolor...."
      />

    </View>
  )
}

export default ProfileBanner


const profileStyles = StyleSheet.create({
  profileImage: {
    borderRadius: 180,
    borderColor: "black",
    borderWidth: 2,
  },
  followButton: {
    backgroundColor: "rgba(2, 173, 152, 0.18)",
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 5
  },
})