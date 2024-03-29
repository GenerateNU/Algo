import { StyleSheet, Text, View, Image, Pressable, Touchable, TouchableOpacity } from 'react-native'
// import { theme } from '../../theme'
import React, { useContext } from 'react'
// import ActionButton from '../ActionButton'
// import { useNavigation } from '@react-navigation/native'
import { Button } from 'react-native-paper'
import ProfileBio from './ProfileBio'
import { useSession } from '@clerk/clerk-expo'

const PROFILE_IMAGE_SIZE = 100

interface ProfileBannerProps {
  user?: any
}

const ProfileBanner = ({ user }: ProfileBannerProps) => {
  // const { currentAuth } = useContext(AuthContext)
  const { session } = useSession()
  // const navigation = useNavigation()

  const navigateToEditProfile = () => {
    // navigation.navigate({ name: "Edit My Profile" })
  }

  return (
    <View className='flex flex-col px-3 mb-2'>

      <View className='flex flex-row items-center justify-between gap-1 mb-4'>
        <Image
          // must be a perfect circle
          className='w-32 h-32'
          style={profileStyles.profileImage}
          source={{ uri: "currentAuth?.photoURL" }}
        />

        <View className='flex flex-col flex-1 gap-2'>
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

          <TouchableOpacity className='flex items-center justify-center flex-1 bg-[#E7E7E7]' style={profileStyles.followButton}>
            <Text className='font-semibold' style={{ color: "black" }}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ProfileBio
        username="username"
        fullName="first_name last_name"
        description="profile description? Lorem ipsum dolor sit amet, consectetur adipiscing elit.Praesent vel nisi sed diam ultricies viverra sit amet nec dolor...."
      />

    </View>
  )
}

export default ProfileBanner


const profileStyles = StyleSheet.create({
  profileImage: {
    //maxWidth: PROFILE_IMAGE_SIZE,
    // maxHeight: PROFILE_IMAGE_SIZE,
    //width: 250,
    // height: 250,
    borderRadius: 180,
    borderColor: "black", // theme.colors.NEU_RED,
    borderWidth: 2,
  },
  followButton: {
    backgroundColor: "#E7E7E7", //theme.colors.NEU_RED,
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 10
  },
})