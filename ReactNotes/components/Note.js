/* Imports */
import {Component} from "react";
import {StyleSheet} from "react-native";
/* End of Imports */

class Note extends Component {
    constructor(props) {
        super(props);

        this.id = -1;
        this.textTest = () => {
            let textCrop = this.props.text;
            console.log(this.props.text);
            let size = 50;

            if(textCrop.length > size)
                textCrop = textCrop.substring(0,size)+'...';

            return textCrop;
        }
    }

    //Render method
    render() {
        return (
            <View style={styles.note}>
                <Text style={styles.titleNote}>
                    {this.props.title}
                </Text>
                <Text style={styles.dateNote}>
                    {this.props.date}
                </Text>
                <Text style={styles.textNote}>
                    {this.textTest()}
                </Text>
            </View>
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
    dateNote: {
        color: '#fff',
        textAlign: 'center',
        fontStyle: 'italic',
    },
    textNote: {
        margin: 10,
        color: '#fff',
        textAlign: 'center',
    },
});