import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const CustomButton = (props) => {
    return(
            <TouchableOpacity style={[styles.button, props.color? {backgroundColor: props.color}:{}]} onPress={props.onPress}>
                <Text style={styles.buttonText}>{props.text}</Text>
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        width: windowWidth*0.9,
        height: 52,
        backgroundColor: '#404cf2',
        padding: 15,
        borderRadius: 8,
    },
    buttonText:{
        fontSize: 17,
        lineHeight: 25,
        textAlign: 'center',
        fontFamily: 'Inter-Bold',
        color: 'white',
        fontWeight: '800',
    }
})

export default CustomButton;