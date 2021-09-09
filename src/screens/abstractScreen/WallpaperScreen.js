/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React, {useRef} from 'react';
import {
  View,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
  Share,
} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import {AppHeader} from '../../components/AppHeader';
import Icon from 'react-native-vector-icons/Ionicons';
import CameraRoll from '@react-native-community/cameraroll';
import ViewShot from 'react-native-view-shot';
import {CustomModel} from '../../components/CustomModel';
import ManageWallpaper, {TYPE} from 'react-native-manage-wallpaper';
export class WallpaperScreen extends React.Component {
  state = {
    wallpaper: {},
    alertVisible: false,
    homePressed: {},
    lockPressed: {},
    bothPressed: {},
    cancelPressed: {},
    txt: '',
    homeBtn: '',
    lockBtn: '',
    bothBtn: '',
  };

  setWallpaper = type => {
    const uri = {
      home: '',
      lock: '',
      both: '',
    };
    ManageWallpaper.setWallpaper(
      {
        uri: uri[type],
      },
      res => {
        console.warn(('check', res));
      },
      type,
    );
  };

  componentDidMount = () => {
    this.setState({wallpaper: this.props.route.params.params});
    // console.warn(this.props.route.params.params);
  };
  save = () => {
    this.refs.viewShot.capture().then(uri => {
      CameraRoll.save(uri);
    });
  };
  onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          //   backgroundColor: '#faf',
        }}>
        <SafeAreaView />
        <StatusBar backgroundColor={'#000'} />

        {/* <AppHeader
          stle={{backgroundColor: '#fffff'}}
          leftIc={'arrow-back'}
          title={'Abstract'}
          leftPressed={() => {
            this.props.navigation.goBack();
          }}
        /> */}

        <ViewShot ref="viewShot" options={{format: 'jpg', quality: 0.9}}>
          <View
            style={{
              height: h('85%'),
              // backgroundColor: '#aaf',
            }}>
            <ImageBackground
              style={{
                height: h('96%'),
                backgroundColor: '#aff',
              }}
              source={this.state.wallpaper}>
              <View
                style={{
                  height: h('7%'),
                  // backgroundColor: '#aaf',
                }}>
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.goBack();
                  }}
                  style={{
                    width: w('15%'),
                    height: h('7%'),
                    backgroundColor: 'rgba(0,0,0,0.3)',
                    borderBottomRightRadius: h('3%'),
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Icon name={'chevron-back'} size={40} color={'#fff'} />
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>
        </ViewShot>

        <View
          style={{
            height: h('12%'),
            backgroundColor: 'rgba(0,0,0,0.6)',
            borderTopLeftRadius: h('3%'),
            borderTopRightRadius: h('3%'),
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          <TouchableOpacity
            onPress={() => {
              this.save();
            }}
            style={{
              width: w('30%'),
              // backgroundColor: '#afa',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon name={'download-outline'} size={45} color={'#fff'} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.setState(
                {
                  homePressed: () => this.setWallpaper(TYPE.HOME),
                  lockPressed: () => console.warn('Lock Pressed'),
                  bothPressed: () => console.warn('Both pressed'),
                  cancelPressed: () => this.setState({alertVisible: false}),
                  txt: 'Set Wallpaper',
                  homeBtn: 'Set As Home Screen',
                  lockBtn: 'Set As Lock screen',
                  bothBtn: 'Set Both Lock & Home Screen',
                },
                () => {
                  this.setState({alertVisible: true});
                },
              );
            }}
            style={{
              width: w('30%'),
              // backgroundColor: '#afa',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon name={'image-outline'} size={45} color={'#fff'} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.onShare();
            }}
            style={{
              width: w('30%'),
              // backgroundColor: '#afa',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon name={'share-social-outline'} size={45} color={'#fff'} />
          </TouchableOpacity>
        </View>
        <CustomModel
          visible={this.state.alertVisible}
          homePressed={this.state.homePressed}
          lockPressed={this.state.lockPressed}
          bothPressed={this.state.bothPressed}
          cancelPressed={this.state.cancelPressed}
          txt={this.state.txt}
          homeBtn={this.state.homeBtn}
          lockBtn={this.state.lockBtn}
          bothBtn={this.state.bothBtn}
        />
      </View>
    );
  }
}
