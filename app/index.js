import React, { Component } from 'react';
import {
  StyleSheet,
  StatusBar,
  View
} from 'react-native';
import {Button, Text} from 'native-base'

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="white" barStyle="light-content" />
        <Text>Hey There!</Text>
        <Button><Text>Camera</Text></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    position: 'absolute',
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    bottom: 20,
    alignSelf: 'center',
  }
});

export default App