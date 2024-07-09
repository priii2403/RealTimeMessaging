import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import strings from '../Constants/lang/index';
import colors from '../styles/colors';
import fontFamily from '../styles/fontFamily';

const HeaderComponent = (
  {centerText = '', rightText = strings.DONE},
  leftCustomView = () => {},
  isLeftView = false,
  containorStyle = {},
  rightTextStyle = {},
) => {
  return (
    <View style={{...style.containor, ...containorStyle}}>
      {isLeftView ? leftCustomView() : <View />}
      <Text style={style.centerTextStyle}>{centerText}</Text>
      <TouchableOpacity>
        <Text style={{...style.rightText, ...rightTextStyle}}>{rightText}</Text>
      </TouchableOpacity>
    </View>
  );
};
const style = StyleSheet.create({
  containor: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItem: 'center',
    borderBottomWidth: 0.6,
    borderColor: 'grey',
    paddingBottom: 12,
  },
  centerTextStyle: {
    color: colors.black,
    fontFamilt: fontFamily.regular,
    fontSize: 24,
  },
  rightText: {
    color: 'grey',
    fontFamilt: fontFamily.bold,
    fontSize: 24,
  },
});
export default HeaderComponent;
