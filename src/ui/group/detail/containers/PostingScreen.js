import React from "react";
import { View, SafeAreaView, StyleSheet, Image, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from "react-native";

import CheckButton from "../../../../common/CheckButton";
import Header from "../../../../common/Header";

const PostingScreen = () => {
    const BackarrowImg = '../../../../assets/image/backarrow.png';

    return (
        <SafeAreaView style={styles.container}>
            <Header
                title={'게시글 작성'}
                noIcon={false}
                leftIcon={< Image source={require(BackarrowImg)} style={styles.backarrow} />}
                leftIconPress={() => { console.log('pressed!') }}
                rightIcon={<Text style={styles.rightIcon}>완료</Text>}
                rightIconPress={() => { console.log('pressed!') }}
            />
            <TextInput
                style={styles.textInput}
                underlineColorAndroid='transparent'
                multiline={true}
                placeholder="게시글을 작성해보세요."
                numberOfLines={5}
            />

            <KeyboardAvoidingView
                behavior="padding"
                enabled
            >
                <TouchableOpacity>
                    <View style={styles.notice}>
                        <CheckButton circleSize={21} checkStyle={{ width: 9, height: 6 }} />
                        <Text style={styles.noticeText}>위 글을 공지로 설정합니다.</Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backarrow: {
        width: 14,
        height: 13,
    },
    rightIcon: {
        fontSize: 16,
        color: '#B7B7B7'
    },
    textInput: {
        flex: 1,
        fontSize: 14,
        textAlignVertical: 'top',
        color: '#1A1A1A',
        marginHorizontal: 14,
        paddingTop: 22,
    },
    notice: {
        flexDirection: 'row',
        borderTopColor: 'black',
        borderTopWidth: 0.5,
        alignItems: 'center',
        marginHorizontal: 14,
        paddingVertical: 14,
    },
    noticeText: {
        fontSize: 14,
        color: '#1A1A1A',
        marginLeft: 5,
    }
})

export default PostingScreen;