import React from "react";
import { View, Image, StyleSheet} from "react-native";

const CheckButton = ({isPress, circleSize, checkStyle}) => {
    const checkImg = '../assets/image/review/check.png'

    return (
        <View style={[styles.circle, {backgroundColor: isPress? '#1249FC': 'white', borderWidth: isPress? 0 : 1.5, width: circleSize? circleSize : 21, height: circleSize? circleSize : 21}]}>
            <Image source={require(checkImg)} style={[{tintColor: isPress? 'white':'#CDCDCD'}, checkStyle]}/>
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