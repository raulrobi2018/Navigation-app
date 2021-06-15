import {AuthState} from './AuthContext';

type AuthAction =
  | {type: 'signIn'}
  | {type: 'changeFavIcon'; payload: string}
  | {type: 'signOut'};

//Recibe la acción a ejecutar (AuthAction), la acción es de tipo 'signIn'
//entra en el swith y ya sabe lo que tiene que hacer
export const authReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case 'signIn':
      return {
        ...state,
        isLoggedIn: true,
        username: 'no-username-yet',
      };
    case 'signOut':
      return {
        isLoggedIn: false,
        username: 'no-username-yet',
      };

    case 'changeFavIcon':
      return {
        ...state,
        favoriteIcon: action.payload,
      };
    default:
      return state;
  }
};
