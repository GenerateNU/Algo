import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';

interface PostProps {
  name: string;
  postIndex: number;
}

const Post: React.FC<PostProps> = ({ name, postIndex }) => {
  return (
    <View style={styles.search_bar}>
      <View style={styles.search_box}></View>
      <Text style={styles.search_txt}>Search</Text>
      <View style={styles.search_add}>
        {/* <SvgXml xml={AddSvg} width="30" height="30" /> */}
      </View>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  search_bar: {
    width: 350,
    height: 48,
    // background: 'url("../images/v124_1301.png")',
    // backgroundRepeat: 'no-repeat',
    // backgroundPosition: 'center center',
    // backgroundSize: 'cover',
    opacity: 1,
    position: 'absolute',
    top: 138,
    left: 22,
    overflow: 'hidden',
  },
  search_box: {
    width: 350,
    height: 48,
    backgroundColor: 'rgba(247,247,247,1)',
    opacity: 1,
    position: 'relative',
    top: 0,
    left: 0,
    borderTopLeftRadius: 52,
    borderTopRightRadius: 52,
    borderBottomLeftRadius: 52,
    borderBottomRightRadius: 52,
    overflow: 'hidden',
  },
  search_txt: {
    width: 64,
    color: 'rgba(0,0,0,1)',
    position: 'absolute',
    top: 12,
    left: 24,
    fontFamily: 'SF Pro Text',
    fontWeight: '600',
    fontSize: 17,
    opacity: 0.6000000238418579,
    textAlign: 'left',
  },
  search_add: {
    // width: 24,
    // height: 24,
    // // background: 'url("../images/v124_1304.png")',
    // // backgroundRepeat: 'no-repeat',
    // // backgroundPosition: 'center center',
    // // backgroundSize: 'cover',
    margin: 0,
    // // opacity: 1,
    position: 'absolute',
    top: 9,
    right: 10,
    overflow: 'hidden',
    // paddingHorizontal: 20,
  },
});
