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

  desStyle: {
    fontSize: 16,
    fontFamily: fontFamily.regular,
    textAlign: 'center',
    marginVertical: 16,
  },
});
export default style;
