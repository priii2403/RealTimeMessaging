import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
import ImagePath from '../../Constants/ImagePath';
import style from './Styles';
import NavigationStrings from '../../Constants/NavigationStrings';
import WrapperContainor from '../../Component/WrapperContainor';
import strings from '../../Constants/lang/index';

const TermsConditions = ({navigation}) => {
  return (
    <WrapperContainor containorStyle={{alignItems: 'center'}}>
      <Image
        resizeMode="contain"
        style={style.logoStyle}
        source={ImagePath.icLogo}
      />
      <Text style={style.header1}>{strings.welcome}</Text>
      <Text style={style.des}>
        {strings.read_our}
        <Text style={style.tColor}>{strings.privacy_policy}</Text>
        {strings.tap_agree_continue}
        <Text style={style.tColor}> {strings.terms_of_service}</Text>
      </Text>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          navigation.navigate(NavigationStrings.PHONE_NUMBER);
        }}>
        <Text style={style.agree}>{strings.agree_continue}</Text>
      </TouchableOpacity>
    </WrapperContainor>
  );
};

export default TermsConditions;
