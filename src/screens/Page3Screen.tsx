import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from '../themes/appTheme';

//Aquí extendemos para poder pasarle parametros adicionales
interface Props extends StackScreenProps<any, any> {}

export const Page3Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page 3 Screen</Text>
      {/* navigation.pop() vuelve a la página visitada anterior */}
      <Button
        color="#948151"
        title="Go back"
        onPress={() => navigation.pop()}
      />
      {/* navigation.popToTop() vuelve a la primer página y destruye todo el stack */}
      <Button
        color="#948151"
        title="Page 1"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
};
