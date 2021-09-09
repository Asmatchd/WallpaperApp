/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity, Image, Modal} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
export class CustomModel extends React.Component {
  render() {
    return (
      <View>
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.props.visible}>
          <View
            style={{
              flex: 1,
              backgroundColor: 'rgba(0,0,0,0.9)',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                height: h('37%'),
                width: '90%',
                backgroundColor: '#fff',
                borderRadius: h('1.8%'),
              }}>
              <View
                style={{
                  height: h('8%'),
                  width: '100%',
                  // backgroundColor: '#aaf',
                  flexDirection: 'row',
                  borderBottomWidth: h('0.05%'),
                  borderColor: 'grey',
                }}>
                {/* <View
                  style={{
                    height: '100%',
                    width: '20%',
                    // backgroundColor: '#a3a',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Icon name={'person-add'} color={'#000'} size={h('5%')} />
                </View> */}
                <View
                  style={{
                    height: '100%',
                    width: '70%',
                    justifyContent: 'center',
                    marginLeft: h('3.5%'),
                    // alignItems: 'center',
                    // backgroundColor: '#af3',
                  }}>
                  <Text
                    style={{
                      fontSize: 25,
                    }}>
                    {this.props.txt}
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={this.props.cancelPressed}
                  style={{
                    height: '100%',
                    width: '25%',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Icon name={'close-sharp'} color={'#000'} size={h('5%')} />
                </TouchableOpacity>
              </View>

              {/* <View
                style={{
                  height: h('14%'),
                  width: '100%',
                  // backgroundColor: '#aaf',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    marginLeft: h('2%'),
                  }}>
                  {this.props.txt}
                </Text>
              </View> */}

              <View
                style={{
                  height: h('27%'),
                  width: '100%',
                  //   backgroundColor: '#aa3',
                  //   flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                  borderTopWidth: h('0.05%'),
                }}>
                <TouchableOpacity
                  onPress={this.props.homePressed}
                  style={{
                    height: '30%',
                    width: '90%',
                    // backgroundColor: '#aa3',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: h('3%'),
                    borderWidth: w('0.4%'),
                    marginTop: h('1.5%'),
                  }}>
                  <Text>{this.props.homeBtn}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={this.props.lockPressed}
                  style={{
                    height: '30%',
                    width: '90%',
                    // backgroundColor: '#aaf',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: h('3%'),
                    borderWidth: w('0.4%'),
                  }}>
                  <Text>{this.props.lockBtn}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={this.props.bothPressed}
                  style={{
                    height: '30%',
                    width: '90%',
                    // backgroundColor: '#afa',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: h('3%'),
                    borderWidth: w('0.4%'),
                  }}>
                  <Text>{this.props.bothBtn}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
