import React, { Component } from 'react'
import { AsyncStorage, View, TextInput, StyleSheet,Button } from 'react-native'

class ShowNote extends Component {


    state = {
        'noteContent': ''
    };

    componentDidMount = () => AsyncStorage.getItem('noteContent').then((value)=> {
        this.setState({ 'noteContent': value })
    });


    setNoteContent = (value) => {
        AsyncStorage.setItem('noteContent', value);
        this.setState({'noteContent': value});
    };


    render() {



        return (

            <View style = {styles.container}>

                <TextInput

                    autoCapitalize = 'none'

                    value={this.state.noteContent}

                    onChangeText = {this.setNoteContent}

                    editable = {true}

                    multiline = {true}

                    numberOfLines = {4}


                />

                <Button
                title="Go back"
                onPress={() => this.props.navigation.goBack()}

                />

            </View>
    )
}
}
export default ShowNote

const styles = StyleSheet.create ({
    container: {
        flex: 1
    }
});