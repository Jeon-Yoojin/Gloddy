import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, Dimensions, Text, View, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Header from '../../../common/Header';
import CustomInput from '../../../common/CustomInput';
import CustomButton from '../../../common/CustomButton';
import useUser from '../../../redux/hooks/useUser';
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const LoginScreen2 = () => {
    const BackarrowImg = '../../../assets/image/backarrow.png'
    const user = useUser();
    const navigation = useNavigation();

    const [authUser, setAuthUser] = useState({
        userID: '',
        userPW: '',
        activeID: false,
        activePW: false,
        isValideUser: false
    });
    
    const changeID = (val) => {
        if(val.trim().length > 1)
            setAuthUser({...authUser, userID: val, activeID: true});
        else setAuthUser({...authUser, userID: val, activeID: false});
    }

    const changePW = (val) => {
        if(val.trim().length > 1)
            setAuthUser({...authUser, userPW:val, activePW:true});
        else setAuthUser({...authUser, userPW:val, activePW:false});
    }

    const authentication = (val) => {
        if(true){{/* 로그인 성공 */}
            navigation.navigate('MainScreen')
        }
        else{{/* 로그인 실패 */}

        }
    }

    return (
        <SafeAreaView style={{flex:1, backgroundColor:'#FFFFFF'}}>
            <View>
                    <View style={{width: 190, height:100, backgroundColor: '#1249FC', alignSelf: 'center', marginTop: 131}}></View>
                    <CustomInput
                        style={styles.idInput}
                        onChangeText={changeID}
                        placeholder={'ID'}
                    />
                    <CustomInput
                        style={styles.pwInput}
                        placeholder={'PW'}
                        onChangeText={changePW}
                        rightSpace={true}
                        secureTextEntry={true}
                    />
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={{marginTop: 15, marginLeft: 20, color: '#AAAAAA', fontWeight: '500', textDecorationLine: 'underline', fontSize: 14}}>ID 자동 저장하기</Text>
                        <TouchableOpacity><Text style={styles.subText}>PW찾기</Text></TouchableOpacity>
                    </View>
                    <CustomButton
                        text={'로그인'}
                        color={authUser.activeID && authUser.activePW ? '#1249FC' : null}
                        textColor={authUser.activeID && authUser.activePW ? '#FFFFFF' : null}
                        style={{alignSelf: 'center'}}
                        onPress={authentication}
                        disabled={authUser.activeID && authUser.activePW ? false : true}
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
    idInput:{
        marginTop: windowHeight*0.037,
        alignSelf: 'center'
    },
    pwInput:{
        marginTop: windowHeight*0.022,
        alignSelf: 'center'
    },
    subText:{
        alignSelf: 'flex-end',
        marginTop: 15,
        marginRight: 20,
        color: '#C4C4C4',
        fontWeight: '500',
        textDecorationLine: 'underline',
        fontSize: 14
    }
})

export default LoginScreen2;