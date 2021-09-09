import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {HomeScreen} from '../screens/homeScreen/HomeScreen';
import {DrawerMenu} from '../screens/drawerMenu/DrawerMenu';
const Drawer = createDrawerNavigator();
export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerMenu {...props} />}>
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
    </Drawer.Navigator>
  );
};
