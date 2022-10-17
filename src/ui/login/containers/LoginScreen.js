import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, Dimensions, Text, View, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Header from '../../../common/Header';
import CustomInput from '../../../common/CustomInput';
import CustomButton from '../../../common/CustomButton';
import useUser from '../../../redux/hooks/useUser';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const LoginScreen = ({navigation: {navigate}, route}) => {
    const BackarrowImg = '../../../assets/image/backarrow.png'
    const user = useUser();

    const [authUser, setAuthUser] = useState({
        userPW: '',
        isActive: false,
        isValideUser: false
    });

    const changePW = (val) => {
        if(val.trim().length > 1)
            setAuthUser({...authUser, userPW:val, isActive:true});
        else setAuthUser({...authUser, userPW:val, isActive:false});
    }

    const authentication = (val) => {
        if(true){{/* 로그인 성공 */}
            navigate('MainScreen')
        }
        else{{/* 로그인 실패 */}

        }
    }

    return (
        <SafeAreaView style={{flex:1, backgroundColor:'#FFFFFF'}}>
            <Header
                    title={"시작하기"}
                    noIcon={false}
                    leftIcon={<AntDesign name='left' size={17} />}
                    leftIconPress={() => { console.log('LeftIcon pressed!') }}
            />
            <Text style={styles.title}>비밀번호를{'\n'}입력해주세요</Text>
            <View style={{flex:1, justifyContent: 'space-between'}}>
                <View>
                    <CustomInput
                        style={styles.idInput}
                        placeholder={'ID'}
                        value={user.email}
                        editable={false}
                        rightIcon={true}
                    />
                    <CustomInput
                        style={styles.pwInput}
                        placeholder={'PW'}
                        onChangeText={changePW}
                        rightSpace={true}
                        secureTextEntry={true}
                    />
                    <TouchableOpacity><Text style={styles.subText}>PW찾기</Text></TouchableOpacity>
                </View>
                <CustomButton
                    text={'로그인'}
                    color={authUser.isActive ? '#1249FC' : null}
                    textColor={authUser.isActive ? '#FFFFFF' : null}
                    style={{bottom: windowHeight*0.04, alignSelf: 'center'}}
                    onPress={authentication}
                    disabled={authUser.isActive ? false : true}
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
        fontSize: 12
    }
})

export default LoginScreen;