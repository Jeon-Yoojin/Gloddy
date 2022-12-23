import React, {useEffect, useState} from "react";
import {SafeAreaView, Text, View, TouchableOpacity, StyleSheet, Dimensions, Touchable} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from "react-native-vector-icons/Feather";

import { BasicModal } from "../../../common/BasicModal";
import CustomButton from "../../../common/CustomButton";
import CustomInput from "../../../common/CustomInput";

import { useNavigation } from "@react-navigation/native";
import { verifyAuthCode } from "../../../api/auth";
import useAuthActions from "../../../redux/hooks/useAuthAction";
import { reqAuthCode } from "../../../api/auth";

const windowHeight = Dimensions.get('window').height;

const IdentificationModal = ({completeVerify, showBottomSheet, hide, userID}) => {
    const navigation = useNavigation();
    const {setEmail} = useAuthActions();
    
    const [authUser, setAuthUser] = useState({
        authCode: '',
        isActive: false,
    })
    const [confirmMessage, setConfirmMessage] = useState(false);

    const [timer, setTimer] = useState(180000);
    const [minute, setMinute] = useState(0);
    const [second, setSecond] = useState(0);

    useEffect(() => {
        /* 남은시간 분, 초로 변환 */
        let tempMinute = parseInt(timer/1000/60).toString();
        let tempSecond = parseInt(timer/1000%60).toString();
        if(tempSecond.length === 1) tempSecond = "0"+tempSecond;
        setMinute(tempMinute);
        setSecond(tempSecond);

        if(timer <= 0){
            hide();
        }
    }, [timer]);

    useEffect(() => {
        const id = setInterval(()=>{
            setTimer(time => time-1000);
        }, 1000);

        return () => clearInterval(id);
    }, []);

    const changeCode = (val) => {
        if(val.trim().length >= 1)
            setAuthUser({...authUser, authCode:val, isActive:true});
        else setAuthUser({...authUser, authCode:val, isActive:false});
    }

    const verifyCode = () => {
        verifyAuthCode({email: userID, authCode: authUser.authCode})
        .then(
            response=>{
                console.log("verifyAuthCode", response.status);
                if(response.data.verify == true){
                    setEmail(userID);
                    setConfirmMessage(false);
                    completeVerify();
                    navigation.navigate("PWSettingScreen");
                }
                else{
                    setConfirmMessage(true);
                }
            }
        )
        .catch(error=>{
            console.log("verityAuthCode error", error);
            setConfirmMessage(true);
        });
    }

    const requestAgain = () => {
        reqAuthCode(userID)
        .then(
            response=>{
                // 시간 재설정
            }
        )
        .catch(
            error=>{
                console.log("requestAgain error ", error);
            }
        )
    }

    return(
        <BasicModal show={showBottomSheet} height={375} onOuterClick={hide}>
            <View style={styles.modalContainer}>
                <View style={{ flexDirection: 'row-reverse', marginHorizontal: 16, marginVertical: 25}}>
                    <AntDesign name='closecircle' size={28} onPress={hide}/>
                </View>

                <View style={styles.bottomSheetContent}>
                    <Text style={styles.bottomSheetText}>회원님의 이메일로{'\n'}인증번호를 전송하였습니다.</Text>
                    <CustomInput
                        style={styles.customInput}
                        placeholder={'인증번호'}
                        onChangeText={changeCode}
                        onEndEditing={()=>{}}
                        short={true}
                    />
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <TouchableOpacity onPress={requestAgain}>
                            <Text style={[styles.bottomSheetSubText, {borderBottomColor: '#CDCDCD', borderBottomWidth: 0.4,}]}>재전송하기</Text>
                        </TouchableOpacity>
                        {confirmMessage ? <Text style={[styles.bottomSheetSubText, { color: '#D7533E' }]}>인증번호를 다시 확인해주세요.</Text>:<></>}
                        <Text style={[styles.bottomSheetSubText, { color: '#D7533E' }]}>{minute}:{second}</Text>
                    </View>
                </View>
            </View>

            <CustomButton
                text={'완료'}
                color={authUser.isActive ? '#1249FC' : null}
                textColor={authUser.isActive ? '#FFFFFF' : null}
                disabled={authUser.isActive ? false : true}
                onPress={verifyCode}
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