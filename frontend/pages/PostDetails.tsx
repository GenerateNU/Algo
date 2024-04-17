import { TextInput, Button, StyleSheet, View, Text } from 'react-native';
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

const AddSvg = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.999 23.9963C18.5714 23.9963 23.9974 18.5627 23.9974 12C23.9974 5.42768 18.5618 0.00369263 11.9895 0.00369263C5.42871 0.00369263 0.00260925 5.42768 0.00260925 12C0.00260925 18.5627 5.43823 23.9963 11.999 23.9963Z" fill="#121212"/>
<path d="M6.32292 12.0074C6.32292 11.3346 6.79536 10.858 7.46407 10.858H10.8587V7.46124C10.8587 6.79462 11.3279 6.31058 11.9892 6.31058C12.6621 6.31058 13.1387 6.79462 13.1387 7.46124V10.858H16.545C17.2041 10.858 17.6861 11.3346 17.6861 12.0074C17.6861 12.6709 17.2041 13.1284 16.545 13.1284H13.1387V16.5347C13.1387 17.2012 12.6621 17.6737 11.9892 17.6737C11.3279 17.6737 10.8587 17.1917 10.8587 16.5347V13.1284H7.46407C6.79536 13.1284 6.32292 12.6709 6.32292 12.0074Z" fill="white"/>
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
});
