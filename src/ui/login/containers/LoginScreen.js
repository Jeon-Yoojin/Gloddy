import React, {useEffect, useState} from 'react';
import { SafeAreaView, StyleSheet, Dimensions, Text, View, TouchableOpacity } from 'react-native';
import CustomInput from '../../../common/CustomInput';
import CustomButton from '../../../common/CustomButton';
import { useNavigation } from '@react-navigation/native';
import useLogin from '../../../hooks/useLogin';
import useUser from '../../../redux/hooks/useUser';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const LoginScreen = () => {
    const navigation = useNavigation();
    const {mutate: login, isLoading: loginLoading, error: loginError} = useLogin();
    const user = useUser();
    const [saveId, setSaveId] = useState(false);
    const [confirmMessage, setConfirmMessage] = useState(false);
    const [authUser, setAuthUser] = useState({
        userID: '',
        userPW: '',
        activeID: false,
        activePW: false,
        isValideUser: false
    });

    useEffect(()=>{
        if(loginError) setConfirmMessage(true);
    }, [loginError]);
    
    const changeID = (val) => {
        if(val.trim().length >= 1)
            setAuthUser({...authUser, userID: val, activeID: true});
        else setAuthUser({...authUser, userID: val, activeID: false});
    }

    const changePW = (val) => {
        if(val.trim().length >= 1)
            setAuthUser({...authUser, userPW:val, activePW:true});
        else setAuthUser({...authUser, userPW:val, activePW:false});
    }

    const authentication = (val) => {
        login({email: authUser.userID, password: authUser.userPW});
    }

    return (
        <SafeAreaView style={{flex:1, backgroundColor:'#FFFFFF'}}>
            <View>
                <View style={{width: 190, height:100, backgroundColor: '#1249FC', alignSelf: 'center', marginTop: 131}}></View>
                <CustomInput
                    style={{marginTop: windowHeight*0.037, alignSelf: 'center', width: windowWidth*0.8}}
                    onChangeText={changeID}
                    placeholder={'ID'}
                    autoCapitalize='none'
                />
                <CustomInput
                    style={{marginTop: windowHeight*0.022, alignSelf: 'center', width: windowWidth*0.8}}
                    placeholder={'PW'}
                    onChangeText={changePW}
                    secureTextEntry={true}
                    autoCapitalize='none'
                />
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 15}}>
                    <View style={{flexDirection: 'row', alignItems:'center'}}>
                        <View style={styles.checkBox}></View>
                        <Text style={styles.saveIdText}>아이디 자동 저장하기</Text>
                    </View>
                    <TouchableOpacity><Text style={styles.findPWText}>PW찾기</Text></TouchableOpacity>
                </View>
                <View style={styles.alertContainer}>
                    <View style={[styles.alertTriangle, {borderBottomColor: confirmMessage ? '#D7533E' : 'transparent'}]}></View>
                    <Text style={[styles.alertText, {color: confirmMessage ? '#D7533E' : '#FFFFFF'}]}>비밀번호를 다시 확인해주세요.</Text>
                </View>
                
                <CustomButton
                    text={'로그인'}
                    color={'#1249FC'}
                    textColor={'#FFFFFF'}
                    style={{alignSelf: 'center', marginTop: 20, width: windowWidth*0.8}}
                    onPress={authentication}
                />
                <View style={{flexDirection: 'row', alignItems:'center', marginHorizontal: 30, marginVertical: 20}}>
                    <View style={{flex:1, borderBottomWidth:1, borderBottomColor: '#E5E5E5'}}></View>
                    <Text style={{fontSize: 12, textAlign: 'center', color: '#C4C4C4', marginHorizontal: 20}}>또는</Text>
                    <View style={{flex:1, borderBottomWidth:1, borderBottomColor: '#E5E5E5'}}></View>
                </View>
                <CustomButton
                    text={'회원가입'}
                    color={'#D7533E'}
                    textColor={'#FFFFFF'}
                    style={{alignSelf: 'center', width: windowWidth*0.8}}
                    onPress={()=>navigation.navigate('SelectSchoolScreen')}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    title:{
        fontWeight: 'bold',
        fontSize: 24,
        marginTop: windowHeight*0.04,
        marginLeft: windowWidth*0.056
    },
    checkBox: {
        borderWidth:1,
        borderColor:'#000000',
        borderRadius: 2.23,
        width: 16,
        height:16,
        marginLeft: 50
    },
    saveIdText: {
        marginLeft: 10,
        color: '#AAAAAA',
        fontWeight: '500',
        fontSize: 14
    },
    findPWText:{
        alignSelf: 'flex-end',
        marginRight: 50,
        color: '#C4C4C4',
        fontWeight: '500',
        textDecorationLine: 'underline',
        fontSize: 14
    },
    alertContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 30,
        alignSelf: 'center'
    },
    alertTriangle: {
        width:0,
        height:0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 5,
        borderRightWidth: 5,
        borderBottomWidth: 10,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: '#D7533E'
    },
    alertText: {
        color:'#D7533E',
        alignSelf: 'center',
        marginLeft: 10
    },
})

export default LoginScreen;