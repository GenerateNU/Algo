import { Text, StyleSheet, View, Image } from 'react-native';
import { Post } from '../../types/types';
import Vote from './Vote';
import { SvgXml } from 'react-native-svg';

type PostProps = {
  type: number;
};

const PostNew: React.FC<PostProps> = ({ type }) => {
  if (type == 1) {
    return (
      <View
        style={{
          flexDirection: 'row',
          paddingLeft: 15,
          paddingRight: 15,
          paddingTop: 10,
          paddingBottom: 10,
          backgroundColor: 'rgba(2, 173, 152, 0.10)',
          borderRadius: 5,
          width: 220,
        }}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Text
            style={{
              color: '#02AD98',
              fontSize: 16,
              fontFamily: 'SF Pro Text',
              fontWeight: '400',
              width: 40,
            }}>
            BUY
          </Text>
          <Text
            style={{
              color: '#121212',
              fontSize: 16,
              fontFamily: 'SF Pro Text',
              fontWeight: '400',
              width: 120,
            }}>
            AAPL @ 150.55
          </Text>
        </View>
        <View>
          <Text
            style={{
              color: '#02AD98',
              fontSize: 17,
              fontFamily: 'SF Pro',
              lineHeight: 20,
            }}>
            17%
          </Text>
        </View>
      </View>
    );
  }
  if (type == 2) {
    return (
      <View
        style={{
          flexDirection: 'row',
          paddingLeft: 15,
          paddingRight: 15,
          paddingTop: 10,
          paddingBottom: 10,
          backgroundColor: 'rgba(255, 43, 81, 0.1)',
          borderRadius: 5,
          width: 220,
        }}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Text
            style={{
              color: '#FF2B51',
              fontSize: 16,
              fontFamily: 'SF Pro Text',
              fontWeight: '400',
              width: 40,
            }}>
            BUY
          </Text>
          <Text
            style={{
              color: '#121212',
              fontSize: 16,
              fontFamily: 'SF Pro Text',
              fontWeight: '400',
              width: 120,
            }}>
            AAPL @ 150.55
          </Text>
        </View>
        <View>
          <Text
            style={{
              color: '#FF2B51',
              fontSize: 17,
              fontFamily: 'SF Pro',
              lineHeight: 20,
            }}>
            17%
          </Text>
        </View>
      </View>
    );
  }
};

// Define the styles for the component
const styles = StyleSheet.create({
  border: {
    width: '100%',
    borderColor: '#C2C2C2',
    borderBottomWidth: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    marginTop: 15,
    marginBottom: 15,
    marginRight: 20,
  },
  profile: {
    width: '15%',
  },
  image: {
    width: 40,
    height: 40,
    marginRight: 15,
    borderRadius: 50,
  },
  body: {
    width: '85%',
  },
  title: {
    fontWeight: '500',
  },
  name: {
    fontWeight: '500',
    color: '#666666',
    marginBottom: 7,
    fontSize: 16,
  },
  comment: {
    color: '#666666',
  },
  vote: {
    left: 0,
    top: 60,
    width: 20,
    height: 20,
    zIndex: 1,
  },
  add: {
    bottom: 0,
    right: 0,
    zIndex: 1,
  },
});

export default PostNew;
