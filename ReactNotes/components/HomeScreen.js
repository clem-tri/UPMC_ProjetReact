/* Imports */
import React, { Component } from 'react';

import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

import {Constants} from 'expo';
import Note from './Note';
/* End of Imports */

export default class HomeScreen extends Component {
    render() {
        const {navigate} = this.props.navigation;

        return (
            <View style={styles.screenContainer}>
                <Text style={styles.mainTitle}>React Notes</Text>
                <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={true}>
                    <Note
                        title='Titre de la note'
                        date='XX/XX/XXXX'
                        text='Lorem ipsum dolor sit amet dalama le lobaum para siep en mi corazon'
                        id='-1'
                        navigation={this.props.navigation}
                    />
                </ScrollView>

                <TouchableOpacity
                    style={styles.roundButton}
                    activeOpacity={0.6}
                    onPress={() =>
                        navigate('Create', {})
                    }
                >
                    <Text style={styles.roundButtonText}>+</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        paddingTop: 5,
        paddingBottom: 20,
        backgroundColor: '#ddd',
    },
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        justifyContent: 'space-around',
    },
    mainTitle: {
        width: '100%',
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center',
        marginBottom: 15,
    },

    roundButton: {
        position: 'absolute',
        alignItems:'center',
        justifyContent:'center',
        bottom: 75,
        right: 25,
        width:75,
        height:75,
        backgroundColor:'#33cccc',
        borderRadius:75,
    },
    roundButtonText: {
        position: 'relative',
        bottom: 2,
        color: '#fff',
        fontSize: 50,
    },
});