import { StyleSheet, Text, View, Image } from 'react-native'
// import { theme } from '../../theme'
import React, { useContext } from 'react'
// import ActionButton from '../ActionButton'
import { useNavigation } from '@react-navigation/native'
import { Button } from 'react-native-paper'

const PROFILE_IMAGE_SIZE = 100

interface ProfileBannerProps {
  user?: any
}

const ProfileBanner = ({ user }: ProfileBannerProps) => {
  // const { currentAuth } = useContext(AuthContext)

  const navigation = useNavigation()

  const navigateToEditProfile = () => {
    // navigation.navigate({ name: "Edit My Profile" })
  }

  return (
    <View style={{ paddingHorizontal: "0%" }}>
      <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 5, paddingVertical: 10 }}>
        <Image
          style={profileStyles.profileImage}
          source={{ uri: "currentAuth?.photoURL" }}
        />

        <View style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <View style={{ display: "flex", flexDirection: 'row', alignItems: "flex-end", justifyContent: 'space-evenly', flex: 1 }}>

            <View style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Text style={{ fontSize: 20 }}>10</Text>
              <Text style={{ fontSize: 15 }}>
                Followers
              </Text>
            </View>

            <View style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Text style={{ fontSize: 20 }}>{10}</Text>
              <Text adjustsFontSizeToFit={true} numberOfLines={1} style={{ fontSize: 15 }}>
                Following
              </Text>
            </View>
          </View>
          <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 5 }}>
            <Button mode="contained" onPress={navigateToEditProfile}>Edit Profile</Button>
          </View>
        </View>

      </View>

      <View style={{ display: "flex", flexDirection: "column", gap: 5 }}>
        <Text>@username</Text>
        <Text>first_name last_name</Text>
        <Text>
          profile description? Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Praesent vel nisi sed diam ultricies viverra sit amet nec dolor....
        </Text>
      </View>
    </View>
  )
}

export default ProfileBanner


const profileStyles = StyleSheet.create({
  profileImage: {
    maxWidth: PROFILE_IMAGE_SIZE,
    maxHeight: PROFILE_IMAGE_SIZE,
    width: 250,
    height: 250,
    borderRadius: 180,
    borderColor: "black", // theme.colors.NEU_RED,
    borderWidth: 2,
  },
  followButton: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "black", //theme.colors.NEU_RED,
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 5
  },
})