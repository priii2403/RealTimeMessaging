// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthStack from './AuthStack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import MainStack from './MainStack';
function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <GestureHandlerRootView>
        <SafeAreaProvider style={{flex: 1}}>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            {true ? MainStack(Stack) : AuthStack(Stack)}
            {/* {AuthStack(Stack)} */}
          </Stack.Navigator>
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </NavigationContainer>
  );
}

export default Routes;
