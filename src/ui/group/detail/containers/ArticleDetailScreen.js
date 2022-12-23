import React, { useState } from "react";
import { SafeAreaView, View, Text, StyleSheet, Dimensions, TouchableOpacity, TextInput } from "react-native";
import Header from "../../../../common/Header";
import ArticleHeader from "../components/ArticleHeader";

import BackArrow from "../../../../assets/image/backarrow.svg";
import CommentIcon from "../../../../assets/image/comment.svg";
import CommentButton from "../../../../assets/image/commentBig.svg";

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const ArticleDetailScreen = ({navigation: {navigate}, route}) => {
    const [comment, setComment] = useState('');

    const commentChange = (val) => {
        if(val.trim().length >= 1)
            setComment(val.trim());
        else setComment('');
    }

    const getComments = () => {
        /* 댓글 로드 */
    }

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#ffffff'}}>
            <Header
                title={'게시글 작성'}
                noIcon={false}
                leftIcon={<BackArrow/>}
                leftIconPress={() => { console.log('pressed!') }}
            />

            <View style={{flex: 1, justifyContent: 'space-between'}}>
                <View style={[styles.container, {paddingHorizontal: windowWidth*0.05, paddingVertical: windowHeight*0.01}]}>
                    <ArticleHeader
                        profileImgSrc={route.params.profileImgSrc}
                        name={route.params.name}
                        date={route.params.date}
                    />
                    <View>
                        <Text style={styles.post}>{route.params.post}</Text>
                    </View>
                    <Text style={styles.comment}>댓글 {route.params.comments}개</Text>
                </View>
                
                <View style={{flexDirection: 'row', justifyContent: 'center', marginBottom: 10}}>
                    <View style={styles.commentInput}>
                        <CommentIcon/>
                        <TextInput
                            style={{marginLeft: 10}}
                            placeholder="댓글쓰기"
                            placeholderTextColor={'#AAAAAA'}
                            onChangeText={commentChange}
                        />
                    </View>
                    <TouchableOpacity onPress={()=>{/* 댓글 등록 */}} style={styles.commentButton}>
                        <CommentButton/>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#F6F6F6',
        borderRadius: 8,
        marginTop: 12,
        marginHorizontal: 21,
    },
    post: {
        fontSize: 12,
        fontWeight: '500',
        lineHeight: 20,
        color: '#3A3A3A',
        marginTop: 15,
        marginBottom: 5
    },
    comment: {
        marginTop: 6,
        marginBottom: 12,
        fontSize: 12,
        color: '#7F7F7F'
    },
    commentInput: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '70%',
        backgroundColor: '#F6F6F6',
        borderRadius: 8,
        paddingLeft: 20,
        marginRight: 10,
    },
    commentButton: {
        backgroundColor: '#1249FC',
        width: 50,
        height: 50,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    }
})


export default ArticleDetailScreen;