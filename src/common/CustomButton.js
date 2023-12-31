import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CustomButton = (props) => {
    return(
            <TouchableOpacity style={[styles.button, props.style, props.color? {backgroundColor: props.color}:{}, props.disabled? {}:styles.activeButton]} onPress={props.onPress} disabled={props.disabled}>
                <Text style={[styles.buttonText, props.textColor? {color: props.textColor}:{}]}>{props.text}</Text>
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        width: windowWidth*0.9,
        height: 52,
        marginBottom: windowHeight*0.01,
        alignSelf: 'center',
        backgroundColor: '#F6F6F6',
        padding: 15,
        borderRadius: 8,
    },
    buttonText:{
        fontSize: 17,
        lineHeight: 25,
        textAlign: 'center',
        fontFamily: 'Inter-Bold',
        color: '#CDCDCD',
        fontWeight: '800',
    }
})

export default CustomButton;