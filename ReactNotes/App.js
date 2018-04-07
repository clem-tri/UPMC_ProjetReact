import React from 'react';
import { StackNavigator} from 'react-navigation';
import ShowAllNotes from "./ShowAllNotes";
import ShowNote from "./ShowNote";


export default App = StackNavigator({
    ShowAllNotes: { screen: ShowAllNotes },
    ShowNote: { screen: ShowNote },
});