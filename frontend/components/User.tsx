import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';

interface PostProps {
  name: string;
  postIndex: number;
}

const Post: React.FC<PostProps> = ({ name, postIndex }) => {
  if (postIndex == 1) {
    return (
      <View style={styles.person1}>
        <View style={styles.circle1}></View>
        <View style={styles.name1_pos}>
          <Text style={styles.name1_txt}>{name}</Text>
        </View>
      </View>
    );
  }
  if (postIndex == 2) {
    return (
      <View style={styles.person2}>
        <View style={styles.circle2}></View>
        <View style={styles.name2_pos}>
          <Text style={styles.name2_txt}>{name}</Text>
        </View>
      </View>
    );
  }
  if (postIndex == 3) {
    return (
      <View style={styles.person3}>
        <View style={styles.circle3}></View>
        <View style={styles.name3_pos}>
          <Text style={styles.name3_txt}>{name}</Text>
        </View>
      </View>
    );
  }
};

export default Post;

const styles = StyleSheet.create({
  person1: {
    width: 75,
    height: 159,
    // background: 'url("../images/v124_1289.png")',
    // backgroundRepeat: 'no-repeat',
    // backgroundPosition: 'center center',
    // backgroundSize: 'cover',
    padding: 20,
    margin: 20,
    opacity: 1,
    position: 'absolute',
    top: 0,
    left: 24,
    overflow: 'hidden',
  },
  circle1: {
    width: 75,
    height: 75,
    backgroundColor: 'rgba(217,217,217,1)',
    opacity: 1,
    position: 'absolute',
    top: 20,
    left: 0,
    borderRadius: 50,
  },
  name1_pos: {
    width: 58,
    height: 24,
    // background: 'url("../images/v124_1291.png")',
    // backgroundRepeat: 'no-repeat',
    // backgroundPosition: 'center center',
    // backgroundSize: 'cover',
    margin: 5,
    opacity: 1,
    position: 'absolute',
    top: 105,
    left: 5,
    overflow: 'hidden',
  },
  name1_txt: {
    width: 58,
    color: 'rgba(0,0,0,1)',
    position: 'absolute',
    top: 0,
    left: 0,
    fontFamily: 'Circular Std',
    fontWeight: 'normal',
    fontSize: 16,
    opacity: 1,
    textAlign: 'left',
  },
  person2: {
    width: 75,
    height: 159,
    // background: 'url("../images/v124_1293.png")',
    // backgroundRepeat: 'no-repeat',
    // backgroundPosition: 'center center',
    // backgroundSize: 'cover',
    padding: 20,
    margin: 20,
    opacity: 1,
    position: 'absolute',
    top: 0,
    left: 129,
    overflow: 'hidden',
  },
  circle2: {
    width: 75,
    height: 75,
    backgroundColor: 'rgba(217,217,217,1)',
    opacity: 1,
    position: 'absolute',
    top: 20,
    left: 0,
    borderRadius: 50,
  },
  name2_pos: {
    width: 55,
    height: 24,
    // background: 'url("../images/v124_1295.png")',
    // backgroundRepeat: 'no-repeat',
    // backgroundPosition: 'center center',
    // backgroundSize: 'cover',
    margin: 5,
    opacity: 1,
    position: 'absolute',
    top: 105,
    left: 10,
    overflow: 'hidden',
  },
  name2_txt: {
    width: 55,
    color: 'rgba(0,0,0,1)',
    position: 'absolute',
    top: 0,
    left: 0,
    fontFamily: 'Circular Std',
    fontWeight: 'normal',
    fontSize: 16,
    opacity: 1,
    textAlign: 'left',
  },
  person3: {
    width: 102,
    height: 159,
    // background: 'url("../images/v124_1297.png")',
    // backgroundRepeat: 'no-repeat',
    // backgroundPosition: 'center center',
    // backgroundSize: 'cover',
    paddingVertical: 20,
    paddingHorizontal: 0,
    margin: 20,
    opacity: 1,
    position: 'absolute',
    top: 0,
    left: 234,
    overflow: 'hidden',
  },
  circle3: {
    width: 75,
    height: 75,
    backgroundColor: 'rgba(217,217,217,1)',
    opacity: 1,
    position: 'absolute',
    top: 20,
    left: 8,
    borderRadius: 50,
  },
  name3_pos: {
    width: 92,
    height: 24,
    // background: 'url("../images/v124_1299.png")',
    // backgroundRepeat: 'no-repeat',
    // backgroundPosition: 'center center',
    // backgroundSize: 'cover',
    margin: 5,
    opacity: 1,
    position: 'absolute',
    top: 105,
    left: 0,
    overflow: 'hidden',
  },
  name3_txt: {
    width: 102,
    color: 'rgba(0,0,0,1)',
    position: 'absolute',
    top: 0,
    left: 0,
    fontFamily: 'Circular Std',
    fontWeight: 'normal',
    fontSize: 16,
    opacity: 1,
    textAlign: 'left',
  },
});
