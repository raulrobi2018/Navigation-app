import React, {useContext, useEffect} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../themes/appTheme';
import {StackScreenProps} from '@react-navigation/stack';
import {RouteStackParams} from '../navigation/StackNavigator';
import {AuthContext} from '../context/AuthContext';

//Para la segunda forma de traer los parámetros
// interface RouterParams {
//   id: number;
//   name: string;
// }

//Si utilizamos la primer o segunda forma, se declara así
//interface Props extends StackScreenProps<any, any> {}

//Para la tercer forma y más recomendada
interface Props extends StackScreenProps<RouteStackParams, 'PersonScreen'> {}

export const PersonScreen = ({route, navigation}: Props) => {
  //Primer manera de traer los parametros
  //   const params = route.params;
  //Segunda forma de traer los parametros
  //   const params = route.params as RouterParams;

  //Tercer forma
  const params = route.params;

  const {changeUsername} = useContext(AuthContext);

  useEffect(() => {
    navigation.setOptions({
      //Para la primer forma
      //   title: params!.name,
      //Para la segunda y tercer forma
      title: params.name,
    });
  }, []);

  useEffect(() => {
    changeUsername(params.name);
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Person Screen</Text>
      <Text>Username: {params.name}</Text>
      <Text>{JSON.stringify(params, null, 4)}</Text>
    </View>
  );
};
