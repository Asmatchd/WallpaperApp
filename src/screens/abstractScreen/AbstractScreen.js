/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
  ImageBackground,
  FlatList,
} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import {AppHeader} from '../../components/AppHeader';

export class AbstractScreen extends React.Component {
  state = {
    data: [
      {
        img: require('../../assets/image1.png'),
      },
      {
        img: require('../../assets/image2.jpg'),
      },
      {
        img: require('../../assets/image3.jpg'),
      },
      {
        img: require('../../assets/image4.jpg'),
      },
      {
        img: require('../../assets/image5.jpg'),
      },
      {
        img: require('../../assets/image6.jpg'),
      },
      {
        img: require('../../assets/image7.jpg'),
      },
      {
        img: require('../../assets/image8.jpg'),
      },
      {
        img: require('../../assets/image9.jpg'),
      },
      {
        img: require('../../assets/image10.jpg'),
      },
    ],
  };
  listDesign = item => (
    <TouchableOpacity
      onPress={() => {
        this.props.navigation.navigate('WallpaperScreen', {params: item.img});
      }}
      style={{
        height: h('28%'),
        width: w('33%'),
        // backgroundColor: '#aaf',
        borderRadius: h('2%'),
        // alignItems: 'center',
        // justifyContent: 'center',
        padding: h('0.5%'),
      }}>
      <Image
        style={{
          height: h('29.5%'),
          width: w('32%'),
          borderRadius: h('2%'),
        }}
        source={item.img}
      />
    </TouchableOpacity>
  );
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'gray',
        }}>
        <SafeAreaView />
        <StatusBar backgroundColor={'#000'} />
        <AppHeader
          leftIc={'chevron-back'}
          title={'Abstract'}
          leftPressed={() => {
            this.props.navigation.goBack();
          }}
        />
        <FlatList
          //   horizontal={true}
          numColumns={3}
          data={this.state.data}
          renderItem={({item}) => this.listDesign(item)}
          keyExtractor={(item, index) => index}
          ItemSeparatorComponent={() => (
            <View
              style={{
                height: h('1.5%'),
                width: w('3%'),
              }}
            />
          )}
        />
      </View>
    );
  }
}
