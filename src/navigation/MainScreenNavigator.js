import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/homeScreen/HomeScreen';
import {AbstractScreen} from '../screens/abstractScreen/AbstractScreen';
import {WallpaperScreen} from '../screens/abstractScreen/WallpaperScreen';
import {DrawerNavigator} from './DrawerNavigator';
import {DrawerMenu} from '../screens/drawerMenu/DrawerMenu';
const Stack = createStackNavigator();

export const MainScreenNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="DrawerNavigator"
          component={DrawerNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AbstractScreen"
          component={AbstractScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="WallpaperScreen"
          component={WallpaperScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DrawerMenu"
          component={DrawerMenu}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
