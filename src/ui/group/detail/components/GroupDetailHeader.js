import React from 'react';
import { Image, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

import Header from "../../../../common/Header";

const GroupDetailHeader = ()=>{
    const navigation = useNavigation();

    const BackarrowImg = '../../../../assets/image/backarrow.png'

    return (
        < Header
            title={"Let's go for a walk!"}
            noIcon={false}
            leftIcon={< Image source={require(BackarrowImg)} style={styles.backarrow} />}
            leftIconPress={() => { console.log('LeftIcon pressed!') }}
            rightIcon={<Ionicons name='settings-outline' size={20}/>}
            rightIconPress={() => {navigation.navigate('RoomSettingScreen')}}
        />
    )
}

const styles = StyleSheet.create({
    backarrow:{
        width: 14,
        height: 13,
    },
})

export default GroupDetailHeader;