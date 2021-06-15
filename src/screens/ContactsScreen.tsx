import React, {useContext} from 'react';
import {Button, Text, View} from 'react-native';
import {AuthContext} from '../context/AuthContext';
import {styles} from '../themes/appTheme';

export const ContactsScreen = () => {
  const {signIn, authState} = useContext(AuthContext);
  const {isLoggedIn} = authState;

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Contacts</Text>
      {!isLoggedIn && <Button title="Sign In" onPress={signIn} />}
    </View>
  );
};
