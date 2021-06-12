import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigator} from './src/navigation/StackNavigator';
import {BasicDrawerNavigator} from './src/navigation/BasicDrawerNavigator';
import {DrawerNavigator} from './src/navigation/DrawerNavigator';

const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      {/* <BasicDrawerNavigator /> */}
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default App;
