/* Imports */
import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
} from 'react-native';
/* End of Imports */

export default class CreateNoteScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Home'
    });

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.mainTitle}>Sorry</Text>
                <Text style={styles.text}>Because of a lack of time,</Text>
                <Text style={styles.text}>you can only have one note in this version</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0,
        backgroundColor: '#ddd',
    },
    mainTitle: {
        width: '100%',
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center',
    },
    text: {
        textAlign: 'center',
    }
});