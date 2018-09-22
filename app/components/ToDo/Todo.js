import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Image
} from 'react-native';
import { Link } from 'react-router-native';

import Note from './Note';

export default class Todo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      noteArray: [],
      noteText: ''
    };
  }

  render() {
    let notes = this.state.noteArray.map((val, key) => {
      return (
        <Note
          key={key}
          keyval={key}
          val={val}
          deleteMethod={() => this.deleteNote(key)}
        />
      );
    });
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Link to="/">
            <Image
              style={styles.logo}
              source={require('../../images/todoicon.png')}
            />
          </Link>
          {/* <Text style={styles.headerText}>TO-DO-U</Text> */}
        </View>

        <ScrollView style={styles.scrollContainer}>{notes}</ScrollView>

        <KeyboardAvoidingView behavior="padding" style={styles.footer}>
          <TextInput
            style={styles.textInput}
            onChangeText={noteText => this.setState({ noteText })}
            value={this.state.noteText}
            placeholder=">note"
            placeholderTextColor="white"
            underlineColorAndroid="transparent"
          />
        </KeyboardAvoidingView>

        <TouchableOpacity
          style={styles.addButton}
          onPress={this.addNote.bind(this)}
        >
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }

  addNote() {
    if (this.state.noteText) {
      var d = new Date();
      this.state.noteArray.push({
        date: d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate(),
        note: this.state.noteText
      });
      this.setState({
        noteArray: this.state.noteArray
      });
      this.setState({
        noteText: ''
      });
    }
  }

  deleteNote(key) {
    this.state.noteArray.splice(key, 1);
    this.setState({
      noteArray: this.state.noteArray
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0000'
  },

  text: {
    color: '#fff'
  },
  logo: {
    width: 60,
    height: 60,
    zIndex: 10,
    marginTop: 25
  },

  header: {
    backgroundColor: '#dd0000',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#666'
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    padding: 26
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 100
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10
  },
  addButton: {
    position: 'absolute',
    zIndex: 11,
    right: 20,
    bottom: 90,
    backgroundColor: '#ff0000',
    width: 90,
    height: 90,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8
  },

  addButtonText: {
    color: '#fff',
    fontSize: 24
  },
  textInput: {
    alignSelf: 'stretch',
    color: 'white',
    padding: 20,
    backgroundColor: '#666',
    borderTopWidth: 2,
    borderTopColor: '#fff'
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
