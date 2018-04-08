import React, { Component } from 'react'
import { AsyncStorage, View, TextInput, StyleSheet } from 'react-native'

class AsyncStorageExample extends Component {



    static navigationOptions = ({ navigation }) => ({
        title: 'Details de la note'
    });

    state = {
        'title' : '',
        'content': ''
    };

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
    this.setState({ 'content': value });


};


    render() {


    return (
        <View style = {styles.container}>
            <TextInput
                value={ this.state.title}
                onChangeText = {this.setTitle}
                placeholder = "Titre de la note"

            />
            <TextInput
                autoCapitalize = 'none'
                value={ this.state.content}
                onChangeText = {this.setContent}
                multiline = {true}
                numberOfLines = {4}
                placeholder = "Contenu de la note"

            />
        </View>

    )
}
}
export default AsyncStorageExample

const styles = StyleSheet.create ({
    container: {
        marginTop: 50,
        flex: 1
    }
});