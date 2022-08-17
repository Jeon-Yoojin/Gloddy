import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { Dimensions, View, StyleSheet } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const CustomPicker = (props)=>{
    const [selectedValue, setSelectedValue] = useState();

    const items = props.items;
    const placeholder = props.placeholder;

    return (
        <View style={styles.container}>
            <Picker
                style={{ width: windowWidth * 0.9 }}
                selectedValue={selectedValue}
                onValueChange={(itemValue, itemIndex) => {
                    setSelectedValue(itemValue);
                    props.setSelectedValue(itemValue);
                }
                }
            >
                <Picker.Item label={placeholder} value={''} color={'#B7B7B7'} enabled={false}/>
                {items.map((item, i) => {
                    return (
                        <Picker.Item label={item.label} value={item.value} key={i} color={'black'}/>
                    )
                })}
            </Picker>
        </View>
    )
}

CustomPicker.defaultProps = {
    items: [{label: '기본값', value: 'default'}],
    placeholder: 'placeholder'
}

const styles = StyleSheet.create({
    container:{
        height: 52,
        width: windowWidth*0.9,
        borderWidth: 1,
        borderColor: '#B7B7B7',
        borderRadius: 10,
    }
})

export default CustomPicker;