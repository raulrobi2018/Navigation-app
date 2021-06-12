import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentOptions,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

import {SettingsScreen} from '../screens/SettingsScreen';
import {StackNavigator} from './StackNavigator';
import {
  Image,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import {styles} from '../themes/appTheme';
import {Tabs} from './Tabs';
import {globalStylesValues} from '../themes/tabsTheme';

const Drawer = createDrawerNavigator();

//Este es el menú lateral con las dos rutas y que contiene el ContentMenu,
//el cual define todo el contenido de las opciones de menú
export const DrawerNavigator = () => {
  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
      // Si el with es mayor a 768 lo muestra permanente
      drawerType={width >= 768 ? 'permanent' : 'front'}
      // Desestructuramos las props y le pasamos todas sus propiodades (...props)
      drawerContent={props => <ContentMenu {...props} />}>
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

//Creamos un component interno
const ContentMenu = (
  //El tipo de parámetro es el que nos indica el drawerContent
  {navigation}: DrawerContentComponentProps<DrawerContentOptions>,
) => {
  return (
    <DrawerContentScrollView>
      {/* Definición del avatar */}
      <View style={styles.avatarContainer}>
        {/* <Image
          source={{
            uri: 'https://www.ctvalleybrewing.com/wp-content/uploads/2017/04/avatar-placeholder.png',
          }}
          style={styles.avatar}
        /> */}
        <Icon name="person-circle-outline" size={80} color="lightgray" />
      </View>

      {/* Opciones de menú */}
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={{...styles.buttonMenu, flexDirection: 'row'}}
          onPress={() => navigation.navigate('Tabs')}>
          <Icon
            name="map-outline"
            size={25}
            color={globalStylesValues.primary}
          />
          <Text style={styles.textMenu}>Navegación</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{...styles.buttonMenu, flexDirection: 'row'}}
          onPress={() => navigation.navigate('SettingsScreen')}>
          <Icon
            name="settings-outline"
            size={25}
            color={globalStylesValues.primary}
          />
          <Text style={styles.textMenu}>Ajustes</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
