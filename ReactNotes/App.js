import React, { Component } from 'react';
import { 
  Text, 
  View, 
  ScrollView, 
  StyleSheet,
  TouchableOpacity,
} 
from 'react-native';
import { Constants } from 'expo';

class Note extends Component {
  constructor(props) {
    super(props);
    this.textTest = () => {
      let textCrop = this.props.text;
      console.log(this.props.text);
      let size = 50;
      
      if(textCrop.length > size)
        textCrop = textCrop.substring(0,size)+'...';
      
      return textCrop;
    }
  }
  render() {
    return (
      <View style={styles.note}>
        <Text style={styles.titleNote}>
          {this.props.title}
        </Text>
        <Text style={styles.dateNote}>
          {this.props.date}
        </Text>
        <Text style={styles.textNote}>
          {this.textTest()}
        </Text>
      </View>   
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={styles.screenContainer}>
        <Text style={styles.mainTitle}>React Notes</Text>
        
        <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={true}>
          <Note 
            title='Titre de la note'
            date='XX/XX/XXXX'
            text='Lorem ipsum dolor sit amet dalama le lobaum para siep en mi corazon'
          />
          <Note 
            title='Titre de la note'
            date='XX/XX/XXXX'
            text='Lorem ipsum dolor sit amet dalama le lobaum para siep en mi corazon'
          />
          <Note 
            title='Titre de la note'
            date='XX/XX/XXXX'
            text='Lorem ipsum dolor sit amet dalama le lobaum para siep en mi corazon'
          />
          <Note 
            title='Titre de la note'
            date='XX/XX/XXXX'
            text='Lorem ipsum dolor sit amet dalama le lobaum para siep en mi corazon'
          />
          <Note 
            title='Titre de la note'
            date='XX/XX/XXXX'
            text='Lorem ipsum dolor sit amet dalama le lobaum para siep en mi corazon'
          />
          <Note 
            title='Titre de la note'
            date='XX/XX/XXXX'
            text='Lorem ipsum dolor sit amet dalama le lobaum para siep en mi corazon'
          />
          <Note 
            title='Titre de la note'
            date='XX/XX/XXXX'
            text='Lorem ipsum dolor sit amet dalama le lobaum para siep en mi corazon'
          />
          <Note 
            title='Titre de la note'
            date='XX/XX/XXXX'
            text='Lorem ipsum dolor sit amet dalama le lobaum para siep en mi corazon'
          />
          <Note 
            title='Titre de la note'
            date='XX/XX/XXXX'
            text='Lorem ipsum dolor sit amet dalama le lobaum para siep en mi corazon'
          />
          <Note 
            title='Titre de la note'
            date='XX/XX/XXXX'
            text='Lorem ipsum dolor sit amet dalama le lobaum para siep en mi corazon'
          />
        </ScrollView>
        
        <TouchableOpacity style={styles.roundButton} activeOpacity={0.5}>
          <Text style={styles.roundButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 20,
    paddingBottom: 20,
    backgroundColor: '#ddd',
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },
  mainTitle: {
    width: '100%',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 15,
  },
  note: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '46%',
    marginRight: '2%',
    marginLeft: '2%',
    marginBottom: 5,
    marginTop: 5,
    backgroundColor: '#555',
    aspectRatio: 1,
  },
  titleNote: {
    fontSize: 15,
    fontWeight: 'bold',
    margin: 5,
    color: '#fff',
    textAlign: 'center',
  },
  dateNote: {
    color: '#fff',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  textNote: {
    textOverflow: 'ellipsis',
	  whiteSpace: 'nowrap',
	  overflow: 'hidden',
	  margin: 10,
	  color: '#fff',
    textAlign: 'center',
  },
  roundButton: {
    position: 'absolute',
    alignItems:'center',
    justifyContent:'center',
    bottom: 75,
    right: 25,
    width:75,
    height:75,
    backgroundColor:'#33cccc',
    borderRadius:75,
  },
  roundButtonText: {
    position: 'relative',
    bottom: 2,
    color: '#fff',
    fontSize: 50,
  },
});
