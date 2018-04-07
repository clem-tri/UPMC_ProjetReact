/* Imports */
import React, { Component } from 'react';
import {StackNavigator} from 'react-navigation';
import HomeScreen from './components/HomeScreen';
/* End of Imports */

const Nav = StackNavigator({
    Home: { screen: HomeScreen },
    Create: { screen: CreateNote },
});

export default class App extends Component {
  render() {
    return (
          <HomeScreen/>
    );
  }
}


