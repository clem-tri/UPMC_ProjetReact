import React, { Component } from 'react'
import { AsyncStorage, Text, View, TextInput, StyleSheet } from 'react-native'

class AsyncStorageExample extends Component {
    state = {
        'name': ''
    };
    componentDidMount = () => AsyncStorage.getItem('name').then((value) =>
        this.setState({ 'name': value }));

    setName = (value) => {
    AsyncStorage.setItem('name', value);
    this.setState({ 'name': value });
};


    render() {


    return (
        <View style = {styles.container}>
            <TextInput
                autoCapitalize = 'none'
                value={ this.state.name}
                onChangeText = {this.setName}
                multiline = {true}
                numberOfLines = {4}

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