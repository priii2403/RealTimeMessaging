import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';

const style = StyleSheet.create({
  containor: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 16,
    alignSelf: 'center',
  },
  logoStyle: {width: 200, height: 400, alignSelf: 'center'},
  header1: {
    fontSize: 32,
    fontFamily: fontFamily.bold,
    alignSelf: 'center',
  },
  tColor: {
    color: colors.light_blue,
  },
  des: {
    fontSize: 16,
    fontFamily: fontFamily.regular,
    textAlign: 'center',
    marginTop: 16,
  },
  agree: {
    fontSize: 20,
    fontFamily: fontFamily.bold,
    textAlign: 'center',
    marginTop: 24,
    color: colors.blue,
  },
});
export default style;
