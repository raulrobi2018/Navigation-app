import React from 'react';
import {LogBox, Platform, Text} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {ChatScreen} from '../screens/ChatScreen';
import {ContactsScreen} from '../screens/ContactsScreen';
import {AlbumsScreen} from '../screens/AlbumsScreens';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {globalStylesValues} from '../themes/tabsTheme';
import Icon from 'react-native-vector-icons/Ionicons';

//Quita el warning que aparece en la pantalla por incompatibilidad con
//reanimated. Esto no se debe hacer, lo hacemos para que no moleste
LogBox.ignoreLogs(['Sending']);

const TopTab = createMaterialTopTabNavigator();

export const TopTabs = () => {
  //Hook de react para manejar los top tabs en ios
  const {top} = useSafeAreaInsets();

  return (
    <TopTab.Navigator
      style={{paddingTop: top}}
      sceneContainerStyle={{backgroundColor: 'white'}}
      tabBarOptions={{
        //Personalización para ios
        pressColor: globalStylesValues.primary,
        showIcon: true,
        indicatorStyle: {
          backgroundColor: globalStylesValues.primary,
        },
        activeTintColor: globalStylesValues.primary,
        //Quita el borde inferior que sale debajo de los tabs
        style: {
          //Para ios
          shadowColor: 'transparent',
          elevation: 0,
        },
      }}
      screenOptions={
        // route lo desestructura de props
        ({route}) => ({
          // desestructura de props
          tabBarIcon: ({color, focused}) => {
            console.log(route.name);

            let iconName: string = '';
            switch (route.name) {
              case 'ChatScreen':
                iconName = 'chatbubble-ellipses-outline';
                break;
              case 'ContactsScreen':
                iconName = 'people-outline';
                break;
              case 'AlbumsScreen':
                iconName = 'albums-outline';
                break;
            }

            return (
              <Icon
                name={iconName}
                size={25}
                color={globalStylesValues.primary}
              />
            );
          },
        })
      }>
      <TopTab.Screen
        name="ChatScreen"
        options={{title: 'Chat'}}
        component={ChatScreen}
      />
      <TopTab.Screen
        name="ContactsScreen"
        options={{title: 'Contacts'}}
        component={ContactsScreen}
      />
      <TopTab.Screen
        name="AlbumsScreen"
        options={{title: 'Albums'}}
        component={AlbumsScreen}
      />
    </TopTab.Navigator>
  );
};
