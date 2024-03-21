import { TextInput, Button, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
// import { User } from '../types/types';
// import { getAllUsers } from '../services/users';
// import Logo from '../assets/test.svg';
import { SvgXml } from 'react-native-svg';
// import './Feed-Page.css';
import Post from '../components/Post';
import User from '../components/User';
import { ScrollView } from 'react-native';
import ProfileExplore from '../pages/ProfileExplore';
import { useNavigation } from '@react-navigation/native';

const AddSvg = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.999 23.9963C18.5714 23.9963 23.9974 18.5627 23.9974 12C23.9974 5.42768 18.5618 0.00369263 11.9895 0.00369263C5.42871 0.00369263 0.00260925 5.42768 0.00260925 12C0.00260925 18.5627 5.43823 23.9963 11.999 23.9963Z" fill="#666666"/>
<path d="M6.32292 12.0074C6.32292 11.3346 6.79536 10.858 7.46407 10.858H10.8587V7.46124C10.8587 6.79462 11.3279 6.31058 11.9892 6.31058C12.6621 6.31058 13.1387 6.79462 13.1387 7.46124V10.858H16.545C17.2041 10.858 17.6861 11.3346 17.6861 12.0074C17.6861 12.6709 17.2041 13.1284 16.545 13.1284H13.1387V16.5347C13.1387 17.2012 12.6621 17.6737 11.9892 17.6737C11.3279 17.6737 10.8587 17.1917 10.8587 16.5347V13.1284H7.46407C6.79536 13.1284 6.32292 12.6709 6.32292 12.0074Z" fill="white"/>
</svg>
`;

const NextSvg = `
<svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 5.99997H16M16 5.99997L9.06667 0.999969M16 5.99997L9.06667 11" stroke="#666666"/>
</svg>
`;

export default function FeedPage() {
  const [password, setPassword] = useState('');

  const handlePasswordChange = (text: string) => {
    setPassword(text);
  };

  const navigation = useNavigation();

  const handleButtonPress = () => {
    navigation.navigate{ProfileExplore};
  };

  return (
    <View>
      <View>
        <View style={styles.top_bar}>
          <Text style={styles.explore}>Explore</Text>
          <Text style={styles.follow}>Following</Text>
        </View>
        <View style={styles.horizontalLine3}></View>
        <View style={styles.horizontalLine4}></View>
        <ScrollView>
          <View style={styles.post_pos}>
            <View style={{ left: 350, top: 10 }}>
              <SvgXml xml={NextSvg} width="17" height="12" />
              <Button
                title="Go to Profile Explore"
                onPress={handleButtonPress}
              />
            </View>
            <Text style={styles.post_txt}>Posts</Text>

            <View style={styles.posts}>
              <Post
                name="Anthony"
                comment="Sweet returns this month!"
                postIndex={1}
                tag="@bryan"
                subject="Netflix Returns"
                stat="17%"
              />

              <Post
                name="Anthony"
                comment="Sweet returns this month!"
                postIndex={1}
                tag="@bryan"
                subject="Netflix Returns"
                stat="17%"
              />

              {/* <Post
                name="Kevin Daliri"
                comment="Check out this trade."
                postIndex={2}
              />
              <Post
                name="Bryan Carson"
                comment="Thank you carbon!"
                postIndex={3}
              /> */}
            </View>
          </View>

          <View style={styles.horizontalLine2}></View>
          <View style={styles.ppl_sec}>
            <View style={{ left: 350, top: 10 }}>
              <SvgXml xml={NextSvg} width="17" height="12" />
            </View>
            <Text style={styles.ppl_txt}>People</Text>
            <View style={styles.people}>
              <User name="Michael" postIndex={1} />
              <User name="Isabella" postIndex={2} />
              <User name="Tony Alvarez" postIndex={3} />
            </View>
          </View>
        </ScrollView>
        <View style={styles.search_box}>
          <TextInput
            style={styles.search_txt}
            value={password}
            onChangeText={handlePasswordChange}
            placeholder="Search"
          />
          <View style={styles.search_add}>
            <SvgXml xml={AddSvg} width="30" height="30" />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // boxSizing: 'border-box',
  },
  body: {
    fontSize: 14,
  },
  v124_1260: {
    width: 393,
    height: 852,
    backgroundColor: 'rgba(255,255,255,1)',
    opacity: 1,
    position: 'relative',
    top: 0,
    left: 0,
    overflow: 'hidden',
  },
  name: {
    color: '#fff',
  },
  top_bar: {
    width: 393,
    height: 63,
    // backgroundColor: 'url("../images/v124_1264.png")',
    // backgroundRepeat: 'no-repeat',
    // backgroundPosition: 'center center',
    // backgroundSize: 'cover',
    padding: 20,
    margin: 100,
    opacity: 1,
    position: 'absolute',
    top: -20,
    left: -40,
    overflow: 'hidden',
  },
  explore: {
    width: 67,
    color: 'rgba(0,0,0,1)',
    position: 'absolute',
    top: -1,
    left: 10,
    fontFamily: 'Circular Std',
    fontWeight: '500',
    fontSize: 17,
    opacity: 1,
    textAlign: 'center',
  },
  follow: {
    width: 83,
    color: 'rgba(102,102,102,1)',
    position: 'absolute',
    top: -1,
    left: 179,
    fontFamily: 'Circular Std',
    fontWeight: '500',
    fontSize: 17,
    opacity: 1,
    textAlign: 'center',
  },
  // v124_1267: {
  //   width: 202,
  //   // background: 'url("../images/v124_1267.png")',
  //   opacity: 1,
  //   position: 'absolute',
  //   top: 116,
  //   left: 3,
  //   borderWidth: 1.5,
  //   borderColor: 'rgba(0,0,0,1)',
  // },
  post_pos: {
    width: 493,
    height: 522,
    // background: 'url("../images/v124_1268.png")',
    // backgroundRepeat: 'no-repeat',
    // backgroundPosition: 'center center',
    // backgroundSize: 'cover',
    opacity: 1,
    // position: 'absolute',
    top: 215,
    left: 0,
    overflow: 'hidden',
  },
  post_txt: {
    width: 50,
    color: 'rgba(102,102,102,1)',
    position: 'absolute',
    top: 0,
    left: 28,
    fontFamily: 'Circular Std',
    fontWeight: '500',
    fontSize: 17,
    opacity: 1,
    textAlign: 'center',
  },
  posts: {
    width: 493,
    height: 379,
    // background: 'url("../images/v124_1270.png")',
    // backgroundRepeat: 'no-repeat',
    // backgroundPosition: 'center center',
    // backgroundSize: 'cover',
    opacity: 1,
    position: 'absolute',
    top: 15,
    left: 0,
    overflow: 'hidden',
  },
  // v124_1271: {
  //   width: 393,
  //   height: 93,
  //   // background: 'url("../images/v124_1271.png")',
  //   // backgroundRepeat: 'no-repeat',
  //   // backgroundPosition: 'center center',
  //   // backgroundSize: 'cover',
  //   padding: 20,
  //   margin: 20,
  //   opacity: 1,
  //   position: 'relative',
  //   top: 0,
  //   left: 0,
  //   overflow: 'hidden',
  // },
  // v124_1272: {
  //   width: 40,
  //   height: 40,
  //   backgroundColor: 'rgba(217,217,217,1)',
  //   opacity: 1,
  //   position: 'absolute',
  //   top: 26,
  //   left: 24,
  //   borderRadius: 50,
  // },
  // v124_1273: {
  //   width: 198,
  //   height: 53,
  //   // background: 'url("../images/v124_1273.png")',
  //   // backgroundRepeat: 'no-repeat',
  //   // backgroundPosition: 'center center',
  //   // backgroundSize: 'cover',
  //   margin: 5,
  //   opacity: 1,
  //   position: 'absolute',
  //   top: 20,
  //   left: 84,
  //   overflow: 'hidden',
  // },
  // v124_1274: {
  //   width: 67,
  //   color: 'rgba(0,0,0,1)',
  //   position: 'relative',
  //   top: 0,
  //   left: 0,
  //   fontFamily: 'Circular Std',
  //   fontWeight: '500',
  //   fontSize: 17,
  //   opacity: 1,
  //   textAlign: 'left',
  // },
  // v124_1275: {
  //   width: 198,
  //   color: 'rgba(0,0,0,1)',
  //   position: 'absolute',
  //   top: 29,
  //   left: 0,
  //   fontFamily: 'Circular Std',
  //   fontWeight: 'normal',
  //   fontSize: 17,
  //   opacity: 0.5,
  //   textAlign: 'left',
  // },
  // v124_1276: {
  //   width: 393,
  //   height: 93,
  //   // background: 'url("../images/v124_1276.png")',
  //   // backgroundRepeat: 'no-repeat',
  //   // backgroundPosition: 'center center',
  //   // backgroundSize: 'cover',
  //   padding: 20,
  //   margin: 20,
  //   opacity: 1,
  //   position: 'absolute',
  //   top: 93,
  //   left: 0,
  //   overflow: 'hidden',
  // },
  // v124_1277: {
  //   width: 40,
  //   height: 40,
  //   backgroundColor: 'rgba(217,217,217,1)',
  //   opacity: 1,
  //   position: 'absolute',
  //   top: 26,
  //   left: 24,
  //   borderRadius: 50,
  // },
  // v124_1278: {
  //   width: 160,
  //   height: 53,
  //   // background: 'url("../images/v124_1278.png")',
  //   // backgroundRepeat: 'no-repeat',
  //   // backgroundPosition: 'center center',
  //   // backgroundSize: 'cover',
  //   margin: 5,
  //   opacity: 1,
  //   position: 'absolute',
  //   top: 20,
  //   left: 84,
  //   overflow: 'hidden',
  // },
  // v124_1279: {
  //   width: 89,
  //   color: 'rgba(0,0,0,1)',
  //   position: 'relative',
  //   top: 0,
  //   left: 0,
  //   fontFamily: 'Circular Std',
  //   fontWeight: '500',
  //   fontSize: 17,
  //   opacity: 1,
  //   textAlign: 'left',
  // },
  // v124_1280: {
  //   width: 160,
  //   color: 'rgba(0,0,0,1)',
  //   position: 'absolute',
  //   top: 29,
  //   left: 0,
  //   fontFamily: 'Circular Std',
  //   fontWeight: 'normal',
  //   fontSize: 17,
  //   opacity: 0.5,
  //   textAlign: 'left',
  // },
  // v124_1281: {
  //   width: 393,
  //   height: 93,
  //   // background: 'url("../images/v124_1281.png")',
  //   // backgroundRepeat: 'no-repeat',
  //   // backgroundPosition: 'center center',
  //   // backgroundSize: 'cover',
  //   paddingVertical: 20,
  //   paddingHorizontal: 24,
  //   margin: 20,
  //   opacity: 1,
  //   position: 'absolute',
  //   top: 186,
  //   left: 0,
  //   overflow: 'hidden',
  // },
  // v124_1282: {
  //   width: 40,
  //   height: 40,
  //   backgroundColor: 'rgba(217,217,217,1)',
  //   opacity: 1,
  //   position: 'absolute',
  //   top: 26,
  //   left: 24,
  //   borderRadius: 50,
  // },
  // v124_1283: {
  //   width: 143,
  //   height: 53,
  //   // background: 'url("../images/v124_1283.png")',
  //   // backgroundRepeat: 'no-repeat',
  //   // backgroundPosition: 'center center',
  //   // backgroundSize: 'cover',
  //   margin: 5,
  //   opacity: 1,
  //   position: 'absolute',
  //   top: 20,
  //   left: 84,
  //   overflow: 'hidden',
  // },
  ppl_sec: {
    width: 370,
    height: 233,
    // background: 'url("../images/v124_1286.png")',
    // backgroundRepeat: 'no-repeat',
    // backgroundPosition: 'center center',
    // backgroundSize: 'cover',
    opacity: 1,
    // position: 'absolute',
    top: 70, //562
    left: 0,
    overflow: 'hidden',
  },
  ppl_txt: {
    width: 61,
    color: 'rgba(102,102,102,1)',
    // position: 'absolute',
    top: 0,
    left: 29,
    fontFamily: 'Circular Std',
    fontWeight: '500',
    fontSize: 17,
    opacity: 1,
    textAlign: 'center',
  },
  people: {
    width: 350,
    height: 159,
    // background: 'url("../images/v124_1288.png")',
    // backgroundRepeat: 'no-repeat',
    // backgroundPosition: 'center center',
    // backgroundSize: 'cover',
    margin: 0,
    opacity: 1,
    // position: 'absolute',
    bottom: 20,
    left: 0,
    overflow: 'hidden',
  },
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
    position: 'absolute',
    top: 138,
    left: 22,
    borderRadius: 52,
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
  // v124_1305: {
  //   width: 23,
  //   height: 23,
  //   // background: 'url("../images/v124_1305.png")',
  //   // backgroundRepeat: 'no-repeat',
  //   // backgroundPosition: 'center center',
  //   // backgroundSize: 'cover',
  //   opacity: 1,
  //   position: 'absolute',
  //   top: 0,
  //   left: 1,
  //   overflow: 'hidden',
  // },
  // v124_1306: {
  //   width: 23,
  //   height: 23,
  //   backgroundColor: 'rgba(102,102,102,1)',
  //   opacity: 1,
  //   position: 'relative',
  //   top: 0,
  //   left: 0,
  // },
  // v124_1307: {
  //   width: 11,
  //   height: 11,
  //   backgroundColor: 'rgba(255,255,255,1)',
  //   opacity: 1,
  //   position: 'absolute',
  //   top: 6,
  //   left: 7,
  // },
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
    top: 570, //530
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
