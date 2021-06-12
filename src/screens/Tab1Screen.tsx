import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../themes/appTheme';

import Icon from 'react-native-vector-icons/Ionicons';

export const Tab1Screen = () => {
  useEffect(() => {
    console.log('Tabs1 llamado');
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Icons</Text>
      <Text>
        <Icon name="basketball-outline" size={60} color="#900" />
      </Text>
    </View>
  );
};
