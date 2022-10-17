import React, {useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image} from "react-native";

import CheckButton from "../../../common/CheckButton";

const Attend = () => {
    const [isPress, setIsPress] = useState(false);

    return (
        <TouchableOpacity onPress={()=>{setIsPress(!isPress)}}>
            <Image source={require('../../../assets/image/review/delete.png')}/>
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