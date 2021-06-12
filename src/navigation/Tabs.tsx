import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import React from 'react';
import {Platform, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Tab1Screen} from '../screens/Tab1Screen';
import {globalStylesValues} from '../themes/tabsTheme';
import {StackNavigator} from './StackNavigator';
import {TopTabs} from './TopTabs';

export const Tabs = () => {
  return Platform.OS === 'ios' ? <TabsIOS /> : <TabsAndroid />;
};

//Estas son las tabs utilizadas para Android
const TabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <TabAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{
        backgroundColor: globalStylesValues.primary,
      }}
      screenOptions={
        // route lo desestructura de props
        ({route}) => ({
          // desestructura de props
          tabBarIcon: ({color, focused}) => {
            console.log(route.name);

            let iconName: string = '';
            switch (route.name) {
              case 'Tab1Screen':
                iconName = 'home-outline';
                break;
              case 'TopTabs':
                iconName = 'grid-outline';
                break;
              case 'StackNavigator':
                iconName = 'map-outline';
                break;
            }

            return <Icon name={iconName} size={25} color="white" />;
          },
        })
      }>
      <TabAndroid.Screen
        name="Tab1Screen"
        options={{title: 'Home'}}
        component={Tab1Screen}
      />
      <TabAndroid.Screen
        name="TopTabs"
        options={{title: 'Top Menú'}}
        component={TopTabs}
      />
      <TabAndroid.Screen
        name="StackNavigator"
        options={{title: 'Navigation'}}
        component={StackNavigator}
      />
    </TabAndroid.Navigator>
  );
};

//Estas tabs son las que utiliza ios
const TabIOS = createBottomTabNavigator();

const TabsIOS = () => {
  return (
    <TabIOS.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      tabBarOptions={{
        activeTintColor: globalStylesValues.primary,
        //Quita el borde inferior que sale debajo de los tabs
        style: {
          //Para ios
          shadowColor: 'transparent',
          elevation: 0,
        },
        labelStyle: {
          fontSize: 15,
        },
        tabStyle: {
          backgroundColor: 'orange',
          alignItems: 'center',
        },
      }}
      screenOptions={
        // route lo desestructura de props
        ({route}) => ({
          // desestructura de props
          tabBarIcon: ({color, focused, size}) => {
            let iconName: string = '';
            switch (route.name) {
              case 'Tab1Screen':
                iconName = 'home-outline';
                break;
              case 'TopTabs':
                iconName = 'grid-outline';
                break;
              case 'StackNavigator':
                iconName = 'map-outline';
                break;
            }

            return <Icon name={iconName} size={25} color="white" />;
          },
        })
      }>
      <TabIOS.Screen
        name="Tab1Screen"
        options={{
          title: 'Home',
          // Esta es una forma de asignarle al ícono el mismo color del texto del tab
          //Lo toma del padre mediante las props, está accediendo al color primary definido en themes
          // tabBarIcon: props => <Text style={{color: props.color}}>­¼</Text>,
        }}
        component={Tab1Screen}
      />
      <TabIOS.Screen
        name="TopTabs"
        options={{title: 'Top Menú'}}
        component={TopTabs}
      />
      <TabIOS.Screen
        name="StackNavigator"
        options={{title: 'Navigation'}}
        component={StackNavigator}
      />
    </TabIOS.Navigator>
  );
};
