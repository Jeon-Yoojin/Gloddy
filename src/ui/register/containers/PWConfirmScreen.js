import React, { useState } from "react";
import { SafeAreaView, Dimensions, Text, View, StyleSheet } from "react-native";
import useUser from "../../../redux/hooks/useUser";
import RegisterHeader from "../components/RegisterHeader";
import CustomInput from "../../../common/CustomInput";
import CustomButton from "../../../common/CustomButton";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const PWConfirmScreen = ({navigation: {navigate}, route}) => {
    const user = useUser();
    const [authUser, setAuthUser] = useState({
        userPW: '',

        isActive: false,
        isValidUser: false,
    });
    const [confirmMessage, setConfirmMessage] = useState(false);

    const changePW = (val) => {
        if(val.trim().length >= 1)
            setAuthUser({...authUser, userPW:val.trim(), isActive:true});
        else setAuthUser({...authUser, userPW:val.trim(), isActive:false});
    }

    const setPW = () => {
        if(route.params.firstPW === authUser.userPW){
            setAuthUser({...authUser, isValidUser: true});
            setConfirmMessage(false);
            navigate('RegisterScreen', {'userPW': authUser.userPW});
        }
        else{//비밀번호 불일치
            setConfirmMessage(true);
        }
    }

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#FFFFFF'}}>
            <RegisterHeader/>
            <Text style={styles.title}>설정한 비밀번호를{'\n'}다시 입력해주세요</Text>
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
                        value={route.params.firstPW}
                        secureTextEntry={true}
                        editable={false}
                    />
                    <CustomInput
                        style={styles.pwInput}
                        placeholder={'PW'}
                        onChangeText={changePW}
                        secureTextEntry={true}
                    />
                    <View style={styles.alertContainer}>
                        <View style={[styles.alertTriangle, {borderBottomColor: confirmMessage ? '#D7533E' : 'transparent'}]}></View>
                        <Text style={[styles.alertText, {color: confirmMessage ? '#D7533E' : '#FFFFFF'}]}>비밀번호가 일치하지 않습니다.</Text>
                    </View>
                </View>
                <CustomButton
                    text={'완료'}
                    color={authUser.isActive ? '#1249FC' : null}
                    textColor={authUser.isActive ? '#FFFFFF' : null}
                    style={{alignSelf: 'center'}}
                    onPress={setPW}
                    disabled={authUser.isActive ? false : true}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    title:{
        fontWeight: '700',
        fontSize: 24,
        lineHeight: 40,
        marginTop: windowHeight*0.04,
        marginLeft: windowWidth*0.056,
    },
    idInput:{
        marginTop: windowHeight*0.037,
        alignSelf: 'center'
    },
    pwInput:{
        marginTop: windowHeight*0.022,
        alignSelf: 'center'
    },
    alertContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
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
});

export default PWConfirmScreen;