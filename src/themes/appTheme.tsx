import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20,
    height: 200,
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
  },
  btnBig: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  menuContainer: {
    marginVertical: 30,
    marginHorizontal: 20,
    flexDirection: 'column',
  },
  buttonMenu: {marginVertical: 10},
  textMenu: {
    fontSize: 20,
    marginLeft: 10,
  },
});
