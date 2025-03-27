import {StyleSheet} from 'react-native';
import {withSafeAreaInsets} from 'react-native-safe-area-context';

const SignUp = StyleSheet.create({
  bodyImage: {
    width: '100%',
    height: '100%',
  },

  overlay: {
    ...StyleSheet.absoluteFillObject, // Covers entire background
    backgroundColor: 'black',
    opacity: 0.1, // Darker overlay for better contrast
  },

  textContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'yellow',
    height: '100%',
    zIndex: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textStyle: {
    color: 'red',
    fontSize: 20,
    fontFamily: 'Inter_18pt-Italic.ttf',
  },

  input: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
  createBtn: {
    width: '100%',
    backgroundColor: '#DB4444',
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  createbtnText: {
    color: '#ffff',
    fontFamily: 'Inter_18pt-Thin',
  },
});

export {SignUp};
