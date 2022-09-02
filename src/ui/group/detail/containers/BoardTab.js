import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import CustomButton from '../../../../common/CustomButton';
import Notice from '../components/Notice';
import Post from '../components/Post';

const BoardTab = () => {
    const navigation = useNavigation();

    const boardInfo = [
        {
            imgSrc: require('../../../../assets/image/sample/John.jpg'),
            name: 'John',
            date: '2022.02.09 11:00',
            post: '안녕하세요! 모임에 가입해주셔서 다들 감사드립니다. 오늘 19:00에 있을 모임 참여 전 모임에 필요한 공지 및 전달사항 확인 부탁드리겠습니다.',
            comments: 10,
        },
        {
            imgSrc: require('../../../../assets/image/sample/Sam.png'),
            name: 'Ahn Ki Hyeon',
            date: '2022.02.09 12:00',
            post: "(가입인사) 안녕하세요.\n오늘 모임에 참여하게 된 안기현 입니다~\n잘 부탁드립니다!",
            comments: 10,
        },
        {
            imgSrc: require('../../../../assets/image/group/userSample.png'),
            name: 'username',
            date: 'date',
            post: 'content',
            comments: 5,
        },
    ]

    return (
        <>
            {/* 공지사항 */}
            <View>
                <Notice />
            </View>

            {/* 게시글 */}
            <ScrollView style={{ backgroundColor: '#F7F7F7' }}>
                {boardInfo.map((data, index) => {
                    return (
                        <Post
                            key={index}
                            imgSrc={data.imgSrc}
                            name={data.name}
                            date={data.date}
                            post={data.post}
                            comments={data.comments}
                        />

                    )
                })}
            </ScrollView>

            <View style={{alignItems: 'center', marginVertical: 5}}>
                <CustomButton text={'글쓰기'} onPress={()=>{navigation.navigate('PostingScreen')}}/>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
})

export default BoardTab;