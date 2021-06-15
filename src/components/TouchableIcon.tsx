import React, {useContext} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import {AuthContext} from '../context/AuthContext';

interface Props {
  iconName: string;
  size: number;
  color: string;
}

export const TouchableIcon = ({iconName, size, color}: Props) => {
  const {changeFavIcon, authState} = useContext(AuthContext);
  const {isLoggedIn} = authState;

  return (
    <TouchableOpacity>
      <Icon
        name={iconName}
        size={size}
        color={color}
        onPress={() => changeFavIcon(iconName)}
      />
    </TouchableOpacity>
  );
};
