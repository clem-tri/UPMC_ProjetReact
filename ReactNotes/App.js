/* Imports */
import React, { Component } from 'react';
import {StackNavigator} from 'react-navigation';
import HomeScreen from './components/HomeScreen';
import CreateNoteScreen from './components/CreateNoteScreen';
import ConsultNoteScreen from './components/ConsultNoteScreen';
/* End of Imports */

const RootStack = StackNavigator(
    {
        Home: { screen: HomeScreen },
        Create: { screen: CreateNoteScreen },
        Consult: { screen: ConsultNoteScreen },
    },
    {
        initialRouteName: 'Home',
    }
);

export default class App extends Component {
    render() {
        return (
            <RootStack />
        );
    }
}