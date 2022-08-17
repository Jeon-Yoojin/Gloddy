import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import Feather from 'react-native-vector-icons/Feather';

const SettingInput = ({placeholder})=>{
    return(
        <TouchableOpacity>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{fontSize: 14, color: 'rgb(183, 183, 183)'}}>{placeholder}</Text>
                <Feather
                    name="chevron-right"
                    size={20}
                    style={{color: 'rgb(183, 183, 183)'}}
                />
            </View>
        </TouchableOpacity>
    )
}

export default SettingInput;