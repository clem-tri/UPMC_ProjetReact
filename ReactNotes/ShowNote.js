import React, { Component } from 'react'
import { AsyncStorage, View, TextInput, Icon , StyleSheet,Button } from 'react-native'

class ShowNote extends Component {


    static navigationOptions = ({ navigation }) => ({
        title: 'Note Details',
        headerRight: (
            <Button title="Sauvegarder"
                    color="#7BCC70"
                    onPress={() =>
                        navigation.goBack()
                    }
            />
        ),
    });

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