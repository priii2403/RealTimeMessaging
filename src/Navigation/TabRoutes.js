import * as React from 'react';
import {Text, View, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import NavigationStrings from '../Constants/NavigationStrings';
import * as Screens from '../Screens/index';
import ImagePath from '../Constants/ImagePath';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator initialRouteName={NavigationStrings.CHATS}>
      <Tab.Screen
        name={NavigationStrings.STATUS}
        component={Screens.Status}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={{tintColor: focused ? 'blue' : 'black'}}
                source={ImagePath.icStatus}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={NavigationStrings.CALLS}
        component={Screens.calls}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={{tintColor: focused ? 'blue' : 'black'}}
                source={ImagePath.icCalls}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={NavigationStrings.CAMERA}
        component={Screens.Camera}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={{tintColor: focused ? 'blue' : 'black'}}
                source={ImagePath.icCamera}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={NavigationStrings.CHATS}
        component={Screens.Chats}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={{tintColor: focused ? 'blue' : 'black'}}
                source={ImagePath.icChats}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={NavigationStrings.SETTINGS}
        component={Screens.Settings}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={{tintColor: focused ? 'blue' : 'black'}}
                source={ImagePath.icSettings}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
