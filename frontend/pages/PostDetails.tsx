import {
  TextInput,
  Button,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { SvgXml } from 'react-native-svg';
import { ScrollView } from 'react-native';
import FeedTopBar from '../components/Feed/FeedTopBar';
import DiscoverPeople from '../components/Feed/DiscoverPeople';
import PostNew from '../components/Feed/PostNew';
import { FlatList } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Post, PostType } from '../types/types.d';
//import { Post } from '../types/types';
import FeedPage from './FeedPage';

const BackSvg = `
<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.3">
<path d="M6.581 12.9425C6.59467 12.7047 6.69983 12.4787 6.87832 12.3034L15.0335 4.32772C15.1349 4.2291 15.2567 4.14946 15.3921 4.09335C15.5276 4.03724 15.6739 4.00577 15.8228 4.00072C15.9717 3.99567 16.1202 4.01714 16.26 4.06392C16.3997 4.1107 16.5278 4.18186 16.637 4.27334C16.7463 4.36482 16.8345 4.47484 16.8966 4.5971C16.9588 4.71936 16.9936 4.85147 16.9992 4.98589C17.0048 5.12031 16.981 5.2544 16.9292 5.38052C16.8773 5.50663 16.7985 5.6223 16.6972 5.72091L9.25693 13L16.6972 20.2791C16.7985 20.3777 16.8773 20.4934 16.9292 20.6195C16.981 20.7456 17.0048 20.8797 16.9992 21.0141C16.9936 21.1485 16.9588 21.2806 16.8966 21.4029C16.8345 21.5251 16.7463 21.6352 16.637 21.7266C16.5278 21.8181 16.3997 21.8893 16.26 21.9361C16.1202 21.9828 15.9717 22.0043 15.8228 21.9993C15.6739 21.9942 15.5276 21.9627 15.3921 21.9066C15.2567 21.8505 15.1349 21.7709 15.0335 21.6723L6.87832 13.6966C6.77514 13.5954 6.69562 13.4765 6.64453 13.3469C6.59344 13.2173 6.57184 13.0798 6.581 12.9425Z" fill="black"/>
</g>
</svg>
`;

const PostDetails = () => {
  const u = {
    id: 'user_2chL8dX6HdbBAuvu3DDM9f9NzKK',
    first_name: 'Ania',
    last_name: 'Misiorek',
    username: 'ania',
    image_url:
      'https://ca.slack-edge.com/T2CHL6FEG-U05QP4M4M3P-349be7323f07-512',
  };

  const posts = [
    {
      user: u,
      post_type: PostType.SHARE_COMMENT,
      num_data: 100,
      ticker_symbol: 'APPL',
      title: 'Netflix Returns',
      comment:
        'Check out my returns this month! Let me know what you guys think!',
    },
    {
      user: u,
      post_type: PostType.RECENT_TRADE,
      num_data: 100,
      ticker_symbol: 'APPL',
      title: 'Apple Trade',
      comment: 'Just sold my APPL stock. Thoughts on the new M&A?',
    },
    {
      user: u,
      post_type: PostType.RECENT_TRADE,
      num_data: 100,
      ticker_symbol: 'APPL',
      title: 'Apple Trade',
      comment: 'Just sold my APPL stock. Thoughts on the new M&A?',
    },
    {
      user: u,
      post_type: PostType.RECENT_TRADE,
      num_data: 100,
      ticker_symbol: 'APPL',
      title: 'Apple Trade',
      comment: 'Just sold my APPL stock. Thoughts on the new M&A?',
    },
  ];

  const navigation: any = useNavigation();

  const handleButtonPress = () => {
    navigation.navigate('FeedPage');
  };

  return (
    <View style={styles.container}>
      <View style={{ width: 393, height: 852, position: 'relative' }}>
        <TouchableOpacity onPress={handleButtonPress}>
          <SvgXml xml={BackSvg} width="30" height="30" style={styles.back} />
        </TouchableOpacity>

        <View
          style={{
            left: 24,
            top: 157,
            position: 'absolute',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            gap: 50,
          }}>
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              gap: 20,
              display: 'flex',
            }}>
            <Text
              style={{
                width: 327,
                color: '#333333',
                fontSize: 22,
                fontFamily: 'SF Pro Display',
                fontWeight: '500',
              }}>
              Check out my Apple trade
            </Text>
            <Text
              style={{
                width: 327,
                color: '#666666',
                fontSize: 16,
                fontFamily: 'SF Pro Text',
                fontWeight: '400',
                lineHeight: 20,
              }}>
              I sold my apple shares and made a 17% profit. Super happy with my
              progress so far and wanted to know what people think! I sold my
              apple shares and made a 17% profit. Super happy with my progress
              so far and wanted to know what people think!I sold my apple shares
              and made a 17% profit. Super happy with my progress so far and
              wanted to know what people think!I sold my apple shares and made a
              17% profit. Super happy with my progress so far and wanted to know
              what people think! I sold my apple shares and made a 17% profit.
              Super happy with my progress so far and wanted to know what people
              think!
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PostDetails;

const styles = StyleSheet.create({
  container: {
    // boxSizing: 'border-box',
    flexDirection: 'column',
    height: '100%',
    backgroundColor: '#FFFFFF',
  },
  scroll_view: {
    flexDirection: 'column',
    padding: 25,
  },
  body: {
    fontSize: 14,
  },
  name: {
    color: '#fff',
  },
  post_pos: {
    marginTop: '20%',
    width: '100%',
    // background: 'url("../images/v124_1268.png")',
    // backgroundRepeat: 'no-repeat',
    // backgroundPosition: 'center center',
    // backgroundSize: 'cover',
    opacity: 1,
    flexDirection: 'column',
    // position: 'absolute',
  },
  post_txt: {
    marginTop: '20%',
    width: '100%',
    color: 'rgba(102,102,102,1)',
    fontFamily: 'Circular Std',
    marginBottom: 12,
    fontWeight: '500',
    fontSize: 17,
    opacity: 1,
    textAlign: 'center',
  },
  back: {
    top: 30,
    left: 10,
  },
});
