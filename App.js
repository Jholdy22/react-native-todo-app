import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NativeRouter, Switch, Route } from 'react-router-native';

import Login from './app/components/Login/Login';
import Todo from './app/components/ToDo/Todo';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      text: ''
    };
  }

  render() {
    return (
      <NativeRouter>
        <View style={styles.container}>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/todo" component={Todo} />
          </Switch>
        </View>
      </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  text: {
    color: '#fff'
  }
});
