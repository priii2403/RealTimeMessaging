import React from 'react';
import * as Screens from '../Screens/index';
// import {NavigationString} from '../Constants/NavigationStrings';
import NavigationStrings from '../Constants/NavigationStrings';
export default function (Stack) {
  return (
    <>
      <Stack.Screen
        name={NavigationStrings.TERMS_CONDITION}
        component={Screens.TermsCondition}
      />
      <Stack.Screen
        name={NavigationStrings.PHONE_NUMBER}
        component={Screens.PhoneNumber}
      />
      <Stack.Screen
        name={NavigationStrings.EDIT_PROFILE}
        component={Screens.EditProfile}
      />
      <Stack.Screen
        name={NavigationStrings.OTP_VERIFICATION}
        component={Screens.OtpVerification}
      />
    </>
  );
}
