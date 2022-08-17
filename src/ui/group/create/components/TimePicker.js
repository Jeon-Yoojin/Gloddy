import React, {useState} from 'react';
import { Dimensions, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import DatePicker from 'react-native-date-picker';

export default function TimePicker({setTimeValue, placeholder}) {

    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);
    const [text, onChangeText] = useState("");

    const handleConfirm = (date) => {
        setOpen(false);
        setDate(date);
        onChangeText(date.format("a/p hh:mm"))
        
        setTimeValue(date.format("a/p hh:mm"))
    };

    return (
      <>
            <TouchableOpacity onPress={()=>{setOpen(true)}}>
                <TextInput
                    pointerEvents="none"
                    style={styles.textInput}
                    placeholder={placeholder}
                    placeholderTextColor='#B7B7B7'
                    underlineColorAndroid="transparent"
                    editable={false}
                    value={text}
                    //onEndEditing={onEndEditing}
                />
                <DatePicker
                    modal
                    mode="time"
                    open={open}
                    onConfirm={handleConfirm}
                    onCancel={()=>{setOpen(false)}}
                    date={date}
                />
            </TouchableOpacity>
            </>
  );
}

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({ 
    textInput: {
        width: 83,
        height: 26, 
        fontSize: 14,
        fontWeight: '400',
        color: '#1A1A1A',
        //lineHeight: 16,
        textAlign: 'center',
        borderRadius: 20,
        backgroundColor: '#F2F2F2',
        paddingVertical: 0,
        paddingHorizontal: 0,
    }
})