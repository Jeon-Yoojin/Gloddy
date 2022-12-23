import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, Pressable } from "react-native";
import CommentIcon from '../../../../assets/image/comment.svg'
import { useNavigation } from '@react-navigation/native';
import ArticleHeader from './ArticleHeader';

const CommentButton = () => {
    return (
        <Pressable onPress={() => { console.log('댓글쓰기 event') }}>
            <View style={buttonStyles.container}>
                <CommentIcon/>
                <Text style={buttonStyles.text}>댓글쓰기</Text>
            </View>
        </Pressable>
    )
}

const Post = ({
    profileImgSrc,
    name,
    date,
    post,
    comments
}) => {
    const navigation = useNavigation();

    return (
        <Pressable style={styles.container} onPress={()=>navigation.navigate('ArticleDetailScreen', {profileImgSrc: profileImgSrc, name: name, date: date, post: post, comments: comments})}>
            <View style={{ marginHorizontal: 14 }}>
                <ArticleHeader
                    profileImgSrc={profileImgSrc}
                    name={name}
                    date={date}
                />
                <View>
                    <Text style={styles.post}>{post}</Text>
                </View>
                <Text style={styles.comment}>댓글 {comments}개</Text>

                <CommentButton />
            </View>
        </Pressable>
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
    }
})

const buttonStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        borderTopColor: '#FFFFFF',
        borderTopWidth: 0.5,
        paddingVertical: 14,
        marginTop: 5,
    },
    text: {
        fontSize: 12,
        color: '#AAAAAA',
        marginLeft: 8
    },
    img: {
        width: 14,
        height: 14,
        marginHorizontal: 3,
    }
})

export default Post;