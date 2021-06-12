import {DrawerScreenProps} from '@react-navigation/drawer';
import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Button, Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../themes/appTheme';
import {globalStylesValues} from '../themes/tabsTheme';

//Aquí extendemos para poder pasarle parametros adicionales
//Para Stack Navigation
// interface Props extends StackScreenProps<any, any> {}

//Para Drawer Navigation
interface Props extends DrawerScreenProps<any, any> {}

// De las props del stacknavigator, desestructuro navigation
export const Page1Screen = ({navigation}: Props) => {
  //Se va a ejecutar una única vez
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.toggleDrawer()}
          style={{marginLeft: 10}}>
          <Icon
            name="menu-outline"
            size={50}
            color={globalStylesValues.primary}
          />
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page 1 Screen</Text>
      <Button
        color="#948151"
        title="Page 2"
        onPress={() => navigation.navigate('Page2Screen')}
      />
      <Button
        title="Go to Person Screen"
        onPress={() =>
          navigation.navigate('PersonScreen', {
            id: 3,
            name: 'Otro',
          })
        }
      />

      <Text style={{marginVertical: 20, fontSize: 20}}>
        Navegar con argumentos
      </Text>

      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          style={{...styles.btnBig, backgroundColor: 'blue'}}
          onPress={() =>
            navigation.navigate('PersonScreen', {
              id: 1,
              name: 'Raul',
            })
          }>
          <Icon name="man-outline" size={40} color="white" />
          <Text style={styles.btnText}>Raul</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnBig}
          onPress={() =>
            navigation.navigate('PersonScreen', {
              id: 2,
              name: 'María',
            })
          }>
          <Icon
            name="woman-outline"
            size={40}
            color="white"
            onPress={() => navigation.toggleDrawer()}
          />
          <Text style={styles.btnText}>María</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
