/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {AppHeader} from '../../components';

import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';

export class HomeScreen extends React.Component {
  state = {
    showHistory: false,
  };
  render() {
    return (
      <ScrollView>
        <View
          style={{
            flex: 1,
            // backgroundColor: '#faf',
          }}>
          <SafeAreaView />
          <StatusBar backgroundColor={'#000'} />
          <AppHeader
            leftIc={'list'}
            title={'HD Wallpapers'}
            leftPressed={() => {
              this.props.navigation.openDrawer();
            }}
          />
          <View
            style={{
              flex: 1,
              // backgroundColor: '#aaf',
            }}>
            <View
              style={{
                height: h('5%'),
                backgroundColor: '#000',
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                onPress={() => {
                  this.setState({showHistory: false});
                }}
                style={{
                  height: '100%',
                  width: '50%',
                  // backgroundColor: '#afa',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderBottomColor: '#1b91cc',
                  borderBottomWidth: this.state.showHistory === false ? 3 : 0,
                }}>
                <Text
                  style={{
                    fontSize: h('2.5%'),
                    color: 'white',
                  }}>
                  CATEGORIES
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.setState({showHistory: true});
                }}
                style={{
                  height: '100%',
                  width: '50%',
                  // backgroundColor: '#aa0',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderBottomColor: '#1b91cc',
                  borderBottomWidth: this.state.showHistory === true ? 3 : 0,
                }}>
                <Text
                  style={{
                    fontSize: h('2.5%'),
                    color: 'white',
                  }}>
                  RECENT
                </Text>
              </TouchableOpacity>
            </View>
            {this.state.showHistory === false ? (
              <View
                style={{
                  flex: 1,
                  backgroundColor: 'gray',
                }}>
                <View
                  style={{
                    height: h('28%'),
                    width: w('100%'),
                    //   backgroundColor: 'green',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.navigate('AbstractScreen');
                    }}
                    style={{
                      // backgroundColor: 'white',
                      height: h('28%'),
                      width: w('98%'),
                    }}>
                    {/* <ImageBackground
                  style={{}}
                  source={require('../../assets/tree.jpg')}></ImageBackground> */}
                    <ImageBackground
                      style={{
                        height: '100%',
                        width: '100%',
                        borderRadius: h('2%'),
                        borderColor: 'rgba(0,0,0,0.1)',
                        borderWidth: w('0.7%'),
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden',
                      }}
                      // imageStyle={{borderRadius: 6}}
                      source={require('../../assets/abstract.jpg')}>
                      <Text
                        style={{
                          color: '#fff',
                          fontSize: h('5%'),
                          fontWeight: 'bold',
                        }}>
                        Abstract
                      </Text>
                    </ImageBackground>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    height: h('28%'),
                    width: w('100%'),
                    // backgroundColor: 'green',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <TouchableOpacity
                    style={{
                      // backgroundColor: 'white',
                      height: h('28%'),
                      width: w('98%'),
                    }}>
                    <ImageBackground
                      style={{
                        height: '100%',
                        width: '100%',
                        borderRadius: h('2%'),
                        borderColor: 'rgba(0,0,0,0.1)',
                        borderWidth: w('0.7%'),
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden',
                      }}
                      // imageStyle={{borderRadius: 6}}
                      source={require('../../assets/animal.jpg')}>
                      <Text
                        style={{
                          color: '#fff',
                          fontSize: h('5%'),
                          fontWeight: 'bold',
                        }}>
                        Animals
                      </Text>
                    </ImageBackground>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    height: h('28%'),
                    width: w('100%'),
                    // backgroundColor: 'green',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <TouchableOpacity
                    style={{
                      // backgroundColor: 'white',
                      height: h('28%'),
                      width: w('98%'),
                    }}>
                    <ImageBackground
                      style={{
                        height: '100%',
                        width: '100%',
                        borderRadius: h('2%'),
                        borderColor: 'rgba(0,0,0,0.1)',
                        borderWidth: w('0.7%'),
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden',
                      }}
                      // imageStyle={{borderRadius: 6}}
                      source={require('../../assets/artistic.jpg')}>
                      <Text
                        style={{
                          color: '#fff',
                          fontSize: h('5%'),
                          fontWeight: 'bold',
                        }}>
                        Artistic
                      </Text>
                    </ImageBackground>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    height: h('28%'),
                    width: w('100%'),
                    //   backgroundColor: 'green',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <TouchableOpacity
                    style={{
                      // backgroundColor: 'white',
                      height: h('28%'),
                      width: w('98%'),
                    }}>
                    {/* <ImageBackground
                  style={{}}
                  source={require('../../assets/tree.jpg')}></ImageBackground> */}
                    <ImageBackground
                      style={{
                        height: '100%',
                        width: '100%',
                        borderRadius: h('2%'),
                        borderColor: 'rgba(0,0,0,0.1)',
                        borderWidth: w('0.7%'),
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden',
                      }}
                      // imageStyle={{borderRadius: 6}}
                      source={require('../../assets/astronomy.jpg')}>
                      <Text
                        style={{
                          color: '#fff',
                          fontSize: h('5%'),
                          fontWeight: 'bold',
                        }}>
                        Astronomy
                      </Text>
                    </ImageBackground>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    height: h('28%'),
                    width: w('100%'),
                    //   backgroundColor: 'green',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <TouchableOpacity
                    style={{
                      // backgroundColor: 'white',
                      height: h('28%'),
                      width: w('98%'),
                    }}>
                    {/* <ImageBackground
                  style={{}}
                  source={require('../../assets/tree.jpg')}></ImageBackground> */}
                    <ImageBackground
                      style={{
                        height: '100%',
                        width: '100%',
                        borderRadius: h('2%'),
                        borderColor: 'rgba(0,0,0,0.1)',
                        borderWidth: w('0.7%'),
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden',
                      }}
                      // imageStyle={{borderRadius: 6}}
                      source={require('../../assets/autumn.jpg')}>
                      <Text
                        style={{
                          color: '#fff',
                          fontSize: h('5%'),
                          fontWeight: 'bold',
                        }}>
                        Autumn
                      </Text>
                    </ImageBackground>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    height: h('28%'),
                    width: w('100%'),
                    //   backgroundColor: 'green',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <TouchableOpacity
                    style={{
                      // backgroundColor: 'white',
                      height: h('28%'),
                      width: w('98%'),
                    }}>
                    {/* <ImageBackground
                  style={{}}
                  source={require('../../assets/tree.jpg')}></ImageBackground> */}
                    <ImageBackground
                      style={{
                        height: '100%',
                        width: '100%',
                        borderRadius: h('2%'),
                        borderColor: 'rgba(0,0,0,0.1)',
                        borderWidth: w('0.7%'),
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden',
                      }}
                      // imageStyle={{borderRadius: 6}}
                      source={require('../../assets/babies.jpg')}>
                      <Text
                        style={{
                          color: '#fff',
                          fontSize: h('5%'),
                          fontWeight: 'bold',
                        }}>
                        Babies & Kids
                      </Text>
                    </ImageBackground>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    height: h('28%'),
                    width: w('100%'),
                    //   backgroundColor: 'green',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <TouchableOpacity
                    style={{
                      // backgroundColor: 'white',
                      height: h('28%'),
                      width: w('98%'),
                    }}>
                    {/* <ImageBackground
                  style={{}}
                  source={require('../../assets/tree.jpg')}></ImageBackground> */}
                    <ImageBackground
                      style={{
                        height: '100%',
                        width: '100%',
                        borderRadius: h('2%'),
                        borderColor: 'rgba(0,0,0,0.1)',
                        borderWidth: w('0.7%'),
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden',
                      }}
                      // imageStyle={{borderRadius: 6}}
                      source={require('../../assets/birds.jpg')}>
                      <Text
                        style={{
                          color: '#fff',
                          fontSize: h('5%'),
                          fontWeight: 'bold',
                        }}>
                        Birds
                      </Text>
                    </ImageBackground>
                  </TouchableOpacity>
                </View>
              </View>
            ) : (
              <View
                style={{
                  height: '70%',
                  // backgroundColor: 'green',
                }}></View>
            )}
          </View>
        </View>
      </ScrollView>
    );
  }
}
