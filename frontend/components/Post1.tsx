import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
// import { User } from '../types/types';
// import { getAllUsers } from '../services/users';
// import Logo from '../assets/test.svg';
import { SvgXml } from 'react-native-svg';
// import './Feed-Page.css';
import { useFonts } from 'expo-font';
// import User from ../types/types.d.ts;
// import PostType from ../types/types.d.ts;

interface PostProps {
  name: string;
  comment: string;
  postIndex: number;
  subject: string;
  up: number;
  down: number;
  type: number;
  // user_id: number;
  // user: User;
  // PostType: PostType;
  // NumData: number;
  // TickerSymbol: string;
  // TimeStamp: time.Time;
  // Comment: string;
  // Title: string;
}

const VectorSvg = `
<svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.3516 5.2118L6.5307 0.40036C6.25781 0.127475 5.88914 0.113148 5.60191 0.400377L0.785724 5.21656C0.517624 5.48466 0.541563 5.87245 0.771361 6.10225C1.00116 6.33204 1.40331 6.32247 1.62832 6.09746L3.29435 4.43142L5.55405 2.01853L5.44392 3.68937L5.45349 13.1877C5.4535 13.36 5.51573 13.518 5.62108 13.6234C5.85085 13.8531 6.27217 13.8627 6.51155 13.6234C6.62166 13.5133 6.68865 13.3696 6.68388 13.1925L6.68866 3.68937L6.58333 2.0042L8.73288 4.32612L10.5042 6.09746C10.7292 6.32248 11.1362 6.33684 11.3708 6.10222C11.6006 5.87244 11.6101 5.4703 11.3516 5.2118Z" fill="#3F943D"/>
</svg>
`;

const Post1: React.FC<PostProps> = ({
  name,
  comment,
  postIndex,
  subject,
  up,
  down,
  type,
}) => {
  if (type == 1) {
    return (
      <View
        style={{
          width: 393,
          height: 160,
          paddingLeft: 24,
          paddingRight: 24,
          paddingTop: 25,
          paddingBottom: 25,
          borderTopWidth: 1,
          borderTopColor: 'rgba(0, 0, 0, 0.08)',
          borderBottomWidth: 1,
          borderBottomColor: 'rgba(0, 0, 0, 0.08)',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          // gap: 81,
          // display: 'inline-flex',
          flexDirection: 'row',
          top: 20,
        }}>
        <View
          style={{
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            gap: 15,
            display: 'flex',
          }}>
          <View
            style={{
              width: 35,
              height: 35,
              backgroundColor: '#999999',
              borderRadius: 9999,
            }}
          />
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              gap: 15,
            }}>
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                gap: 10,
                display: 'flex',
                left: 55,
                bottom: 60,
              }}>
              <View
                style={{
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  gap: 5,
                }}>
                <Text
                  style={{
                    color: '#666666',
                    fontSize: 16,
                    fontFamily: 'SF Pro Text',
                    fontWeight: '500',
                  }}>
                  Bryan Carson
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  gap: 5,
                  display: 'flex',
                }}>
                <Text
                  style={{
                    color: '#333333',
                    fontSize: 16,
                    fontFamily: 'SF Pro Text',
                    fontWeight: '500',
                  }}>
                  Netflix Returns
                </Text>
                <Text
                  style={{
                    width: 292,
                    color: '#666666',
                    fontSize: 16,
                    fontFamily: 'SF Pro Text',
                    fontWeight: '400',
                  }}>
                  I wanted you guys to check out my netflix trade! Let me know
                  what yall think..
                </Text>
              </View>
            </View>
            <View style={{ bottom: 80, left: 70 }}>
              <View
                style={{
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    width: 24,
                    height: 24,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View style={{ width: 18, height: 18, position: 'relative' }}>
                    <View
                      style={{
                        width: 18,
                        height: 18,
                        left: 50,
                        top: 10,
                        position: 'absolute',
                        backgroundColor: '#C2C2C2',
                      }}></View>
                  </View>
                </View>
                <Text
                  style={{
                    color: '#999999',
                    fontSize: 13,
                    fontFamily: 'SF Pro Text',
                    fontWeight: '500',
                    bottom: 10,
                  }}>
                  18
                </Text>
              </View>
              <View
                style={{
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  gap: 0,
                  display: 'flex',
                }}>
                <View style={{ width: 8, height: 8, position: 'relative' }}>
                  <View
                    style={{
                      width: 18,
                      height: 18,
                      right: 15,
                      bottom: 18,
                      position: 'absolute',
                      backgroundColor: '#C2C2C2',
                    }}></View>
                </View>

                <Text
                  style={{
                    color: '#999999',
                    fontSize: 13,
                    fontFamily: 'SF Pro Text',
                    fontWeight: '500',
                    bottom: 32,
                    left: 70,
                  }}>
                  2
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
  if (type == 2) {
    return (
      <View style={styles.v124_1276}>
        <View style={styles.horizontalLine}></View>
        <View style={styles.circle2}></View>
        <View style={styles.person2}>
          <Text style={styles.name2}>{name}</Text>
          <Text style={styles.comment2}>{comment}</Text>
        </View>
      </View>
    );
  }
  if (type == 3) {
    return (
      <View
        style={{
          width: 393,
          height: 160,
          paddingLeft: 24,
          paddingRight: 24,
          paddingTop: 25,
          paddingBottom: 25,
          borderTopWidth: 1,
          borderTopColor: 'rgba(0, 0, 0, 0.08)',
          borderBottomWidth: 1,
          borderBottomColor: 'rgba(0, 0, 0, 0.08)',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          // gap: 81,
          // display: 'inline-flex',
          flexDirection: 'row',
          top: 20,
        }}>
        <View
          style={{
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            gap: 15,
            display: 'flex',
          }}>
          <View
            style={{
              width: 35,
              height: 35,
              backgroundColor: '#999999',
              borderRadius: 9999,
            }}
          />
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              gap: 15,
            }}>
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                gap: 10,
                display: 'flex',
                left: 55,
                bottom: 60,
              }}>
              <View
                style={{
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  gap: 5,
                }}>
                <Text
                  style={{
                    color: '#666666',
                    fontSize: 16,
                    fontFamily: 'SF Pro Text',
                    fontWeight: '500',
                  }}>
                  Bryan Carson
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  gap: 5,
                  display: 'flex',
                }}>
                <Text
                  style={{
                    color: '#333333',
                    fontSize: 16,
                    fontFamily: 'SF Pro Text',
                    fontWeight: '500',
                  }}>
                  Netflix Returns
                </Text>
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
              </View>
            </View>
            <View style={{ bottom: 80, left: 70 }}>
              <View
                style={{
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    width: 24,
                    height: 24,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View style={{ width: 18, height: 18, position: 'relative' }}>
                    <View
                      style={{
                        width: 18,
                        height: 18,
                        left: 50,
                        top: 10,
                        position: 'absolute',
                        backgroundColor: '#C2C2C2',
                      }}></View>
                  </View>
                </View>
                <Text
                  style={{
                    color: '#999999',
                    fontSize: 13,
                    fontFamily: 'SF Pro Text',
                    fontWeight: '500',
                    bottom: 10,
                  }}>
                  18
                </Text>
              </View>
              <View
                style={{
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  gap: 0,
                  display: 'flex',
                }}>
                <View style={{ width: 8, height: 8, position: 'relative' }}>
                  <View
                    style={{
                      width: 18,
                      height: 18,
                      right: 15,
                      bottom: 18,
                      position: 'absolute',
                      backgroundColor: '#C2C2C2',
                    }}></View>
                </View>

                <Text
                  style={{
                    color: '#999999',
                    fontSize: 13,
                    fontFamily: 'SF Pro Text',
                    fontWeight: '500',
                    bottom: 32,
                    left: 70,
                  }}>
                  2
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
};

export default Post1;

const styles = StyleSheet.create({
  post1: {
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
  circle1: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(217,217,217,1)',
    opacity: 1,
    position: 'absolute',
    top: 6,
    left: 0,
    borderRadius: 50,
  },
  person1: {
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
  name1: {
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
  comment1: {
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
  circle2: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(217,217,217,1)',
    opacity: 1,
    position: 'absolute',
    top: 26,
    left: 24,
    borderRadius: 50,
  },
  person2: {
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
  name2: {
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
  comment2: {
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
