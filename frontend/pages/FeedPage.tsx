import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
// import { User } from '../types/types';
// import { getAllUsers } from '../services/users';
// import Logo from '../assets/test.svg';
import { SvgXml } from 'react-native-svg';
// import './Feed-Page.css';
import Post from '../components/Post';

const AddSvg = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.999 23.9963C18.5714 23.9963 23.9974 18.5627 23.9974 12C23.9974 5.42768 18.5618 0.00369263 11.9895 0.00369263C5.42871 0.00369263 0.00260925 5.42768 0.00260925 12C0.00260925 18.5627 5.43823 23.9963 11.999 23.9963Z" fill="#666666"/>
<path d="M6.32292 12.0074C6.32292 11.3346 6.79536 10.858 7.46407 10.858H10.8587V7.46124C10.8587 6.79462 11.3279 6.31058 11.9892 6.31058C12.6621 6.31058 13.1387 6.79462 13.1387 7.46124V10.858H16.545C17.2041 10.858 17.6861 11.3346 17.6861 12.0074C17.6861 12.6709 17.2041 13.1284 16.545 13.1284H13.1387V16.5347C13.1387 17.2012 12.6621 17.6737 11.9892 17.6737C11.3279 17.6737 10.8587 17.1917 10.8587 16.5347V13.1284H7.46407C6.79536 13.1284 6.32292 12.6709 6.32292 12.0074Z" fill="white"/>
</svg>
`;

export default function FeedPage() {
  //   const [users, setUsers] = useState<User[]>();
  //   // const logoXml = Logo ? Logo.toString() : '';
  //   useEffect(() => {
  //     getAllUsers().then(data => setUsers(data.slice(8)));
  //   }, []);
  //   useEffect(() => {
  //     console.log(users);
  //   }, [users]);

  return (
    <View>
      <View>
        {/* <link
          href="https://fonts.googleapis.com/css?family=Circular+Std&display=swap"
          rel="stylesheet"
        /> */}
        {/* <link
          href="https://fonts.googleapis.com/css?family=SF+Pro+Text&display=swap"
          rel="stylesheet"
        /> */}
        {/* <link href="./css/main.css" rel="stylesheet" /> */}
      </View>
      <View>
        <View /*style={styles.v124_1260}*/>
          {/* <View style={styles.name}></View>
          <View style={styles.name}></View>
          <View style={styles.name}></View> */}
          <View style={styles.v124_1264}>
            <Text style={styles.v124_1265}>Explore</Text>
            <Text style={styles.v124_1266}>Following</Text>
          </View>
          <View style={styles.horizontalLine3}></View>
          <View style={styles.horizontalLine4}></View>
          {/* <View style={styles.v124_1267}></View> */}
          <View style={styles.v124_1268}>
            <Text style={styles.v124_1269}>Posts</Text>
            <View style={styles.v124_1270}>
              <Post
                name="Anthony"
                comment="Sweet returns this month!"
                postIndex={1}
              />
              <Post
                name="Kevin Daliri"
                comment="Check out this trade."
                postIndex={2}
              />
              <Post
                name="Bryan Carson"
                comment="Thank you carbon!"
                postIndex={3}
              />
            </View>
          </View>
          <View style={styles.horizontalLine2}></View>
          <View style={styles.v124_1286}>
            <Text style={styles.v124_1287}>People</Text>
            <View style={styles.v124_1288}>
              <View style={styles.v124_1289}>
                <View style={styles.v124_1290}></View>
                <View style={styles.v124_1291}>
                  <Text style={styles.v124_1292}>Michael</Text>
                </View>
              </View>
              <View style={styles.v124_1293}>
                <View style={styles.v124_1294}></View>
                <View style={styles.v124_1295}>
                  <Text style={styles.v124_1296}>Isabella</Text>
                </View>
              </View>
              <View style={styles.v124_1297}>
                <View style={styles.v124_1298}></View>
                <View style={styles.v124_1299}>
                  <Text style={styles.v124_1300}>Tony Alvarez</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.v124_1301}>
            <View style={styles.v124_1302}></View>
            <Text style={styles.v124_1303}>Search</Text>
            <View style={styles.v124_1304}>
              <SvgXml xml={AddSvg} width="30" height="30" />
              {/* <View style={styles.v124_1305}>
                <View style={styles.v124_1306}></View>
                <View style={styles.v124_1307}></View>
              </View> */}
            </View>
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
  v124_1264: {
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
  v124_1265: {
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
  v124_1266: {
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
  v124_1267: {
    width: 202,
    // background: 'url("../images/v124_1267.png")',
    opacity: 1,
    position: 'absolute',
    top: 116,
    left: 3,
    borderWidth: 1.5,
    borderColor: 'rgba(0,0,0,1)',
  },
  v124_1268: {
    width: 493,
    height: 322,
    // background: 'url("../images/v124_1268.png")',
    // backgroundRepeat: 'no-repeat',
    // backgroundPosition: 'center center',
    // backgroundSize: 'cover',
    opacity: 1,
    position: 'absolute',
    top: 215,
    left: 0,
    overflow: 'hidden',
  },
  v124_1269: {
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
  v124_1270: {
    width: 493,
    height: 279,
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
  v124_1286: {
    width: 350,
    height: 203,
    // background: 'url("../images/v124_1286.png")',
    // backgroundRepeat: 'no-repeat',
    // backgroundPosition: 'center center',
    // backgroundSize: 'cover',
    opacity: 1,
    position: 'absolute',
    top: 562,
    left: 0,
    overflow: 'hidden',
  },
  v124_1287: {
    width: 61,
    color: 'rgba(102,102,102,1)',
    position: 'absolute',
    top: 0,
    left: 29,
    fontFamily: 'Circular Std',
    fontWeight: '500',
    fontSize: 17,
    opacity: 1,
    textAlign: 'center',
  },
  v124_1288: {
    width: 350,
    height: 159,
    // background: 'url("../images/v124_1288.png")',
    // backgroundRepeat: 'no-repeat',
    // backgroundPosition: 'center center',
    // backgroundSize: 'cover',
    margin: 0,
    opacity: 1,
    position: 'absolute',
    top: 12,
    left: 0,
    overflow: 'hidden',
  },
  v124_1289: {
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
  v124_1290: {
    width: 75,
    height: 75,
    backgroundColor: 'rgba(217,217,217,1)',
    opacity: 1,
    position: 'absolute',
    top: 20,
    left: 0,
    borderRadius: 50,
  },
  v124_1291: {
    width: 58,
    height: 24,
    // background: 'url("../images/v124_1291.png")',
    // backgroundRepeat: 'no-repeat',
    // backgroundPosition: 'center center',
    // backgroundSize: 'cover',
    margin: 5,
    opacity: 1,
    position: 'absolute',
    top: 115,
    left: 9,
    overflow: 'hidden',
  },
  v124_1292: {
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
  v124_1293: {
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
  v124_1294: {
    width: 75,
    height: 75,
    backgroundColor: 'rgba(217,217,217,1)',
    opacity: 1,
    position: 'absolute',
    top: 20,
    left: 0,
    borderRadius: 50,
  },
  v124_1295: {
    width: 55,
    height: 24,
    // background: 'url("../images/v124_1295.png")',
    // backgroundRepeat: 'no-repeat',
    // backgroundPosition: 'center center',
    // backgroundSize: 'cover',
    margin: 5,
    opacity: 1,
    position: 'absolute',
    top: 115,
    left: 10,
    overflow: 'hidden',
  },
  v124_1296: {
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
  v124_1297: {
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
  v124_1298: {
    width: 75,
    height: 75,
    backgroundColor: 'rgba(217,217,217,1)',
    opacity: 1,
    position: 'absolute',
    top: 20,
    left: 8,
    borderRadius: 50,
  },
  v124_1299: {
    width: 92,
    height: 24,
    // background: 'url("../images/v124_1299.png")',
    // backgroundRepeat: 'no-repeat',
    // backgroundPosition: 'center center',
    // backgroundSize: 'cover',
    margin: 5,
    opacity: 1,
    position: 'absolute',
    top: 115,
    left: 0,
    overflow: 'hidden',
  },
  v124_1300: {
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
  v124_1301: {
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
  v124_1302: {
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
  v124_1303: {
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
  v124_1304: {
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
  v124_1305: {
    width: 23,
    height: 23,
    // background: 'url("../images/v124_1305.png")',
    // backgroundRepeat: 'no-repeat',
    // backgroundPosition: 'center center',
    // backgroundSize: 'cover',
    opacity: 1,
    position: 'absolute',
    top: 0,
    left: 1,
    overflow: 'hidden',
  },
  v124_1306: {
    width: 23,
    height: 23,
    backgroundColor: 'rgba(102,102,102,1)',
    opacity: 1,
    position: 'relative',
    top: 0,
    left: 0,
  },
  v124_1307: {
    width: 11,
    height: 11,
    backgroundColor: 'rgba(255,255,255,1)',
    opacity: 1,
    position: 'absolute',
    top: 6,
    left: 7,
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
