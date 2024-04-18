import { Text, View } from 'react-native';
// import { Post } from '../../types/types';
// import Vote from './Vote';
// import { SvgXml } from 'react-native-svg';

type PostProps = {
  type: number;
  company: string;
  price: number;
  percent: number;
};

const Info: React.FC<PostProps> = ({ type, company, price, percent }) => {
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
            {company} @ {price}
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
            {percent}%
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
            {company} @ {price}
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

export default Info;
