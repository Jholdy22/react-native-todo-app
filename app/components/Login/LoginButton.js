import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { Link } from 'react-router-native';

export default () => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.buttonContainer}>
      <Link to="/todo">
        <Text style={styles.buttonText}>LOGIN</Text>
      </Link>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
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
