import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const CustomButton = (props) => {
    return(
            <TouchableOpacity style={[styles.button, props.style, props.color? {backgroundColor: props.color}:{}]} onPress={props.onPress} disabled={props.disabled}>
                <Text style={[styles.buttonText, props.textColor? {color: props.textColor}:{}]}>{props.text}</Text>
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        width: windowWidth*0.9,
        height: 52,
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