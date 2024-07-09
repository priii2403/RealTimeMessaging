import React from 'react';

// import {NavigationString} from '../Constants/NavigationStrings';
import NavigationStrings from '../Constants/NavigationStrings';
import TabRoutes from './TabRoutes';

export default function (Stack) {
  return (
    <>
      <Stack.Screen name={NavigationStrings.TAB_ROUTES} component={TabRoutes} />
      {/* <Stack.Screen
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
      /> */}
    </>
  );
}
