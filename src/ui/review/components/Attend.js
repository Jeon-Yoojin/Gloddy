import React, {useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity, } from "react-native";

import CheckButton from "../../../common/CheckButton";

const Attend = () => {
    const [isPress, setIsPress] = useState(false);

    return (
        <TouchableOpacity onPress={()=>{setIsPress(!isPress)}}>
            <View style={{ flexDirection: 'row' }}>
                <CheckButton checkStyle={{width:9, height: 6,}} isPress={isPress}/>
                <Text style={styles.text}>모임 불참</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text:{
        fontSize: 14,
        color: '#1A1A1A',
        marginLeft: 6,
    }
})

export default Attend;