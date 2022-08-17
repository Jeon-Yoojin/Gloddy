import React, {useState} from 'react';
import { Text, TouchableHighlight, StyleSheet, TouchableOpacity } from 'react-native';

const PersonalityButton = (props) => {
    const [isPress, setIsPress] = useState(false);
    const touchProps = {
        style: isPress ? styles.btnPress : styles.btnNormal,
        onPress: () => setIsPress(!isPress),
    }

    return(
            <TouchableOpacity {...touchProps}>
                <Text style={[styles.buttonText, {color: isPress? 'white':'#B7B7B7'}]}>{props.text}</Text>
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btnNormal:{
        width: 168,
        height: 50,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#EAEAEA',
        borderRadius: 25,
        marginVertical: 5,
    },
    btnPress:{
        width: 168,
        height: 50,
        backgroundColor: '#404cf2',
        justifyContent: 'center',
        borderRadius: 25,
        marginVertical: 5,
    },
    buttonText:{
        fontSize: 16,
        lineHeight: 19,
        textAlign: 'center',
        fontFamily: 'Inter-Bold',
        fontWeight: '700',
    }
})

export default PersonalityButton;