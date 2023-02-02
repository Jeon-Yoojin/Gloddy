import React, {useState} from 'react';
import { StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useQuery } from 'react-query';
import { getArticles } from '../../../../api/article'

import CustomButton from '../../../../common/CustomButton';
import Notice from '../components/Notice';
import Post from '../components/Post';

const BoardTab = () => {
    const navigation = useNavigation();
    const groupId = useRoute().params.groupId;

    const articleQuery = useQuery(['article', groupId], () => getArticles({groupId: groupId}))

    if (!articleQuery.data) {
        return (
            <ActivityIndicator size="large" style={styles.spinner} color="black" />
        )
    }
    const articles = articleQuery.data.previews?.contents;
    
    const boardInfo = [
        {
            profileImgSrc: require('../../../../assets/image/sample/John.jpg'),
            name: 'John',
            date: '2022.02.09 11:00',
            post: '안녕하세요! 모임에 가입해주셔서 다들 감사드립니다.\n오늘 19:00에 있을 모임 참여 전 모임에 필요한 공지 및 전달사항 확인 부탁드리겠습니다.',
            comments: 10,
        },
        {
            profileImgSrc: require('../../../../assets/image/sample/Sam.png'),
            name: 'Ahn Ki Hyeon',
            date: '2022.02.09 12:00',
            post: "(가입인사) 안녕하세요.\n오늘 모임에 참여하게 된 안기현 입니다~\n잘 부탁드립니다!",
            comments: 10,
        },
        {
            profileImgSrc: require('../../../../assets/image/group/userSample.png'),
            name: 'username',
            date: 'date',
            post: 'content',
            comments: 5,
        },
    ]

    return (
        <>
            <ScrollView style={{ backgroundColor: 'white' }}>
                {/* 공지사항 */}
                <Notice />

                {/* 게시글 */}
                {articles.map((data, index) => {
                    return (
                        <Post
                            key={index}
                            notice={data.notice}
                            name={data.name}
                            date={data.date}
                            post={data.content}
                            comments={data.commentCount}
                            profileImgSrc={require('../../../../assets/image/sample/Sam.png')}
                        />

                    )
                })}
            </ScrollView>
            <CustomButton
                text={'글쓰기'}
                color='#1249FC'
                textColor='#FFFFFF'
                onPress={() => {
                    navigation.navigate('PostingScreen', {
                        groupId
                    })
                }}
            />
        </>
    )
}

const styles = StyleSheet.create({
    spinner: {
        flex: 1,
    }
})

export default BoardTab;