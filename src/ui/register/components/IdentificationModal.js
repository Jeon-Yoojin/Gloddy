import React, {useState} from "react";
import {SafeAreaView, Text, View, TouchableOpacity, StyleSheet, Dimensions, Touchable} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from "react-native-vector-icons/Feather";

import { BasicModal } from "../../../common/BasicModal";
import CustomButton from "../../../common/CustomButton";
import CustomInput from "../../../common/CustomInput";

import { useNavigation } from "@react-navigation/native";
import { verifyAuthCode } from "../../../api/auth";
import useUser from "../../../redux/hooks/useUser";

const windowHeight = Dimensions.get('window').height;

const IdentificationModal = ({makeUser, showBottomSheet, hide, showBehind}) => {
    const navigation = useNavigation();
    const user = useUser();
    const [authUser, setAuthUser] = useState({
        authCode: '',
        isActive: false,
        showText: false
    })

    const changeCode = (val) => {
        if(val.trim().length >= 1)
            setAuthUser({...authUser, authCode:val, isActive:true});
        else setAuthUser({...authUser, authCode:val, isActive:false});
    }

    const onPressFunc = () => {
        //verifyAuthCode(authUser)
        console.log(authUser.authCode);
        verifyAuthCode({email: user.email, authCode: authUser.authCode})
        .then(
            response=>{
                console.log("response", response);
                if(response.data.verify == true){
                    setAuthUser({...authUser, showText: false});
                    makeUser();
                    navigation.navigate("RegisterScreen");
                }
                else{
                    setAuthUser({...authUser, showText: true});
                }
            }
        )
        .catch(error=>console.log("onPressFunc error", error));
        navigation.navigate('PWSettingScreen');
        //navigation.navigate('RegisterScreen');
    }

    return(
        <BasicModal show={showBottomSheet} height={390} onOuterClick={hide}>
            <View style={styles.modalContainer}>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginHorizontal: 16, marginVertical: 25}}>
                    <TouchableOpacity>
                        <Feather
                            name="chevron-left"
                            size={30}
                            style={{ color: '#666666' }}
                            onPress={showBehind}
                        />
                    </TouchableOpacity>
                    <AntDesign name='closecircle' size={28} onPress={hide}/>
                </View>

                <View style={styles.bottomSheetContent}>
                    <Text style={styles.bottomSheetText}>회원님의 이메일로{'\n'}인증번호를 전송하였습니다.</Text>
                    <CustomInput
                        style={styles.customInput}
                        placeholder={'인증번호'}
                        onChangeText={changeCode}
                        onEndEditing={()=>{}}
                    />
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <TouchableOpacity><Text style={[styles.bottomSheetSubText, {borderBottomColor: '#CDCDCD', borderBottomWidth: 0.4,}]}>재전송하기</Text></TouchableOpacity>
                        {authUser.showText ? <Text style={[styles.bottomSheetSubText, { color: '#D7533E' }]}>인증번호를 다시 확인해주세요.</Text>:<></>}
                    </View>
                </View>
            </View>

            <CustomButton
                text={'완료'}
                color={authUser.isActive ? '#1249FC' : null}
                textColor={authUser.isActive ? '#FFFFFF' : null}
                style={{bottom: windowHeight*0.04, alignSelf: 'center'}}
                disabled={authUser.isActive ? false : true}
                onPress={onPressFunc}
            />
        </BasicModal>   
    )
}

const styles = StyleSheet.create({
    bottomSheetContent: {
        marginHorizontal: 20,
        zIndex: 1,
    },
    bottomSheetText:{
        fontSize: 20,
        fontWeight: '700',
        color: '#1A1A1A'
    },
    bottomSheetSubText:{
        fontSize: 14,
        color: '#CDCDCD',
        marginVertical: 10,
    },
    customInput:{
        marginTop: 23,
        marginBottom: 5, 
    },
    icon:{
        alignItems: 'flex-end',
        margin: 20
    },
    modalContainer:{
        flexGrow: 1,
    },
})

export default IdentificationModal;