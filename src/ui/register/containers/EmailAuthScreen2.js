import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, Text, Dimensions, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Header from '../../../common/Header';
import CustomInput from '../../../common/CustomInput';
import CustomButton from '../../../common/CustomButton';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const EmailAuthScreen2 = () => {
    const navigation = useNavigation();
    const [authUser, setAuthUser] = useState({
        userID:'',
        isActive: false,
        isValideUser: false
    });
    
    const changeID = (val) => {
        if( val.trim().length >= 1 )
            setAuthUser({...authUser, userID:val, isActive:true});
        else setAuthUser({...authUser, userID:val, isActive:false});
    }

    const authentication = (val) => {
        if(true){{/* 기존 사용자 */}
            navigation.navigate('LoginScreen', {userID: authUser.userID})
        }
        else{
            {/* 인증 실패시 회원가입 모달 컴포넌트 */}
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
            <Text style={styles.title}>학교 이메일을{'\n'}입력해주세요</Text>
            <View style={{flex:1, justifyContent: 'space-between'}}>
                <View>
                    <CustomInput
                        style={styles.idInput}
                        placeholder={'ID'}
                        onChangeText={changeID}
                    />  
                </View>
                <CustomButton
                    text={'시작하기'}
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
    }
})

export default EmailAuthScreen2;