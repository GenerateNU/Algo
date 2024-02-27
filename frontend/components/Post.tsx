import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
// import { User } from '../types/types';
// import { getAllUsers } from '../services/users';
// import Logo from '../assets/test.svg';
import { SvgXml } from 'react-native-svg';

interface PostProps {
  name: string;
  comment: string;
  postIndex: number;
}

const Post: React.FC<PostProps> = ({ name, comment, postIndex }) => {
  if (postIndex == 1) {
    return (
      <View style={styles.v124_1271}>
        <View style={styles.horizontalLine} />
        <View style={styles.v124_1272}></View>
        <View style={styles.v124_1273}>
          <Text style={styles.v124_1274}>{name}</Text>
          <Text style={styles.v124_1275}>{comment}</Text>
        </View>
      </View>
    );
  }
  if (postIndex == 2) {
    return (
      <View style={styles.v124_1276}>
        <View style={styles.horizontalLine}></View>
        <View style={styles.v124_1277}></View>
        <View style={styles.v124_1278}>
          <Text style={styles.v124_1279}>{name}</Text>
          <Text style={styles.v124_1280}>{comment}</Text>
        </View>
      </View>
    );
  }
  if (postIndex == 3) {
    return (
      <View style={styles.v124_1281}>
        <View style={styles.horizontalLine}></View>
        <View style={styles.v124_1282}></View>
        <View style={styles.v124_1283}>
          <Text style={styles.v124_1284}>{name}</Text>
          <Text style={styles.v124_1285}>{comment}</Text>
        </View>
      </View>
    );
  }
};

export default Post;

const styles = StyleSheet.create({
  v124_1271: {
    width: 393,
    height: 93,
    // background: 'url("../images/v124_1271.png")',
    // backgroundRepeat: 'no-repeat',
    // backgroundPosition: 'center center',
    // backgroundSize: 'cover',
    padding: 20,
    margin: 20,
    opacity: 1,
    position: 'relative',
    top: 0,
    left: 0,
    overflow: 'hidden',
  },
  v124_1272: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(217,217,217,1)',
    opacity: 1,
    position: 'absolute',
    top: 26,
    left: 24,
    borderRadius: 50,
  },
  v124_1273: {
    width: 198,
    height: 53,
    // background: 'url("../images/v124_1273.png")',
    // backgroundRepeat: 'no-repeat',
    // backgroundPosition: 'center center',
    // backgroundSize: 'cover',
    margin: 5,
    opacity: 1,
    position: 'absolute',
    top: 20,
    left: 84,
    overflow: 'hidden',
  },
  v124_1274: {
    width: 67,
    color: 'rgba(0,0,0,1)',
    position: 'relative',
    top: 0,
    left: 0,
    fontFamily: 'Circular Std',
    fontWeight: '500',
    fontSize: 17,
    opacity: 1,
    textAlign: 'left',
  },
  v124_1275: {
    width: 198,
    color: 'rgba(0,0,0,1)',
    position: 'absolute',
    top: 29,
    left: 0,
    fontFamily: 'Circular Std',
    fontWeight: 'normal',
    fontSize: 17,
    opacity: 0.5,
    textAlign: 'left',
  },
  v124_1276: {
    width: 393,
    height: 93,
    // background: 'url("../images/v124_1276.png")',
    // backgroundRepeat: 'no-repeat',
    // backgroundPosition: 'center center',
    // backgroundSize: 'cover',
    padding: 20,
    margin: 20,
    opacity: 1,
    position: 'absolute',
    top: 93,
    left: 0,
    overflow: 'hidden',
  },
  v124_1277: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(217,217,217,1)',
    opacity: 1,
    position: 'absolute',
    top: 26,
    left: 24,
    borderRadius: 50,
  },
  v124_1278: {
    width: 160,
    height: 53,
    // background: 'url("../images/v124_1278.png")',
    // backgroundRepeat: 'no-repeat',
    // backgroundPosition: 'center center',
    // backgroundSize: 'cover',
    margin: 5,
    opacity: 1,
    position: 'absolute',
    top: 20,
    left: 84,
    overflow: 'hidden',
  },
  v124_1279: {
    width: 89,
    color: 'rgba(0,0,0,1)',
    position: 'relative',
    top: 0,
    left: 0,
    fontFamily: 'Circular Std',
    fontWeight: '500',
    fontSize: 17,
    opacity: 1,
    textAlign: 'left',
  },
  v124_1280: {
    width: 160,
    color: 'rgba(0,0,0,1)',
    position: 'absolute',
    top: 29,
    left: 0,
    fontFamily: 'Circular Std',
    fontWeight: 'normal',
    fontSize: 17,
    opacity: 0.5,
    textAlign: 'left',
  },
  v124_1281: {
    width: 393,
    height: 93,
    // background: 'url("../images/v124_1281.png")',
    // backgroundRepeat: 'no-repeat',
    // backgroundPosition: 'center center',
    // backgroundSize: 'cover',
    paddingVertical: 20,
    paddingHorizontal: 24,
    margin: 20,
    opacity: 1,
    position: 'absolute',
    top: 186,
    left: 0,
    overflow: 'hidden',
  },
  v124_1282: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(217,217,217,1)',
    opacity: 1,
    position: 'absolute',
    top: 26,
    left: 24,
    borderRadius: 50,
  },
  v124_1283: {
    width: 143,
    height: 53,
    // background: 'url("../images/v124_1283.png")',
    // backgroundRepeat: 'no-repeat',
    // backgroundPosition: 'center center',
    // backgroundSize: 'cover',
    margin: 5,
    opacity: 1,
    position: 'absolute',
    top: 20,
    left: 84,
    overflow: 'hidden',
  },
  v124_1284: {
    width: 105,
    color: 'rgba(0,0,0,1)',
    position: 'absolute',
    top: 0,
    left: 0,
    fontFamily: 'Circular Std',
    fontWeight: '500',
    fontSize: 17,
    opacity: 1,
    textAlign: 'left',
  },
  v124_1285: {
    width: 143,
    color: 'rgba(0,0,0,1)',
    position: 'absolute',
    top: 29,
    left: 0,
    fontFamily: 'Circular Std',
    fontWeight: 'normal',
    fontSize: 17,
    opacity: 0.5,
    textAlign: 'left',
  },
  horizontalLine: {
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 2,
    // marginVertical: 0,
    bottom: 10,
    right: 20,
  },
  horizontalLine2: {
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 2,
    marginVertical: 0,
    top: 530,
    left: 0,
  },
  horizontalLine3: {
    top: 116,
    left: 0,
    borderBottomWidth: 2,
    borderBottomColor: 'lightgrey',
  },
  horizontalLine4: {
    top: 114,
    right: 200,
    borderBottomWidth: 2,
    borderBottomColor: 'black',
  },
});
