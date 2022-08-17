import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, Pressable } from "react-native";
import Feather from 'react-native-vector-icons/Feather';

const CommentButton = () => {
    const commentIcon = '../../../../assets/image/group/comment.png'

    return (
        <Pressable onPress={() => { console.log('댓글쓰기 event') }}>
            <View style={buttonStyles.container}>
                <Image source={require(commentIcon)} style={buttonStyles.img} />
                <Text style={buttonStyles.text}>댓글쓰기</Text>
            </View>
        </Pressable>
    )
}

const Post = ({
    imgSrc,
    name,
    date,
    post,
    comments
}) => {
    return (
        <View style={styles.container}>
            <View style={{ marginHorizontal: 14 }}>
                <View style={styles.user}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={imgSrc} style={styles.img} />
                        <View style={styles.row}>
                            <Text style={styles.name}>{name}</Text>
                            <Text style={styles.date}>{date}</Text>
                        </View>
                    </View>
                    <TouchableOpacity>
                        <Feather
                            name='more-vertical'
                            size={18}
                        />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.post}>{post}</Text>
                </View>
                <Text style={styles.comment}>댓글 {comments}</Text>

                <CommentButton />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        marginTop: 14
    },
    row: {
        justifyContent: 'center',
        marginLeft: 10,
    },
    user: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    img: {
        width: 38,
        height: 38,
        borderRadius: 19,
    },
    name: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#1A1A1A'
    },
    date: {
        fontSize: 10,
        color: '#B7B7B7',
        marginTop: 2,
    },
    post: {
        fontSize: 14,
        fontWeight: '400',
        color: '#1A1A1A',
        marginVertical: 17,
    },
    comment: {
        marginVertical: 6,
        fontSize: 12,
        color: '#7F7F7F'
    }
})

const buttonStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        borderTopColor: '#EAEAEA',
        borderTopWidth: 0.5,
        paddingVertical: 14,
        marginTop: 5,
    },
    text: {
        fontSize: 12,
        color: '#1A1A1A',
    },
    img: {
        width: 14,
        height: 14,
        marginHorizontal: 3,
    }
})

export default Post;