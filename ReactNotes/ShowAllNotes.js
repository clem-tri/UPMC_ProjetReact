import React, { Component } from 'react'
import { AsyncStorage ,Button } from 'react-native'
class ShowAllNotes extends Component {


    static navigationOptions = {
        title: 'React Notes',
    };

    state = {
        'noteContent': ''
    };

    componentDidMount = () => AsyncStorage.getItem('noteContent').then((value) =>
        this.setState({ 'noteContent': value }));


    render() {
        const {navigate} = this.props.navigation;
        return (
            <Button
                title={this.state.noteContent}
                onPress={() =>
                    navigate('ShowNote', {noteContent: this.state.noteContent})
                }
            />
        );
    }
}
export default ShowAllNotes