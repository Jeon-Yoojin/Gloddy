import React, {useState} from 'react';
import { View, StyleSheet, Pressable, Image, Platform, ActionSheetIOS } from 'react-native';
//import { useSafeAreaInsets } from 'react-native-safe-area-context';

import ProfileUploadModal from './ProfileUploadModal';

const ProfileIcon = ()=>{
    const ProfileImg = '../../../assets/image/register/profile3.png'
    const PlusImg = '../../../assets/image/register/plus.png'

    return(
        <View style={styles.container}>
            <Image source={require(ProfileImg)} style={styles.profile} />

            <View style={{ position: 'absolute', right: 0, bottom: 0 }}>
                <Image source={require(PlusImg)} style={styles.plus} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems:'flex-end',
        borderColor: 'grey',
        height: 84,
        width: 84,
        justifyContent:'center',
        borderRadius: 42,
        
    },
    profile:{
        height: 84,
        width: 84,
        borderRadius: 42,
        borderColor: 'grey'
    },
    plus:{
        height: 20,
        width: 20,
        borderRadius: 10,
        zIndex: 2,
    }
})

export default ProfileIcon;