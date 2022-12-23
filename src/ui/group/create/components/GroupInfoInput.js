import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

import PictureIcon from "../components/PictureIcon";

const GroupInfoInput = ()=>{

    return (
        <View style={styles.container}>
            {/* 방제목 이미지 및 text input */}
            <View style={styles.titleContainer}>
                <PictureIcon />
            </View>
            
            <View style={styles.subContainer}>
                <Text style={styles.titleText}>방제목</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder='제목을 입력해주세요.'
                />
            </View>

            {/* 활동 소개글 */}
            <View style={styles.subContainer}>
                <Text style={styles.titleText}>활동 소개글</Text>
                <TextInput
                    style={styles.textInput}
                    underlineColorAndroid='transparent'
                    multiline={true}
                    placeholder='내용을 입력해주세요.'
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexGrow: 1,
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth:2
    },
    titleContainer:{
        marginHorizontal: 14,
        alignItems: 'center',
    },
    subContainer:{
        marginHorizontal: 14,
        marginTop: 10,
        borderColor: 'black',
        borderWidth:2
    },
    titleText:{
        fontSize: 14,
        fontWeight: '600',
        color: 'black',
        //marginTop: 5,
        marginBottom: 10,
    },
    textInput:{
        //width: '90%',
        //height: 95,
        flexShrink: 1,
        fontSize: 16,
        textAlignVertical: 'top',
        backgroundColor: '#F6F6F6',
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingTop: 13,
        lineHeight: 10,
    },
    text:{
        fontSize: 16,
        textAlignVertical: 'top'
    },
})

export default GroupInfoInput;