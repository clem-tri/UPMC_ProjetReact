import React, { Component } from 'react'
import { AsyncStorage, View, TextInput , StyleSheet,Button } from 'react-native'

class ShowNote extends Component {


    static navigationOptions = ({ navigation }) => ({
        title: 'Note Details'
    });



    state = {
        note : {}
    };


    componentWillMount = () => {
        const { params } = this.props.navigation.state;
        const note = params ? params.note : null;
        this.state.note =  note ;
        AsyncStorage.getItem('note').then((value) =>
            this.setState('note', value))
    };


    setNoteContent = (value) => {

        let note = Object.assign({}, this.state.note);    //creating copy of object
        note.content = value;
        AsyncStorage.setItem( 'note', JSON.stringify(note));
        this.setState({note: note});

        AsyncStorage.getItem('note').then((value) =>
            console.log(value))
    }
    ;


    render() {


        return (

            <View style = {styles.container}>

                <TextInput
                    autoCapitalize = 'none'
                    value={this.state.note.content}
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