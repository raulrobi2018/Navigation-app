import React, {useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {styles} from '../themes/appTheme';

export const Page2Screen = () => {
  //react-navigation nos ofrece el useNavigation con el cual podremos obtener
  //las propiedades de la navegación
  const navigation = useNavigation();

  //Es otra forma de setearle el titulo
  useEffect(() => {
    navigation.setOptions({
      title: 'Title',
      //Solo para ios
      headerBackTitle: 'Back',
    });
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page 2</Text>
      <Button
        color="#948151"
        title="Page 1"
        onPress={() => navigation.navigate('Page1Screen')}
      />
      <Button
        color="#948151"
        title="Page 3"
        onPress={() => navigation.navigate('Page3Screen')}
      />
    </View>
  );
};
