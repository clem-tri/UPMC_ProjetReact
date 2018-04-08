/* Imports */
import React, { Component } from 'react';
import {
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
/* End of Imports */

export default class Note extends Component {
    constructor(props) {
        super(props);

        this.id = this.props.id;
        this.textTest = () => {
            let textCrop = this.props.text;
            let size = 150;

            if(textCrop.length > size)
                textCrop = textCrop.substring(0,size)+'...';

            return textCrop;
        }
    }

    render() {
        const {navigate} = this.props.navigation;

        return (
            <TouchableOpacity
                style={styles.note}
                activeOpacity={0.8}
                onPress={() =>
                    navigate('Consult', {})
                }
            >
                <Text style={styles.titleNote}>
                    {this.props.title}
                </Text>

                <Text style={styles.textNote}>
                    {this.textTest()}
                </Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    note: {
        display: 'flex',
        justifyContent: 'space-around',
        width: '46%',
        marginRight: '2%',
        marginLeft: '2%',
        marginBottom: 5,
        marginTop: 5,
        backgroundColor: '#555',
        aspectRatio: 1,
    },
    titleNote: {
        fontSize: 15,
        fontWeight: 'bold',
        margin: 5,
        color: '#fff',
        textAlign: 'center',
    },
    /*dateNote: {
        color: '#fff',
        textAlign: 'center',
        fontStyle: 'italic',
    },*/
    textNote: {
        margin: 10,
        color: '#fff',
        textAlign: 'center',
    },
});