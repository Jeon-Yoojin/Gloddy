import React from 'react';
import { SafeAreaView, Text, StyleSheet, View, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import CustomInput from '../../../common/CustomInput';
import CustomButton from '../../../common/CustomButton';

const windowWidth = Dimensions.get('window').width;

const EmailConfirmScreen = ()=>{
    const navigation = useNavigation();

    return(
        <SafeAreaView style={styles.container}>
            <View style={{flex: 0.35, justifyContent:'center'}}>
                <Text style={styles.text}>회원님의 이메일로{'\n'}인증번호를 전송하였습니다.</Text>
            </View>

            <View style={{alignItems: 'center'}}>
                <CustomInput placeholder={'인증번호를 입력해주세요.'}/>
                <View style={{marginVertical: 20}}></View>
                <CustomButton text={'다음'} onPress={()=>{navigation.navigate('RegisterScreen')}}/>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex:1,
    },
    text:{
        fontSize: 18,
        fontWeight: '900',
        color: 'black',
        marginLeft: windowWidth*0.05
    }
})

export default EmailConfirmScreen;