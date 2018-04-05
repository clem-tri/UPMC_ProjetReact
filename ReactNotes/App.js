import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import { Constants } from 'expo';

class Note extends Component {
  render() {
    return (
      <View style={styles.note}>
        <Text style={styles.titleNote}>
          {this.props.title}
        </Text>
        <Text>
        </Text>
      </View>   
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Note title='Titre de la note' />
        <Note title='Titre de la note' />
        <Note title='Titre de la note' />
        <Note title='Titre de la note' />
        <Note title='Titre de la note' />
        <Note title='Titre de la note' />
        <Note title='Titre de la note' />
        <Note title='Titre de la note' />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    paddingTop: Constants.statusBarHeight + 20,
  },
  note: {
    width: '46%',
    marginRight: '2%',
    marginLeft: '2%',
    marginBottom: 5,
    marginTop: 5,
    backgroundColor: '#555',
    aspectRatio: 1,
  },
  titleNote: {
    margin: 5,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
});
