import React, {useState} from 'react';
import { SafeAreaView, Text, View, Image, TouchableOpacity, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import CustomInput from '../../../common/CustomInput';
import CustomButton from '../../../common/CustomButton';
import { ToSModal } from './ToSModal';

const EmailAuthScreen = ()=>{
    const navigation = useNavigation();
    const WelcomeImg = '../../../assets/image/login/welcome.png';
    const ConfettiImg = '../../../assets/image/login/confetti.png';

    return(
        <SafeAreaView style={styles.container}>
            <Image source={require(WelcomeImg)} style={{ height: 140, width: 190 }} />
            <Image source={require(ConfettiImg)} style={{ height: 150, width: 300, margin: 20 }}/>

        <View style={{marginVertical: 10}}><CustomInput placeholder={'학교 이메일을 입력해주세요.'}/></View>
        <View style={{marginBottom: 15}}><CustomButton text={'다음'} onPress={()=>{navigation.navigate('ConfirmScreen')}}/></View>

            <View style={{ flexDirection: 'row' }}>
                <Text style={[styles.text, { color: 'grey' }]}>이미 계정이 있나요? </Text>
                <TouchableOpacity>
                    <Text style={[styles.text, { fontWeight: '900' }]}>로그인</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
        borderColor: '#EAEAEA',
        borderWidth: 1,
        borderRadius: 40,
        padding: 18,
        paddingHorizontal: 70,
        marginTop: 70,
        marginBottom: 15,
    },
    text: {
        fontSize: 14,
        color: 'black',
    },
    buttonText: {
        fontSize: 20,
    },
    bottomSheetContent: {
        padding: 40,
        alignItems: 'center',
        zIndex: 1,
    },
    bottomSheetText: {
        fontSize: 24,
        marginBottom: 80,
    },
    bottomSheetCloseButton: {
        padding: 16,
        backgroundColor: 'deeppink',
        borderRadius: 8,
    },
})

export default EmailAuthScreen;