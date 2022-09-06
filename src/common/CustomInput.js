import React, {useState} from 'react';
import { TextInput , StyleSheet, Dimensions, View, Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const windowWidth = Dimensions.get('window').width;

const CustomInput = (props) => {
    const [text, onChangeText] = useState("");

    return (
        <View style={[styles.input, props.style]}>
            <Text style={{color: '#AAAAAA', fontSize:16}}>{props.placeholder}</Text>
            <TextInput
                style={{width: '80%', height:'100%'}}
                onChangeText={props.onChangeText}
                value={props.value}
                onEndEditing={props.onEndEditing}
                editable={props.editable}
                //onChangeText={}
            />
            {props.rightIcon ?
                <AntDesign name="checkcircle" color="#1249FC" size={16}/>
                : <View style={{width:16, height:16}}/>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 52,
        width: windowWidth*0.9,
        backgroundColor: '#F6F6F6',
        borderRadius: 10,
        padding: 15,
    }
})

export default CustomInput;