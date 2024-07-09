import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import colors from '../styles/colors';

const Horizontelline = ({lineStyle = {}}) => {
  return <View style={{...style.lineStyle, ...lineStyle}}></View>;
};
const style = StyleSheet.create({
  lineStyle: {
    borderBottomWidth: 0.8,
    borderBottomColor: colors.grey,
    height: 1,
  },
});
export default Horizontelline;
