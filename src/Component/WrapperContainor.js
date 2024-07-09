import {View, Text, SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import React from 'react';
import colors from '../styles/colors';

const WrapperContainor = ({
  children,
  statusBarColor = colors.white,
  barStyle = 'dark-content',
  containorStyle = {},
}) => {
  return (
    <View style={{...style.containor, ...containorStyle}}>
      <StatusBar backgroundColor={statusBarColor} barStyle={barStyle} />
      <SafeAreaView>{children}</SafeAreaView>
    </View>
  );
};
const style = StyleSheet.create({
  containor: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 16,
  },
});

export default WrapperContainor;
