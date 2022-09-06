import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import DetailInfo from '../components/DetailInfo';
import UserProfile from '../components/UserProfile';
import CustomButton from '../../../../common/CustomButton';

const DetailInfoTab = ()=>{
    return(
        <>
            {/* 상세 정보 - 모임 소개글 */}
            <View style={styles.subContainer}>
                <Text style={styles.intro}>It's a group that walks around, talks, {'\n'}and learns languages.</Text>
            </View>

            {/* 모임 참여 인원 */}
            <UserProfile/>

            {/* 모임 상세 정보 */}
            <DetailInfo/>
            
            {/* 지원 버튼 */}
            <View style={styles.button}>
                <CustomButton
                    text={'지원하기'}
                    color='#1249FC'
                    textColor='#FFFFFF'
                    onPress={()=>{navigation.navigate('PostingScreen')}}
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    subContainer:{
        borderBottomColor: '#EAEAEA',
        borderBottomWidth: 1,
        justifyContent: 'center',
        marginHorizontal: 14,
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

export default DetailInfoTab;