import React from "react";
import { View, Image, StyleSheet} from "react-native";

import Check from '../assets/image/check.svg'

const CheckButton = ({isPress, circleSize, checkStyle}) => {
    const checkImg = '../assets/image/review/check.png'

    return (
        <View style={[styles.circle, {backgroundColor: isPress? '#1249FC': '#CDCDCD', borderWidth: isPress? 0 : 1.5, width: circleSize? circleSize : 21, height: circleSize? circleSize : 21}]}>
                <Check/>
        </View>
    )
}

const styles = StyleSheet.create({
    circle:{
        width: 21,
        height: 21,
        borderRadius: 21,
        borderColor: '#CDCDCD',
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default CheckButton;