import React, {useEffect} from 'react';
import {Text, View} from 'react-native';

export const Tab2Screen = () => {
  useEffect(() => {
    console.log('Tabs2 llamado');
  }, []);
  return (
    <View>
      <Text>Products</Text>
    </View>
  );
};
