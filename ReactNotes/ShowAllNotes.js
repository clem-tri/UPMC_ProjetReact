import React, { Component } from 'react'
import { AsyncStorage ,Button, View } from 'react-native'
class ShowAllNotes extends Component {


    static navigationOptions = {
        title: 'React Notes',
    };



    componentDidMount = () => AsyncStorage.getItem('note').then((value) =>
        this.setState(value));


    render() {
        const {navigate} = this.props.navigation;
            return (
                <View>
                    <Button title="Ma note"
                    onPress={() =>
                        navigate("AsyncStorageExample")}>
                    </Button>
                </View>
            )
    }
}
export default ShowAllNotes