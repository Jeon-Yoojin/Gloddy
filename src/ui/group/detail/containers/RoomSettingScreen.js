import React from 'react';
import { SafeAreaView, View, TouchableOpacity, Text, Image, Dimensions, StyleSheet } from 'react-native';
import { Badge } from 'react-native-paper';
import Header from "../../../../common/Header";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const HorizontalLine = () => {
    return (
        <View style={{
            height: 1,
            width: windowWidth*0.925,
            borderBottomColor: "#EAEAEA",
            borderBottomWidth: 0.5,
            alignSelf: 'center'
        }} />
    )
}

const RoomSettingScreen = ()=>{
    const BackarrowImg = '../../../../assets/image/backarrow.png'

    return (
        <SafeAreaView>
            <Header
                title={"방 설정"}
                noIcon={false}
                leftIcon={< Image source={require(BackarrowImg)} style={styles.backarrow} />}
                leftIconPress={()=>{ console.log('LeftIcon presseed!') }}
            />
            <View style={styles.container}>
                <View style={styles.menu}><Text style={styles.headerText}>방 정보 관리</Text></View>
                <HorizontalLine />
                <TouchableOpacity style={[styles.menu, {flexDirection: 'row', justifyContent:'space-between', alignItems:'center'}]}>
                    <Text style={styles.normalText}>방 제목 및 사진 설정</Text>
                    <Text style={styles.icon}>&gt;</Text>
                </TouchableOpacity>
                <HorizontalLine />
                <TouchableOpacity style={[styles.menu, {flexDirection: 'row', justifyContent:'space-between', alignItems:'center'}]}>
                    <Text style={styles.normalText}>활동 소개글 설정</Text>
                    <Text style={styles.icon}>&gt;</Text>
                </TouchableOpacity>
                <HorizontalLine />
                <TouchableOpacity style={[styles.menu, {flexDirection: 'row', justifyContent:'space-between', alignItems:'center'}]}>
                    <Text style={styles.normalText}>모임 날짜 및 시간 설정</Text>
                    <Text style={styles.icon}>&gt;</Text>
                </TouchableOpacity>
                <HorizontalLine />
                <TouchableOpacity style={[styles.menu, {flexDirection: 'row', justifyContent:'space-between', alignItems:'center'}]}>
                    <Text style={styles.normalText}>모임 위치 설정</Text>
                    <Text style={styles.icon}>&gt;</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <View style={styles.menu}><Text style={styles.headerText}>멤버 관리</Text></View>
                <HorizontalLine />
                <TouchableOpacity style={[styles.menu, {flexDirection: 'row', justifyContent:'space-between', alignItems:'center'}]}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.normalText}>지원서 관리</Text>
                        <Badge style={{backgroundColor:'#8DD600', color: 'white', marginLeft: 5}}>2</Badge>
                    </View>
                    <Text style={styles.icon}>&gt;</Text>
                </TouchableOpacity>
                <HorizontalLine />
                <TouchableOpacity style={[styles.menu, {flexDirection: 'row', justifyContent:'space-between', alignItems:'center'}]}>
                    <Text style={styles.normalText}>최대 가능 인원 설정</Text>
                    <Text style={styles.icon}>&gt;</Text>
                </TouchableOpacity>
                <HorizontalLine />
            </View>
            <View style={styles.container}>
                <TouchableOpacity style={[styles.menu, {flexDirection: 'row', justifyContent:'space-between', alignItems:'center'}]}>
                    <Text style={[styles.normalText, {color: '#FF481D'}]}>방 삭제하기</Text>
                    <Text style={styles.icon}>&gt;</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        marginBottom: windowHeight*0.017
    },
    backarrow:{
        width: 14,
        height: 13,
    },
    menu:{
        height: windowHeight*0.055,
        justifyContent: 'center'
    },
    headerText:{
        fontSize: 14,
        fontWeight: '700',
        marginLeft: windowWidth*0.037
    },
    normalText:{
        fontSize: 16,
        fontWeight: '400',
        marginLeft: windowWidth*0.037
    },
    icon:{
        marginRight: windowWidth*0.0377,
        color:'#CDCDCD'
    }
})

export default RoomSettingScreen;