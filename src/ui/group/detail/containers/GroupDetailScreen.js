import React from 'react';
import { SafeAreaView, Image, StyleSheet, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import CustomButton from '../../../../common/CustomButton';
import GroupDetailHeader from '../components/GroupDetailHeader';
import DetailInfoTab from '../containers/DetailInfoTab';
import BoardTab from './BoardTab';

const GroupDetailScreen = ()=>{
    const navigation = useNavigation();

    return(
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <GroupDetailHeader/>
            <Image source={require('../../../../assets/image/group/groupSample_big.png')} style={{width: '100%'}}/>
            {/* 임시 tab navigator */}
            <View style={{flexDirection: 'row'}}>
                <View style={styles.subContainer}>
                    <Text style={styles.tab}>상세 정보</Text>
                </View>
                <View style={[styles.subContainer, {borderBottomColor: '#1249FC', borderBottomWidth: 2,}]}>
                    <Text style={[{color: '#1249FC', fontWeight: '700'}, styles.tab]}>모임 게시판</Text>
                </View>
            </View>

            <BoardTab/>

            <View style={{alignItems: 'center', marginVertical: 5}}>
                <CustomButton text={'글쓰기'} onPress={()=>{navigation.navigate('PostingScreen')}}/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white'
    },
    subContainer:{
        borderBottomColor: '#EAEAEA',
        borderBottomWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 13,
        //marginHorizontal: 14,
        width: '50%'
    },
    tab:{
        fontSize: 14,
    },
    intro:{
        fontSize: 12,
        color: '#1A1A1A',
        marginVertical: 14
    },
    button:{
        alignItems: 'center',
        marginVertical: 10
    }
})

export default GroupDetailScreen;