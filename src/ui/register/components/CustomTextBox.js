import React from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;

const CustomTextBox = ({title, content, style}) => {
    return (
        <View style={style}>
            <View style={styles.box}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.content}>{content}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        height: 52,
        width: windowWidth * 0.9,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#F6F6F6',
        borderRadius: 10,
        fontSize: 16,
    },
    title:{
        fontSize: 15,
        color: '#AAAAAA',
        marginHorizontal: 25,
    },
    content:{
        fontSize: 16,
        color: '#1A1A1A'
    }
})

export default CustomTextBox;