import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Image, SafeAreaView, TouchableOpacity, Text, View, StyleSheet } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

import Header from "../../../../common/Header";

const UserInfo = ({imgSrc, userName, level}) => {
    return (
        <TouchableOpacity style={style.container}>
            <View style={style.subContainer}>
                <Image source={imgSrc} style={style.img}/>
                <Text style={{fontWeight: '700', fontSize: 14}}>{userName}</Text>
            </View>
            <View style={style.subContainer}>
                <Text style={{fontWeight: '700', fontSize: 10, color: '#1249FC'}}>{level}</Text>
                <AntDesign name='right' size={15} color={'#AAAAAA'} style={{margin: 20}}/>
            </View>
        </TouchableOpacity>
    )
}

const GroupMembers = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={{flex:1, backgroundColor:'#FFFFFF'}}>
            <Header
                title={'모임 멤버'}
                noIcon={false}
                noBorderLine={true}
                leftIcon={<AntDesign name='left' size={17} />}
                leftIconPress={() => { console.log('LeftIcon pressed!') }}
            />

            <UserInfo imgSrc={require('../../../../assets/image/sample/John.jpg')} userName={'John'} level={'SOUL MATE'}/>
            <UserInfo imgSrc={require('../../../../assets/image/sample/Maria.png')} userName={'Maria'} level={'MATE'}/>
            <UserInfo imgSrc={require('../../../../assets/image/sample/Sam.png')} userName={'Ki hyeon'} level={'MATE'}/>
            <UserInfo imgSrc={require('../../../../assets/image/sample/WillJones.png')} userName={'Yujin'} level={'MATE'}/>
            <UserInfo imgSrc={require('../../../../assets/image/sample/Tom.png')} userName={'Tom'} level={'MATE'}/>
            <UserInfo imgSrc={require('../../../../assets/image/sample/Lucy.png')} userName={'Lucy'} level={'MATE'}/>
            <UserInfo imgSrc={require('../../../../assets/image/sample/John.jpg')} userName={'1'} level={'MATE'}/>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        flexDirection:'row', 
        alignSelf: 'center',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
        borderRadius: 8,
        marginVertical: 6,
        width: '90%',
        height: 65
    }, 
    subContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    img: {
        width: 38,
        height:38,
        borderRadius: 19,
        margin: 15
    }
})

export default GroupMembers;