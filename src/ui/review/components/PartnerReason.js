import React from "react"
import { View, Text, TextInput, StyleSheet } from "react-native"

const PartnerReason = () => {
    return (
        <View style={styles.subContainer}>
            <Text style={styles.text}>선정이유</Text>
            <TextInput
                style={styles.textInput}
                underlineColorAndroid='transparent'
                multiline={true}
                placeholder='최고의 짝꿍 선정 이유를 적어주세요.'
                numberOfLines={5}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    subContainer:{
        borderBottomColor: '#EAEAEA',
        borderBottomWidth: 1,
        //marginTop: 14,
        marginHorizontal: 14,
    },
    text:{
        fontWeight: 'bold',
        fontSize: 12,
        color: '#1A1A1A',
        marginTop: 16,
        marginBottom: 3,
    },
    textInput:{
        height: 100,
        flexShrink: 1,
        fontSize: 14,
        textAlignVertical: 'top',
        color: '#1A1A1A',
    },
})

export default PartnerReason;