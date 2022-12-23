import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, Dimensions, Text, View, TouchableOpacity } from 'react-native';
import RegisterHeader from '../components/RegisterHeader';
import CustomInput from '../../../common/CustomInput';
import CustomButton from '../../../common/CustomButton';
import useUser from '../../../redux/hooks/useUser';
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const PWSettingScreen = () => {
    const user = useUser();
    const navigation = useNavigation();

    const [authUser, setAuthUser] = useState({
        userPW: '',

        isActive: false,
        isValidUser: false,
    });

    const changePW = (val) => {
        if(val.trim().length >= 1)
            setAuthUser({...authUser, userPW:val.trim(), isActive:true});
        else setAuthUser({...authUser, userPW:val.trim(), isActive:false});
    }

    return (
        <SafeAreaView style={{flex: 1, backgroundColor:'#FFFFFF'}}>
            <RegisterHeader/>
            <Text style={styles.title}>비밀번호를{'\n'}설정해주세요</Text>
            <View style={{flex: 1, justifyContent: 'space-between'}}>
                <View>
                    <CustomInput
                        style={styles.idInput}
                        placeholder={'ID'}
                        value={user.email}
                        editable={false}
                    />
                    <CustomInput
                        style={styles.pwInput}
                        placeholder={'PW'}
                        onChangeText={changePW}
                        secureTextEntry={true}
                    />
                </View>
                <CustomButton
                    text={'완료'}
                    color={authUser.isActive ? '#1249FC' : null}
                    textColor={authUser.isActive ? '#FFFFFF' : null}
                    style={{alignSelf: 'center'}}
                    onPress={()=>{/* PW 정책 확인 */ setAuthUser({...authUser, isValidUser: true}); navigation.navigate('PWConfirmScreen', {'firstPW': authUser.userPW});}}
                    disabled={authUser.isActive ? false : true}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    title:{
        fontWeight: '700',
        fontSize: 24,
        lineHeight: 40,
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

export default PWSettingScreen;