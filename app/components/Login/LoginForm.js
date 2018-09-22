import React, { Component } from 'react';
import { StyleSheet, View, TextInput, StatusBar } from 'react-native';

import LoginButton from './LoginButton';

export default class LoginForm extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <TextInput
          placeholder="Username"
          placeholderTextColor="#ffffff"
          returnKeyType="next"
          onSubmitEditing={() => this.passwordInput.focus()}
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#ffffff"
          returnKeyType="go"
          style={styles.input}
          secureTextEntry
          ref={input => (this.passwordInput = input)}
        />

        <LoginButton />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },

  input: {
    height: 40,
    backgroundColor: '#ffffff02',
    marginBottom: 10,
    color: '#fff',
    paddingHorizontal: 10,
    opacity: 7
  },

  buttonContainer: {
    backgroundColor: '#FF0000',
    paddingVertical: 15
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '700'
  }
});
