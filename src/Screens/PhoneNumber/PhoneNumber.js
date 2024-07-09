import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import WrapperContainor from '../../Component/WrapperContainor';
import strings from '../../Constants/lang/index';
import HeaderComponent from '../../Component/HeaderComponent';
import Horizontelline from '../../Component/Horizontelline';
import style from './styles';
import ImagePath from '../../Constants/ImagePath';
import colors from '../../styles/colors';

const PhoneNumber = ({navigation}) => {
  return (
    <WrapperContainor>
      <HeaderComponent
        centerText={strings.ENTER_YOUR_PHONE_NUMBER}
        containorStyle={{paddingHorizontal: 8}}
      />
      <Text style={style.desStyle}>{strings.CHATBES_WILL_SEND}</Text>
      <Horizontelline />

      <TouchableOpacity
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItem: 'center',
          borderBottomWidth: 0.8,
          borderBottomColor: colors.grey,
        }}>
        <Text>INIDA</Text>
        <Image source={ImagePath.icForward} />
      </TouchableOpacity>
    </WrapperContainor>
  );
};

export default PhoneNumber;
