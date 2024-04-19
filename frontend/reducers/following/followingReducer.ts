import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../types/types';

const followingSlice = createSlice({
  name: 'following',
  initialState: {
    userFollowing: [] as User[],
  },
  reducers: {
    follow(state, action) {
      state.userFollowing.push(action.payload);
    },
    unfollow(state, action) {
      state.userFollowing = state.userFollowing.filter(
        (user) => user.id !== action.payload.id
      );
    },
    updateFollowing(state, action) {
      state.userFollowing = action.payload;
    },
  },
});

export const { follow, unfollow, updateFollowing } = followingSlice.actions;
export default followingSlice.reducer;
