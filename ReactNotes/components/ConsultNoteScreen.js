/* Imports */
import React, { Component } from 'react';
import {
    Text,
    View,
    TextInput,
    StyleSheet,
    ScrollView,
    AsyncStorage
} from 'react-native';
/* End of Imports */

export default class ConsultNoteScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '', //todo : data note value
            //date: Date.now(), //todo : data note value
            content: '', //todo : data note value
        };

        this.saveTitle = function(text) {
            this.setState(previousState => {
                return {
                    title: text,
                    //date:  Date.now(),
                    content: previousState.content,
                };
            });

            this.saveNote(this.state);
        }

        this.saveContent = function(text) {
            this.setState(previousState => {
                return {
                    title: previousState.title,
                    //date:  Date.now(),
                    content: text,
                };
            });

            this.saveNote(this.state);
        }

        this.saveNote = function(json) {
            //todo
        }
    }

    static navigationOptions = ({ navigation }) => ({
        title: 'Home'
    });

    componentDidMount = () => {
        AsyncStorage.getItem('title').then((value) => this.setState({ 'title': value }));
        AsyncStorage.getItem('content').then((value) => this.setState({ 'content': value }));
    } ;

    setTitle = (value) => {
        AsyncStorage.setItem('title', value);
        this.setState({'title': value});
    };

    setContent = (value) => {
        AsyncStorage.setItem('content', value);
        this.setState({'content': value});
    };

    render() {
        const {navigate} = this.props.navigation;

        return (
            <View style={styles.screenContainer}>
                <Text style={styles.mainTitle}>React Notes</Text>
                <TextInput
                    onChangeText={this.setTitle} //(text) => this.saveTitle(text)
                    style={styles.noteTitle}
                    editable = {true}
                    value={this.state.title}
                    placeHolder = "Titre de la note"
                />
                <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={true}>
                    <TextInput
                        onChangeText={this.setContent} //(text) => this.saveContent(text)
                        style = {styles.noteContent}
                        multiline= {true}
                        editable = {true}
                        value={this.state.content}
                        textBreakStrategy = 'balanced'
                        placeHolder = "Contenu de la note"
                    />
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        paddingTop: 5,
        paddingBottom: 20,
        backgroundColor: '#ddd',
    },
    container: {
        margin: 30,
    },
    mainTitle: {
        width: '100%',
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center',
    },
    noteTitle: {
        margin: 30,
        marginTop: 10,
        marginBottom: 10,
        padding: 5,
        borderWidth: 1,
        borderColor: '#333',
        backgroundColor: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
    },
    noteContent: {
        height: 100,
        padding: 10,
        borderWidth: 1,
        borderColor: '#333',
        backgroundColor: '#fff',
    },
});