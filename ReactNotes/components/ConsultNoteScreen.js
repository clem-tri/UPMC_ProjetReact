/* Imports */
import React, { Component } from 'react';
import {
    Text,
    View,
    TextInput,
    StyleSheet,
    ScrollView,
} from 'react-native';
/* End of Imports */

export default class ConsultNoteScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Titre de la note', //todo : data note value
            date: Date.now(), //todo : data note value
            content: 'Lorem ipsum dolor sit amet dalama le lobaum para siep en mi corazon', //todo : data note value
        };

        this.saveTitle = function(text) {
            this.setState(previousState => {
                return {
                    title: text,
                    date:  Date.now(),
                    content: previousState.content,
                };
            });

            this.saveNote(this.state);
        }

        this.saveContent = function(text) {
            this.setState(previousState => {
                return {
                    title: previousState.title,
                    date:  Date.now(),
                    content: text,
                };
            });

            this.saveNote(this.state);
        }

        this.saveNote = function(json) {
            //todo
        }
    }

    render() {
        const {navigate} = this.props.navigation;

        return (
            <View style={styles.screenContainer}>
                <Text style={styles.mainTitle}>React Notes</Text>
                <TextInput
                    onChangeText={(text) => this.saveTitle(text)}
                    style={styles.noteTitle}
                    editable = {true}
                    value={this.state.title}
                />
                <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={true}>
                    <TextInput
                        onChangeText={(text) => this.saveContent(text)}
                        style = {styles.noteContent}
                        multiline= {true}
                        editable = {true}
                        value={this.state.content}
                        textBreakStrategy = 'balanced'
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