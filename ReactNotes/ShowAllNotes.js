import React, { Component } from 'react'
import { AsyncStorage ,Button, View } from 'react-native'
class ShowAllNotes extends Component {


    static navigationOptions = {
        title: 'React Notes',
    };

    state = {
        'noteContent': 'Note'
    };

    componentDidMount = () => AsyncStorage.getItem('noteContent').then((value) =>
        this.setState({ 'noteContent': value }));


    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
            <Button
                title={this.state.noteContent}
                onPress={() =>
                    navigate('ShowNote', {noteContent: this.state.noteContent})
                }
            />
            </View>
        );
    }
}
export default ShowAllNotes