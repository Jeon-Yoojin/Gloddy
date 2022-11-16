import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const UserProfile = ({imgSrc, name, imgSize, textSize, textColor})=>{
    
    return(
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={imgSrc} style={{width:imgSize, height: imgSize, borderRadius: imgSize/2}}/>
            <Text style={[styles.text, {fontSize: textSize, color: textColor}]}>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text:{
        fontSize: 12,
        fontWeight: 'bold',
        color: '#3A3A3A',
        marginHorizontal: 10,
    }
})

export default UserProfile;