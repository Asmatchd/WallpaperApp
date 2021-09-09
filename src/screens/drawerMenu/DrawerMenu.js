/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import {Avatar} from 'react-native-elements';

export class DrawerMenu extends React.Component {
  render() {
    return (
      <ScrollView>
        <View
          style={{
            flex: 1,
            // backgroundColor: '#ffa',
          }}>
          <View
            style={{
              height: h('25%'),
              backgroundColor: '#000',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Avatar
              size="large"
              rounded
              // title="MF"
              containerStyle={{
                backgroundColor: '#0007',
              }}
              source={require('../../assets/app-logo.jpg')}
            />
            <Text
              style={{
                color: '#fff',
                fontSize: h('3.5%'),
              }}>
              HD Wallpapers
            </Text>
            <Text
              style={{
                color: '#fff',
                fontSize: h('1.5%'),
              }}>
              Version: 1.3.6
            </Text>
          </View>
          <View
            style={{
              height: h('50%'),
              // backgroundColor: '#aaf',
              marginTop: h('1%'),
              borderBottomWidth: h('0.1%'),
              borderBottomColor: 'rgba(0,0,0,0.2)',
            }}>
            <TouchableOpacity
              style={{
                height: h('6%'),
                // width: '95%',
                // backgroundColor: 'green',
                flexDirection: 'row',
                marginTop: h('1.5%'),
              }}>
              <View
                style={{
                  height: '100%',
                  width: '16%',
                  backgroundColor: '#302210',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginLeft: h('2%'),
                  borderRadius: h('2.3%'),
                }}>
                <Image
                  style={{
                    height: 25,
                    width: 25,
                  }}
                  source={require('../../assets/wall-clock.png')}
                />
              </View>
              <View
                style={{
                  height: '100%',
                  width: '75%',
                  // backgroundColor: '#afa',
                  // alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: h('2%'),
                    marginLeft: h('2.5%'),
                  }}>
                  HD Auto Wallpapers
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: h('6%'),
                // width: '95%',
                // backgroundColor: 'green',
                flexDirection: 'row',
                marginTop: h('1%'),
              }}>
              <View
                style={{
                  height: '100%',
                  width: '16%',
                  backgroundColor: '#3b4480',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginLeft: h('2%'),
                  borderRadius: h('2.3%'),
                }}>
                <Image
                  style={{
                    height: 25,
                    width: 25,
                  }}
                  source={require('../../assets/removeAds.png')}
                />
              </View>
              <View
                style={{
                  height: '100%',
                  width: '75%',
                  // backgroundColor: '#afa',
                  // alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: h('2%'),
                    marginLeft: h('2.5%'),
                  }}>
                  Remove Ads
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: h('6%'),
                // width: '95%',
                // backgroundColor: 'green',
                flexDirection: 'row',
                marginTop: h('1%'),
              }}>
              <View
                style={{
                  height: '100%',
                  width: '16%',
                  backgroundColor: '#27b35f',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginLeft: h('2%'),
                  borderRadius: h('2.3%'),
                }}>
                <Image
                  style={{
                    height: 25,
                    width: 25,
                  }}
                  source={require('../../assets/notification.png')}
                />
              </View>
              <View
                style={{
                  height: '100%',
                  width: '75%',
                  // backgroundColor: '#afa',
                  // alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: h('2%'),
                    marginLeft: h('2.5%'),
                  }}>
                  Notification
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: h('6%'),
                // width: '95%',
                // backgroundColor: 'green',
                flexDirection: 'row',
                marginTop: h('1%'),
              }}>
              <View
                style={{
                  height: '100%',
                  width: '16%',
                  backgroundColor: '#eb710e',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginLeft: h('2%'),
                  borderRadius: h('2.3%'),
                }}>
                <Image
                  style={{
                    height: 25,
                    width: 25,
                  }}
                  source={require('../../assets/privacy-policy.png')}
                />
              </View>
              <View
                style={{
                  height: '100%',
                  width: '75%',
                  // backgroundColor: '#afa',
                  // alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: h('2%'),
                    marginLeft: h('2.5%'),
                  }}>
                  Privacy Policy
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: h('6%'),
                // width: '95%',
                // backgroundColor: 'green',
                flexDirection: 'row',
                marginTop: h('1%'),
              }}>
              <View
                style={{
                  height: '100%',
                  width: '16%',
                  backgroundColor: '#692c91',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginLeft: h('2%'),
                  borderRadius: h('2.3%'),
                }}>
                <Image
                  style={{
                    height: 25,
                    width: 25,
                  }}
                  source={require('../../assets/moreApp.png')}
                />
              </View>
              <View
                style={{
                  height: '100%',
                  width: '75%',
                  // backgroundColor: '#afa',
                  // alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: h('2%'),
                    marginLeft: h('2.5%'),
                  }}>
                  More Apps
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: h('6%'),
                // width: '95%',
                // backgroundColor: 'green',
                flexDirection: 'row',
                marginTop: h('1%'),
              }}>
              <View
                style={{
                  height: '100%',
                  width: '16%',
                  backgroundColor: '#e0b000',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginLeft: h('2%'),
                  borderRadius: h('2.3%'),
                }}>
                <Image
                  style={{
                    height: 25,
                    width: 25,
                  }}
                  source={require('../../assets/rateApp.png')}
                />
              </View>
              <View
                style={{
                  height: '100%',
                  width: '75%',
                  // backgroundColor: '#afa',
                  // alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: h('2%'),
                    marginLeft: h('2.5%'),
                  }}>
                  Rate Us
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: h('6%'),
                // width: '95%',
                // backgroundColor: 'green',
                flexDirection: 'row',
                marginTop: h('1%'),
              }}>
              <View
                style={{
                  height: '100%',
                  width: '16%',
                  backgroundColor: '#63db00',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginLeft: h('2%'),
                  borderRadius: h('2.3%'),
                }}>
                <Image
                  style={{
                    height: 25,
                    width: 25,
                  }}
                  source={require('../../assets/shareApp.png')}
                />
              </View>
              <View
                style={{
                  height: '100%',
                  width: '75%',
                  // backgroundColor: '#afa',
                  // alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: h('2%'),
                    marginLeft: h('2.5%'),
                  }}>
                  Share
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: h('20%'),
              // backgroundColor: '#faf',
            }}>
            <Text
              style={{
                color: 'rgba(0,0,0,0.4)',
                marginLeft: h('1%'),
                marginTop: h('0.5%'),
              }}>
              Follow Us
            </Text>
            <TouchableOpacity
              style={{
                height: h('6%'),
                // width: '95%',
                // backgroundColor: 'green',
                flexDirection: 'row',
                marginTop: h('1.5%'),
              }}>
              <View
                style={{
                  height: '100%',
                  width: '16%',
                  // backgroundColor: '#692c91',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginLeft: h('2%'),
                  borderRadius: h('2.3%'),
                }}>
                <Image
                  style={{
                    height: 35,
                    width: 35,
                  }}
                  source={require('../../assets/instagram.png')}
                />
              </View>
              <View
                style={{
                  height: '100%',
                  width: '75%',
                  // backgroundColor: '#afa',
                  // alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: h('2%'),
                    marginLeft: h('2.5%'),
                  }}>
                  Instagram
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: h('6%'),
                // width: '95%',
                // backgroundColor: 'green',
                flexDirection: 'row',
                marginTop: h('1.5%'),
              }}>
              <View
                style={{
                  height: '100%',
                  width: '16%',
                  // backgroundColor: '#692c91',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginLeft: h('2%'),
                  borderRadius: h('2.3%'),
                }}>
                <Image
                  style={{
                    height: 35,
                    width: 35,
                  }}
                  source={require('../../assets/facebook.png')}
                />
              </View>
              <View
                style={{
                  height: '100%',
                  width: '75%',
                  // backgroundColor: '#afa',
                  // alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: h('2%'),
                    marginLeft: h('2.5%'),
                  }}>
                  Facebook
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}
