import React from 'react';
import * as Screens from '../Screens/index';

export default function (Stack) {
  return (
    <>
      <Stack.Screen name="Home" component={HomeScreen} />
    </>
  );
}
