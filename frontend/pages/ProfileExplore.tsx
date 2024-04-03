import { StyleSheet, Text, View, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
// import { User } from '../types/types';
// import { getAllUsers } from '../services/users';
// import Logo from '../assets/test.svg';
import { SvgXml } from 'react-native-svg';
// import './Feed-Page.css';
import { useFonts } from 'expo-font';
// import User from ../types/types.d.ts;
// import PostType from ../types/types.d.ts;

const VectorSvg = `
<svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.3516 5.2118L6.5307 0.40036C6.25781 0.127475 5.88914 0.113148 5.60191 0.400377L0.785724 5.21656C0.517624 5.48466 0.541563 5.87245 0.771361 6.10225C1.00116 6.33204 1.40331 6.32247 1.62832 6.09746L3.29435 4.43142L5.55405 2.01853L5.44392 3.68937L5.45349 13.1877C5.4535 13.36 5.51573 13.518 5.62108 13.6234C5.85085 13.8531 6.27217 13.8627 6.51155 13.6234C6.62166 13.5133 6.68865 13.3696 6.68388 13.1925L6.68866 3.68937L6.58333 2.0042L8.73288 4.32612L10.5042 6.09746C10.7292 6.32248 11.1362 6.33684 11.3708 6.10222C11.6006 5.87244 11.6101 5.4703 11.3516 5.2118Z" fill="#3F943D"/>
</svg>
`;

const AddSvg = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.999 23.9963C18.5714 23.9963 23.9974 18.5627 23.9974 12C23.9974 5.42768 18.5618 0.00369263 11.9895 0.00369263C5.42871 0.00369263 0.00260925 5.42768 0.00260925 12C0.00260925 18.5627 5.43823 23.9963 11.999 23.9963Z" fill="#666666"/>
<path d="M6.32292 12.0074C6.32292 11.3346 6.79536 10.858 7.46407 10.858H10.8587V7.46124C10.8587 6.79462 11.3279 6.31058 11.9892 6.31058C12.6621 6.31058 13.1387 6.79462 13.1387 7.46124V10.858H16.545C17.2041 10.858 17.6861 11.3346 17.6861 12.0074C17.6861 12.6709 17.2041 13.1284 16.545 13.1284H13.1387V16.5347C13.1387 17.2012 12.6621 17.6737 11.9892 17.6737C11.3279 17.6737 10.8587 17.1917 10.8587 16.5347V13.1284H7.46407C6.79536 13.1284 6.32292 12.6709 6.32292 12.0074Z" fill="white"/>
</svg>
`;

export default function ProfileExplore() {
  const [password, setPassword] = useState('');

  const handlePasswordChange = (text: string) => {
    setPassword(text);
  };

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.top_bar}>
          <Text style={styles.explore}>Explore</Text>
          <Text style={styles.follow}>Following</Text>
        </View>
        <View style={styles.horizontalLine3}></View>
        <View style={styles.horizontalLine4}></View>
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

        <View style={{ width: 393, height: 709, position: 'relative' }}>
          <View
            style={{ width: 393, left: -1, top: 579.64, position: 'absolute' }}
          />
          <View
            style={{
              width: 393,
              height: 197,
              left: -17,
              top: 195.64,
              position: 'absolute',
            }}>
            <View
              style={{
                width: 393,
                height: 197,
                left: 0,
                top: 0,
                position: 'absolute',
              }}>
              <View
                style={{
                  paddingTop: 20,
                  paddingBottom: 20,
                  left: 24,
                  top: 0,
                  position: 'absolute',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 15,
                }}>
                <View
                  style={{
                    width: 100,
                    height: 100,
                    backgroundColor: '#D9D9D9',
                    borderRadius: 9999,
                  }}
                />
                <View
                  style={{
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    gap: 5,
                    display: 'flex',
                  }}>
                  <View
                    style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 16,
                        fontFamily: 'SF Pro',
                        fontWeight: '400',
                        lineHeight: 24,
                      }}>
                      Michael
                    </Text>
                    <Text
                      style={{
                        color: 'rgba(0, 0, 0, 0.48)',
                        fontSize: 10,
                        fontFamily: 'SF Pro',
                        fontWeight: '400',
                        lineHeight: 18,
                      }}>
                      10+ mutuals
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  paddingTop: 20,
                  paddingBottom: 20,
                  left: 181,
                  top: -16,
                  position: 'absolute',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 15,
                }}>
                <View
                  style={{
                    width: 75,
                    height: 75,
                    backgroundColor: '#D9D9D9',
                    borderRadius: 9999,
                  }}
                />
                <View
                  style={{
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    gap: 5,
                    display: 'flex',
                  }}>
                  <View
                    style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 16,
                        fontFamily: 'SF Pro',
                        fontWeight: '400',
                        lineHeight: 24,
                      }}>
                      Isabella
                    </Text>
                    <Text
                      style={{
                        color: 'rgba(0, 0, 0, 0.48)',
                        fontSize: 10,
                        fontFamily: 'SF Pro',
                        fontWeight: '400',
                        lineHeight: 18,
                      }}>
                      trending
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  width: 96,
                  height: 166,
                  left: 297,
                  top: 31,
                  position: 'absolute',
                }}>
                <View
                  style={{
                    width: 85,
                    height: 85,
                    left: 10.5,
                    top: 20,
                    position: 'absolute',
                    backgroundColor: '#D9D9D9',
                    borderRadius: 9999,
                  }}
                />
                <View
                  style={{
                    left: 0,
                    top: 110,
                    position: 'absolute',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    gap: 5,
                  }}>
                  <View
                    style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 16,
                        fontFamily: 'SF Pro',
                        fontWeight: '400',
                        lineHeight: 24,
                      }}>
                      Tony Alvarez
                    </Text>
                    <Text
                      style={{
                        color: 'rgba(0, 0, 0, 0.48)',
                        fontSize: 10,
                        fontFamily: 'SF Pro',
                        fontWeight: '400',
                        lineHeight: 18,
                      }}>
                      similar
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  paddingTop: 20,
                  paddingBottom: 20,
                  left: 169,
                  top: 141,
                  position: 'absolute',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 15,
                }}>
                <View
                  style={{
                    width: 100,
                    height: 100,
                    backgroundColor: '#D9D9D9',
                    borderRadius: 9999,
                  }}
                />
                <View
                  style={{
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    gap: 5,
                    display: 'flex',
                  }}>
                  <View
                    style={{
                      width: 58,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 16,
                        fontFamily: 'SF Pro',
                        fontWeight: '400',
                        lineHeight: 24,
                      }}>
                      Rue
                    </Text>
                    <Text
                      style={{
                        color: 'rgba(0, 0, 0, 0.48)',
                        fontSize: 10,
                        fontFamily: 'SF Pro',
                        fontWeight: '400',
                        lineHeight: 18,
                      }}>
                      trending
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              width: 393,
              height: 197,
              left: 0,
              top: 372.64,
              position: 'absolute',
            }}>
            <View
              style={{
                width: 393,
                height: 197,
                left: 0,
                top: 0,
                position: 'absolute',
              }}>
              <View
                style={{
                  paddingTop: 20,
                  paddingBottom: 20,
                  left: 28,
                  top: 0,
                  position: 'absolute',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 15,
                }}>
                <View
                  style={{
                    width: 75,
                    height: 75,
                    backgroundColor: '#D9D9D9',
                    borderRadius: 9999,
                  }}
                />
                <View
                  style={{
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    gap: 5,
                    display: 'flex',
                  }}>
                  <View
                    style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 16,
                        fontFamily: 'SF Pro',
                        fontWeight: '400',
                        lineHeight: 24,
                      }}>
                      John
                    </Text>
                    <Text
                      style={{
                        color: 'rgba(0, 0, 0, 0.48)',
                        fontSize: 10,
                        fontFamily: 'SF Pro',
                        fontWeight: '400',
                        lineHeight: 18,
                      }}>
                      10+ mutuals
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  paddingTop: 20,
                  paddingBottom: 20,
                  left: 294,
                  top: 24,
                  position: 'absolute',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 15,
                }}>
                <View
                  style={{
                    width: 75,
                    height: 75,
                    backgroundColor: '#D9D9D9',
                    borderRadius: 9999,
                  }}
                />
                <View
                  style={{
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    gap: 5,
                    display: 'flex',
                  }}>
                  <View
                    style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 16,
                        fontFamily: 'SF Pro',
                        fontWeight: '400',
                        lineHeight: 24,
                      }}>
                      Pepita
                    </Text>
                    <Text
                      style={{
                        color: 'rgba(0, 0, 0, 0.48)',
                        fontSize: 10,
                        fontFamily: 'SF Pro',
                        fontWeight: '400',
                        lineHeight: 18,
                      }}>
                      similar
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              width: 393,
              left: 1,
              top: 544.64,
              position: 'absolute',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              gap: 10,
            }}>
            <View style={{ width: 393, height: 172, position: 'relative' }}>
              <View
                style={{
                  paddingTop: 20,
                  paddingBottom: 20,
                  left: 32,
                  top: 13,
                  position: 'absolute',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 15,
                }}>
                <View
                  style={{
                    width: 75,
                    height: 75,
                    backgroundColor: '#D9D9D9',
                    borderRadius: 9999,
                  }}
                />
                <View
                  style={{
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    gap: 5,
                    display: 'flex',
                  }}>
                  <View
                    style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 16,
                        fontFamily: 'SF Pro',
                        fontWeight: '400',
                        lineHeight: 24,
                      }}>
                      Megan
                    </Text>
                    <Text
                      style={{
                        color: 'rgba(0, 0, 0, 0.48)',
                        fontSize: 10,
                        fontFamily: 'SF Pro',
                        fontWeight: '400',
                        lineHeight: 18,
                      }}>
                      10+ mutuals
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  paddingTop: 20,
                  paddingBottom: 20,
                  left: 154,
                  top: -21,
                  position: 'absolute',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 15,
                }}>
                <View
                  style={{
                    width: 85,
                    height: 85,
                    backgroundColor: '#D9D9D9',
                    borderRadius: 9999,
                  }}
                />
                <View
                  style={{
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    gap: 5,
                    display: 'flex',
                  }}>
                  <View
                    style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 16,
                        fontFamily: 'SF Pro',
                        fontWeight: '400',
                        lineHeight: 24,
                      }}>
                      Rocco
                    </Text>
                    <Text
                      style={{
                        color: 'rgba(0, 0, 0, 0.48)',
                        fontSize: 10,
                        fontFamily: 'SF Pro',
                        fontWeight: '400',
                        lineHeight: 18,
                      }}>
                      trending
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  paddingTop: 20,
                  paddingBottom: 20,
                  left: 275,
                  top: 0,
                  position: 'absolute',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 15,
                }}>
                <View
                  style={{
                    width: 100,
                    height: 100,
                    backgroundColor: '#D9D9D9',
                    borderRadius: 9999,
                  }}
                />
                <View
                  style={{
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    gap: 5,
                    display: 'flex',
                  }}>
                  <View
                    style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 16,
                        fontFamily: 'SF Pro',
                        fontWeight: '400',
                        lineHeight: 24,
                      }}>
                      Blair
                    </Text>
                    <Text
                      style={{
                        color: 'rgba(0, 0, 0, 0.48)',
                        fontSize: 10,
                        fontFamily: 'SF Pro',
                        fontWeight: '400',
                        lineHeight: 18,
                      }}>
                      similar
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              width: 393,
              left: 2,
              top: 716.64,
              position: 'absolute',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              gap: 10,
            }}>
            <View
              style={{
                height: 172,
                paddingLeft: 24,
                paddingRight: 24,
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                gap: 57,
                display: 'flex',
              }}>
              <View
                style={{
                  paddingTop: 20,
                  paddingBottom: 20,
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 15,
                }}>
                <View
                  style={{
                    width: 75,
                    height: 75,
                    borderRadius: 9999,
                  }}
                />
                <View
                  style={{
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    gap: 5,
                    display: 'flex',
                  }}>
                  <View
                    style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 16,
                        fontFamily: 'SF Pro',
                        fontWeight: '400',
                        lineHeight: 24,
                      }}>
                      Michael
                    </Text>
                    <Text
                      style={{
                        color: 'rgba(0, 0, 0, 0.48)',
                        fontSize: 10,
                        fontFamily: 'SF Pro',
                        fontWeight: '400',
                        lineHeight: 18,
                      }}>
                      10+ mutuals
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  paddingTop: 20,
                  paddingBottom: 20,
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 15,
                }}>
                {/* <img
                  style={{ width: 75, height: 75, borderRadius: 9999 }}
                  src="https://via.placeholder.com/75x75"
                /> */}
                <View
                  style={{
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    gap: 5,
                    display: 'flex',
                  }}>
                  <View
                    style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 16,
                        fontFamily: 'SF Pro',
                        fontWeight: '400',
                        lineHeight: 24,
                      }}>
                      Isabella
                    </Text>
                    <Text
                      style={{
                        color: 'rgba(0, 0, 0, 0.48)',
                        fontSize: 10,
                        fontFamily: 'SF Pro',
                        fontWeight: '400',
                        lineHeight: 18,
                      }}>
                      trending
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  paddingTop: 20,
                  paddingBottom: 20,
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 15,
                }}>
                {/* <img
                  style={{ width: 75, height: 75, borderRadius: 9999 }}
                  src="https://via.placeholder.com/75x75"
                /> */}
                <View
                  style={{
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    gap: 5,
                    display: 'flex',
                  }}>
                  <View
                    style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 16,
                        fontFamily: 'SF Pro',
                        fontWeight: '400',
                        lineHeight: 24,
                      }}>
                      Tony Alvarez
                    </Text>
                    <Text
                      style={{
                        color: 'rgba(0, 0, 0, 0.48)',
                        fontSize: 10,
                        fontFamily: 'SF Pro',
                        fontWeight: '400',
                        lineHeight: 18,
                      }}>
                      similar
                    </Text>
                  </View>
                </View>
              </View>
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
    top: -50,
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
    height: 65,
    backgroundColor: '#F7F7F7',
    // backgroundRepeat: 'no-repeat',
    // backgroundPosition: 'center center',
    // backgroundSize: 'cover',
    padding: 20,
    margin: 100,
    position: 'absolute',
    top: -49,
    left: -100,
    overflow: 'hidden',
    zIndex: 2,
  },
  explore: {
    width: 67,
    color: 'rgba(0,0,0,1)',
    position: 'absolute',
    top: 30,
    left: 55,
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
    top: 30,
    right: 65,
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
  button1: {
    width: 493,
    height: 160,
    position: 'absolute',
    top: 15,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button2: {
    width: 493,
    height: 160,
    position: 'absolute',
    bottom: 40,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
