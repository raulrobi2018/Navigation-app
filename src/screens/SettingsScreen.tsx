import React from 'react';
import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from '../themes/appTheme';

export const SettingsScreen = () => {
  // Este es un hook de react que se utiliza para
  //acomodar el título de la pantalla en ios. Lo desplaza de la parte del knoch
  //hacia abajo y que se vea bien
  const insets = useSafeAreaInsets();

  return (
    <View style={{...styles.globalMargin, marginTop: insets.top}}>
      <Text style={styles.title}>Settings</Text>
    </View>
  );
};
