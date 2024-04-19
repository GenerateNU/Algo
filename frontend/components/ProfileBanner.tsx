import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
} from 'react-native';
// import { theme } from '../../theme'
import React, { useEffect, useState } from 'react';
// import ActionButton from '../ActionButton'
// import { useNavigation } from '@react-navigation/native'
import ProfileBio from './ProfileBio';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { RootState } from './LayoutWrapper';
import { useDispatch } from 'react-redux';
import { AuthNavigationProp } from '../types/navigationTypes';
import { getUserFollowers, getUserFollowing } from '../services/followers';
import { User } from '../types/types';
import { useSession } from '@clerk/clerk-expo';
import {
  updateFollowing,
  follow,
  unfollow,
} from '../reducers/following/followingReducer';
import { followUser, unfollowUser } from '../services/followers';

interface ProfileBannerProps {
  user: User;
}

const ProfileBanner = ({ user }: ProfileBannerProps) => {
  const dispatch = useDispatch();
  const { session } = useSession();
  const navigation = useNavigation<AuthNavigationProp>();
  const [following, setFollowing] = useState<User[]>([]);
  const [followers, setFollowers] = useState<User[]>([]);
  const followingState = useSelector((state: RootState) => state.following);

  // const userIsFollowing = userFollowing.some(
  //   followingUser => followingUser.id === user.id,
  // );

  const navigateToFollowers = () => {
    navigation.navigate('Followers', { label: 'Followers', users: followers });
  };

  const navigateToFollowing = () => {
    navigation.navigate('Followers', { label: 'Followers', users: following });
  };

  useEffect(() => {
    getUserFollowers(user.id).then(users => {
      setFollowers(users);
    });
    getUserFollowing(user.id).then(users => {
      setFollowing(users);
      if (session?.user.id === user.id) {
        dispatch(updateFollowing(users));
      }
    });
  }, []);

  // useEffect(() => {
  //   if (session?.user.id === user.id) {
  //     setFollowing(userFollowing);
  //   }
  // }, [userFollowing]);

  console.log(user);
  console.log(
    'followingState!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
    followingState,
  );

  return (
    <View className="flex flex-col px-4 mb-2">
      <View className="flex flex-row items-center justify-between gap-1 mb-4 mt-3">
        <Image
          // must be a perfect circle
          className="w-32 h-32"
          style={profileStyles.profileImage}
          source={{ uri: user.image_url || session?.user.imageUrl }}
        />

        <View className="flex flex-col items-center flex-1 gap-2">
          <View className="flex flex-row justify-evenly flex-1">
            <Pressable
              className="flex flex-col items-center px-4 py-2"
              onPress={navigateToFollowers}>
              <Text className="text-sm font-semibold">
                {followers?.length | 0}
              </Text>
              <Text className="text-sm font-semibold">Followers</Text>
            </Pressable>

            <Pressable
              className="flex flex-col items-center px-4 py-2"
              onPress={navigateToFollowing}>
              <Text className="text-sm font-semibold">
                {following?.length | 0}
              </Text>
              <Text
                adjustsFontSizeToFit={true}
                numberOfLines={1}
                className="text-sm font-semibold">
                Following
              </Text>
            </Pressable>
          </View>

          {/* {user.id === session?.user.id ? (
            <TouchableOpacity
              className="flex items-center justify-center flex-1 mb-5 w-48"
              style={profileStyles.followButton}>
              <Text className="font-semibold text-[#02AD98]">Edit Profile</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              className="flex items-center justify-center flex-1 mb-5 w-48"
              style={profileStyles.followButton2}
              onPress={async () => {
                if (session?.user.id === user.id) {
                  if (userIsFollowing) {
                    await followUser(session?.user.id, user.id);
                    dispatch(follow(user));
                  } else {
                    await unfollowUser(session?.user.id, user.id);
                    dispatch(unfollow(user));
                  }
                }
              }}>
              <Text className="font-semibold text-[#FFFFFF]">
                {userIsFollowing ? 'Following' : 'Follow'}
              </Text>
            </TouchableOpacity>
          )} */}
        </View>
      </View>

      <ProfileBio
        fullName={`${user.first_name || session?.user.firstName} ${user.last_name || session?.user.lastName}`}
        username={`${user.username || session?.user.username}`}
        description="📈🚀💰"
      />
    </View>
  );
};

export default ProfileBanner;

const profileStyles = StyleSheet.create({
  profileImage: {
    borderRadius: 180,
    borderColor: '#CCCCCC',
    borderWidth: 1,
  },
  followButton: {
    backgroundColor: 'rgba(2, 173, 152, 0.18)',
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  followButton2: {
    backgroundColor: '#333333',
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
});
