import React from 'react';
import { StackNavigator} from 'react-navigation';
import ShowAllNotes from "./ShowAllNotes";
import ShowNote from "./ShowNote";
import AsyncStorageExample from "./AsyncStorageExample"


const App = StackNavigator({
    ShowAllNotes: { screen: ShowAllNotes },
    AsyncStorageExample: { screen: AsyncStorageExample },
});

export default App;