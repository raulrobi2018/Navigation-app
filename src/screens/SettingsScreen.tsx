import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import {AuthContext} from '../context/AuthContext';
import {styles} from '../themes/appTheme';
import {globalStylesValues} from '../themes/tabsTheme';

export const SettingsScreen = () => {
  // Este es un hook de react que se utiliza para
  //acomodar el título de la pantalla en ios. Lo desplaza de la parte del knoch
  //hacia abajo y que se vea bien
  const insets = useSafeAreaInsets();

  const {authState} = useContext(AuthContext);

  return (
    <View style={{...styles.globalMargin, marginTop: insets.top}}>
      <Text style={styles.title}>Settings</Text>
      <Text>{JSON.stringify(authState, null, 4)}</Text>
      {/* Si el favoriteIcon existe en el authstate, lo muestra */}
      {authState.favoriteIcon && (
        <Icon
          name={authState.favoriteIcon}
          size={120}
          color={globalStylesValues.primary}
        />
      )}
    </View>
  );
};
