import React, {createContext, useReducer, useRef} from 'react';
import {authReducer} from './authReducer';

//How it looks
export interface AuthState {
  isLoggedIn: boolean;
  username?: string;
  favoriteIcon?: string;
}

//Initial state
export const authInitialState: AuthState = {
  isLoggedIn: false,
};

//We will use it to tell to React how it looks and what expose the context
//Basicamente va a exponer todo lo que le puede pasar a sus hijos
export interface AuthContextProps {
  authState: AuthState;
  //Expone una función
  signIn: () => void;
  signOut: () => void;
  changeFavIcon: (iconName: string) => void;
}

//Create the context
export const AuthContext = createContext({} as AuthContextProps);

//Epose the state provider
export const AuthProvider = ({children}: any) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  const signIn = () => {
    dispatch({type: 'signIn'});
  };

  const signOut = () => {
    dispatch({type: 'signOut'});
  };

  const changeFavIcon = (iconName: string) => {
    dispatch({type: 'changeFavIcon', payload: iconName});
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        signIn,
        signOut,
        changeFavIcon,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
