import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Page1Screen} from '../screens/Page1Screen';
import {Page2Screen} from '../screens/Page2Screen';
import {Page3Screen} from '../screens/Page3Screen';
import {PersonScreen} from '../screens/PersonScreen';

//Configuración de parámetros que recibirán las pantallas
//Cuando se inicialice este stack, definirá las pantallas que podrán estar permitidas y los
//parámetros que pueden recibir
//Esto beneficia en que si queremos instanciar una pantalla que no se encuentra aquí, dará error
export type RouteStackParams = {
  Page2Screen: undefined;
  Page3Screen: undefined;
  Page1Screen: undefined;
  PersonScreen: {id: number; name: string};
};

const Stack = createStackNavigator<RouteStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      // Si queremos que el stack arranque en una página específica, declaramos la propiedad initialRouteName
      // initialRouteName="Page3Screen"
      screenOptions={{
        cardStyle: {
          backgroundColor: '#F1ECDF',
        },
        headerStyle: {
          // Quita la línea entre el header y el body en ios
          elevation: 0,
          // Hace transparente el header en Android
          shadowColor: 'transparent',
        },
      }}>
      <Stack.Screen
        name="Page1Screen"
        options={{title: 'Page 1'}}
        component={Page1Screen}
      />
      <Stack.Screen
        name="Page2Screen"
        options={{title: 'Page 2'}}
        component={Page2Screen}
      />
      <Stack.Screen
        name="Page3Screen"
        options={{title: 'Page 3'}}
        component={Page3Screen}
      />
      <Stack.Screen
        name="PersonScreen"
        options={{title: 'Person'}}
        component={PersonScreen}
      />
    </Stack.Navigator>
  );
};
