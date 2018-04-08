import React, { Component } from 'react'
import { AsyncStorage ,Button, View } from 'react-native'
class ShowAllNotes extends Component {


    static navigationOptions = {
        title: 'React Notes',
    };



    state = {
        note : {
            id: 1,
            title: "Ma note",
            content: ""
        }

    };



    componentDidMount = () => AsyncStorage.getItem('note').then((value) =>
        this.setState(value));


    render() {
        const {navigate} = this.props.navigation;
            return (
                <View key={this.state.note.id}>
                    <Button title={this.state.note.title}
                    onPress={() =>
                        navigate('ShowNote', {'note': this.state.note})}>
                    </Button>
                </View>
            )
    }
}
export default ShowAllNotes