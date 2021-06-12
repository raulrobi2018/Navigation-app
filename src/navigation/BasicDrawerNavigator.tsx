import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {SettingsScreen} from '../screens/SettingsScreen';
import {StackNavigator} from './StackNavigator';
import {useWindowDimensions} from 'react-native';

const Drawer = createDrawerNavigator();

export const BasicDrawerNavigator = () => {
  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
      // Si el with es mayor a 768 lo muestra permanente
      drawerType={width >= 768 ? 'permanent' : 'front'}>
      <Drawer.Screen
        name="StackNavigator"
        options={{title: 'Home'}}
        component={StackNavigator}
      />
      <Drawer.Screen
        name="SettingsScreen"
        options={{title: 'Settins'}}
        component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
};
