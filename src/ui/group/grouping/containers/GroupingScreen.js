import React from "react";
import { SafeAreaView, View, StyleSheet, ScrollView, Image, Pressable, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Entypo from "react-native-vector-icons/Entypo";
import useUser from "../../../../redux/hooks/useUser";

import Header from "../../../../common/Header";
import GroupElement from "../components/GroupElement";

const GroupInfo = [
    {
        imgSrc: require('../../../../assets/image/group/groupSample1.png'),
        title: 'Let\'s go for a walk!',
        introduction: 'It’s a group that walks around, talks,\nand learns languages.',
        maxNum: 6,
        user: [
            {
                imgSrc: require('../../../../assets/image/group/userSample.png'),
                name: 'Will Jones',
            },
            {
                imgSrc: require('../../../../assets/image/group/userSample.png'),
                name: 'Will Jones',
            },
            {
                imgSrc: require('../../../../assets/image/group/userSample.png'),
                name: 'Will Jones',
            },
        ],
        place: '동대문구 회기동',
        date: '04.27.FRI 19:00',
    },
    {
        imgSrc: require('../../../../assets/image/group/groupSample2.png'),
        title: 'Language Exchange',
        introduction: 'It’s a group that learns languages.',
        maxNum: 4,
        user: [
            {
                imgSrc: require('../../../../assets/image/group/userSample.png'),
                name: 'Will Jones',
            },
            {
                imgSrc: require('../../../../assets/image/group/userSample.png'),
                name: 'Will Jones',
            },
            {
                imgSrc: require('../../../../assets/image/group/userSample.png'),
                name: 'Will Jones',
            },
        ],
        place: '성북구 안암동',
        date: '04.30.MON 18:00',
    },
    {
        imgSrc: require('../../../../assets/image/group/groupSample3.png'),
        title: 'Impromptu for food tour!',
        introduction: 'It’s a group eats food.',
        maxNum: 5,
        user: [
            {
                imgSrc: require('../../../../assets/image/group/userSample.png'),
                name: 'Will Jones',
            },
            {
                imgSrc: require('../../../../assets/image/group/userSample.png'),
                name: 'Will Jones',
            },
            {
                imgSrc: require('../../../../assets/image/group/userSample.png'),
                name: 'Will Jones',
            },
        ],
        place: '동대문구 이문동',
        date: '04.30.MON 18:00',
    },
    {
        imgSrc: require('../../../../assets/image/group/category/work.png'),
        title: 'Work Together',
        introduction: 'It’s a group that walks around, talks,\nand learns languages.',
        maxNum: 3,
        user: [
            {
                imgSrc: require('../../../../assets/image/sample/John.jpg'),
                name: 'Will Jones',
            },
            {
                imgSrc: require('../../../../assets/image/group/userSample.png'),
                name: 'Will Jones',
            },
            {
                imgSrc: require('../../../../assets/image/group/userSample.png'),
                name: 'Will Jones',
            },
            {
                imgSrc: require('../../../../assets/image/group/userSample.png'),
                name: 'Will Jones',
            },
        ],
        place: '동대문구 회기동',
        date: '04.27.FRI 19:00',
    },
    {
        imgSrc: require('../../../../assets/image/group/category/game.png'),
        title: 'Playing Games!!! :)',
        introduction: 'It’s a group that walks around, talks,\nand learns languages.',
        maxNum: 6,
        user: [
            {
                imgSrc: require('../../../../assets/image/group/userSample.png'),
                name: 'Will Jones',
            },
            {
                imgSrc: require('../../../../assets/image/group/userSample.png'),
                name: 'Will Jones',
            },
            {
                imgSrc: require('../../../../assets/image/group/userSample.png'),
                name: 'Will Jones',
            },
        ],
        place: '용산구 청파동',
        date: '04.27.FRI 19:00',
    },
    {
        imgSrc: require('../../../../assets/image/group/groupSample3.png'),
        title: 'Let\'s go for a walk!',
        introduction: 'It’s a group that walks around, talks,\nand learns languages.',
        maxNum: 6,
        user: [
            {
                imgSrc: require('../../../../assets/image/group/userSample.png'),
                name: 'Will Jones',
            },
            {
                imgSrc: require('../../../../assets/image/group/userSample.png'),
                name: 'Will Jones',
            },
            {
                imgSrc: require('../../../../assets/image/group/userSample.png'),
                name: 'Will Jones',
            },
        ],
        place: '동대문구 회기동',
        date: '04.27.FRI 19:00',
    },
]

const GroupingScreen = () => {
    const user = useUser();

    const navigation = useNavigation();
    const PlusIcon = '../../../../assets/image/register/plus.png'

    return (
        <SafeAreaView style={[styles.container, {backgroundColor: '#FFFFFF'}]}>
            <View style={{ height: '100%' }}>
                {/* Header */}
                <Header
                    title={'그루핑'}
                    noIcon={false}
                    rightIcon={<Entypo name="magnifying-glass" size={25} />}
                    rightIconPress={() => { console.log('pressed!') }}
                />
                {/* test - user 정보 띄우기
                <Text>User email {user.email}</Text>
                <Text>User name {user.name}</Text>
                <Text>User school {user.school}</Text>
                <Text>User birth {user.birth}</Text>
                <Text>User gender {user.gender}</Text>
                <Text>User personality {user.personalities}</Text>
                 */}
                 
                {/* Group */}
                <ScrollView style={{ flexGrow: 1, marginVertical: 13, }}>
                {GroupInfo.map((data, index) => {
                    return (
                        <TouchableOpacity onPress={()=>{navigation.navigate('GroupDetailScreen')}} key={index}>
                            <GroupElement
                                key={index}
                                imgSrc={data.imgSrc}
                                title={data.title}
                                introduction={data.introduction}
                                maxNum={data.maxNum}
                                place={data.place}
                                date={data.date}
                            />
                        </TouchableOpacity>

                    )
                })}
                </ScrollView>

                {/* 추가버튼 */}
                <Pressable onPress={()=>{navigation.navigate('CreateGroupScreen')}}>
                    <View style={styles.plus}>
                        <Entypo
                            name="plus"
                            size={30}
                            style={{ color: 'white' }}
                        />
                    </View>
                </Pressable>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    plus: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#586ef3',
        alignItems: 'center',
        justifyContent: 'center',

        position: 'absolute',
        right: 20,
        bottom: 50,
    }
})

export default GroupingScreen;