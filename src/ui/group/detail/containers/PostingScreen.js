import React, { useCallback, useState } from "react";
import { View, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from "react-native";

import CheckButton from "../../../../common/CheckButton";
import CustomButton from "../../../../common/CustomButton";
import Header from "../../../../common/Header";
import GalleryIcon from '../../../../assets/image/galleryIcon.svg';
import BackArrow from '../../../../assets/image/backarrow.svg';
import { useMutation } from "react-query";
import { createArticle } from "../../../../api/article";
import { useNavigation } from "@react-navigation/native";

const PostingScreen = ({route}) => {
    const navigation = useNavigation();
    const BackarrowImg = '../../../../assets/image/backarrow.png';
    const [post, setPost] = useState({
            body: '',
            isNotice: false,
        })

    const onChangeBody = (body)=>{
        setPost({
            ...post,
            body:body,
        })
    }

    const onPressButton = ()=>{
        setPost({
            ...post,
            isNotice: !post.isNotice,
        })
    }

    const { mutate: create } = useMutation(createArticle,{
        onSuccess: data =>{
            console.log('createArticle Success', data)
        },
        onerror: error =>{
            console.log('createArticle Error', error)
        },
        onSettled: () => {
            navigation.goBack();
        }
    })

    const onSubmit = useCallback(()=>{
        create({
            groupId: route.params.groupId,
            request:{
                content: post.body
            }
        })
    })

    return (
        <SafeAreaView style={styles.container}>
            <Header
                title={'게시글 작성'}
                noIcon={false}
                leftIcon={<BackArrow width={8} height={15}/>}
                leftIconPress={() => { console.log('pressed!') }}
                rightIcon={<GalleryIcon width={26} height={26}/>}
                rightIconPress={() => { console.log('pressed!') }}
            />
            <TextInput
                style={styles.textInput}
                value={post.body}
                onChangeText={onChangeBody}
                underlineColorAndroid='transparent'
                multiline={true}
                placeholder="게시글을 작성해보세요."
            />

            <KeyboardAvoidingView
                behavior="padding"
                enabled
            >
                <TouchableOpacity onPress={onPressButton}>
                    <View style={styles.notice}>
                        <CheckButton circleSize={21} checkStyle={{ width: 9, height: 6 }} isPress={post.isNotice}/>
                        <Text style={styles.noticeText}>위 글을 공지로 설정합니다.</Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>

            <CustomButton
                text={'글쓰기'}
                color={post.body.length > 0 ? '#1249FC' : null}
                textColor={post.body.length > 0 ? '#FFFFFF' : null}
                style={{ alignSelf: 'center', marginBottom: 21 }}
                onPress={onSubmit}
                disabled={post.body.length > 0 ? false : true}
            />
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
        paddingVertical: 18,
        paddingHorizontal: 20,
        
        backgroundColor: '#F5F5F5',
        borderRadius: 10,
        
        borderWidth: 1,
        borderColor: 'black'
        //paddingVertical: 15,
        //paddingHorizontal: 13,
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