import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, Dimensions, Text, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Header from '../../../common/Header';
import CustomInput from '../../../common/CustomInput';
import CustomButton from '../../../common/CustomButton';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const LoginScreen = ({navigation: {navigate}, route}) => {
    const BackarrowImg = '../../../assets/image/backarrow.png'
    const [authUser, setAuthUser] = useState({
        userID: route.params.userID,
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
        <SafeAreaView style={{flex:1}}>
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
                        value={authUser.userID}
                        editable={false}
                        rightIcon={true}
                    />
                    <CustomInput
                        style={styles.pwInput}
                        placeholder={'PW'}
                        onChangeText={changePW}
                    />
                </View>
                <CustomButton
                    text={'로그인'}
                    color={authUser.isActive ? '#1249FC' : null}
                    textColor={authUser.isActive ? '#FFFFFF' : null}
                    style={{bottom: windowHeight*0.04, alignSelf: 'center'}}
                    onPress={authUser.isActive ? authentication : null}
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
        marginLeft: windowWidth*0.053
    },
    pwInput:{
        marginTop: windowHeight*0.022,
        marginLeft: windowWidth*0.053
    }
})

export default LoginScreen;