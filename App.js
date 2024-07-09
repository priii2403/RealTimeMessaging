/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {Component, useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  Button,
  View,
  TextInput,
  alert,
} from 'react-native';
import socketService from './src/utils/socketService';
import Routes from './src/Navigation/Routes';
const App = () => {
  // return <Routes />;
  const [message, setmessage] = useState('');
  const [data, setdata] = useState([]);
  useEffect(() => {
    socketService.initializeSocket();
  }, []);
  useEffect(() => {
    socketService.on('recieved_message', msg => {
      console.log('message received in App', msg);
      let cloneArray = [...data];
      setdata(cloneArray.concat(msg));
    });
  }, [data]);
  const isDarkMode = useColorScheme() === 'dark';
  const sendMessage = () => {
    if (!!message) {
      socketService.emit('send_message', message);
      setmessage('');
      return;
    }
    alert('please eneter message');
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 6,
          }}>
          <View style={{flex: 0.9}}>
            <TextInput
              value={message}
              placeholder="Enter you message"
              style={styles.inputStyle}
              onChangeText={text => setmessage(text)}></TextInput>
          </View>

          <View style={{flex: 0.2}}>
            <Button onPress={sendMessage} title="send">
              {' '}
            </Button>
          </View>
        </View>
        {data.map((i, index) => {
          return (
            <Text style={{marginBottom: 8, fontWeight: 'bold', color: 'black'}}>
              {i}
            </Text>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  inputStyle: {
    height: 42,
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 8,
  },
  container: {
    flex: 1,
    padding: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
