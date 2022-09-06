import React, {useState} from 'react';
import { TextInput , StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const CustomInput = (props) => {
    const [text, onChangeText] = useState("");

    return (
            <TextInput
                style={[styles.input, props.style]}
                onChangeText={props.onChangeText}
                value={props.val}
                placeholder={props.placeholder}
                onEndEditing={props.onEndEditing}
                //onChangeText={}
            />
    )
}

const styles = StyleSheet.create({
    input: {
        height: 52,
        width: windowWidth*0.9,
        backgroundColor: '#F6F6F6',
        borderRadius: 10,
        padding: 15,
        fontSize: 16,
    }
})

export default CustomInput;