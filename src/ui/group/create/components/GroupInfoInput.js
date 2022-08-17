import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

import PictureIcon from "../components/PictureIcon";

const GroupInfoInput = ()=>{

    return (
        <View style={styles.container}>
            {/* 방제목 이미지 및 text input */}
            <View style={styles.titleContainer}>
                <PictureIcon />
                <View style={styles.titleTextContainer}>
                    <Text style={[styles.titleText, { marginBottom: 0 }]}>방제목</Text>
                    <TextInput style={styles.text} placeholder='제목을 입력해주세요.' />
                </View>
            </View>

            {/* 활동 소개글 */}
            <View style={{ marginHorizontal: 14, marginTop: 10}}>
                <Text style={styles.titleText}>활동 소개글</Text>
                <TextInput
                    style={styles.textInput}
                    underlineColorAndroid='transparent'
                    multiline={true}
                    placeholder='활동하고 싶은 모임의 소개를 적어주세요.'
                    numberOfLines={5}
                />
            </View>

            <View style={{flex:1, backgroundColor: '#F7F7F7'}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height: 240,
        backgroundColor: 'white'
    },
    titleContainer:{
        height: 90,
        flexDirection: 'row',
        marginHorizontal: 14,
        alignItems: 'center',
        borderBottomColor: '#EAEAEA',
        borderBottomWidth: 1,
    },
    titleTextContainer:{
        marginLeft: 10,
        marginVertical: 10,
        flex: 1,
    },
    titleText:{
        fontSize: 12,
        fontWeight: '700',
        color: 'black',
        //marginTop: 5,
        marginBottom: 10,
    },
    textInput:{
        //width: '90%',
        height: 95,
        flexShrink: 1,
        fontSize: 14,
        textAlignVertical: 'top',
        borderBottomColor: '#EAEAEA',
        borderBottomWidth: 1,
    },
    text:{
        fontSize: 16,
        textAlignVertical: 'top'
    },
})

export default GroupInfoInput;