import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../themes/appTheme';

import {TouchableIcon} from '../components/TouchableIcon';
import {globalStylesValues} from '../themes/tabsTheme';

export const Tab1Screen = () => {
  useEffect(() => {
    console.log('Tabs1 llamado');
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Icons</Text>
      <Text>
        <TouchableIcon iconName="basketball-outline" size={60} color="red" />
        <TouchableIcon
          iconName="bicycle-outline"
          size={60}
          color={globalStylesValues.primary}
        />
        <TouchableIcon iconName="hand-left-outline" size={40} color="orange" />
        <TouchableIcon iconName="barbell-outline" size={100} color="yellow" />
        <TouchableIcon iconName="happy-outline" size={80} color="green" />
      </Text>
    </View>
  );
};
