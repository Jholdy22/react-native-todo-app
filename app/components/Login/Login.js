import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView
} from 'react-native';

import LoginForm from './LoginForm';

export default class Login extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../../images/todoicon.png')}
          />
          <Text style={styles.title}>Welcome To The Ultimate To-Do List</Text>
        </View>
        <View style={styles.fromContainer}>
          <LoginForm />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DD0000'
  },

  text: {
    color: '#fff'
  },

  logoContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  title: {
    color: '#fff',
    marginTop: 10,
    width: 160,
    textAlign: 'center',
    opacity: 0.9,
    fontSize: 16
  },

  logo: {
    width: 100,
    height: 100
  }
});
