import React, {useContext} from 'react';
import {Button, Text, View} from 'react-native';
import {AuthContext} from '../context/AuthContext';
import {styles} from '../themes/appTheme';

export const AlbumsScreen = () => {
  const {signOut, authState} = useContext(AuthContext);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Albums</Text>
      {authState.isLoggedIn && <Button title="Sign Out" onPress={signOut} />}
      <Text>{JSON.stringify(authState, null, 4)}</Text>
    </View>
  );
};
