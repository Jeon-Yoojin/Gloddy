import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, Text, Dimensions, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { accountDupCheck, reqAuthCode } from '../../../api/auth';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Header from '../../../common/Header';
import CustomInput from '../../../common/CustomInput';
import CustomButton from '../../../common/CustomButton';
import useAuthActions from '../../../redux/hooks/useAuthAction';
import { searchLocation } from '../../../api/API';

import CheckDuplicateModal from '../components/CheckDuplicateModal';
import IdentificationModal from '../components/IdentificationModal';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const EmailAuthScreen2 = () => {
    const navigation = useNavigation();
    const {setEmail} = useAuthActions();

    const [authUser, setAuthUser] = useState({
        userID:'',
        isActive: false,
        isValideUser: false
    });

    const [showCheckModal, setShowCheckModal] = useState(false);
    const [showIdentifyModal, setShowIdentifyModal] = useState(false);
    
    const hideCheckModal = () => {
        setShowCheckModal(false);
    }
    const hideIdentifyModal = () => {
        if(authUser.isValideUser) setAuthUser({...authUser, isValideUser: false});
        setShowIdentifyModal(false);
    }
    const goToRegister = () => {
        setAuthUser({...authUser, isValideUser: true});
        setShowIdentifyModal(false);
        //navigation.navigate('RegisterScreen');
    }
    
    const changeID = (val) => {
        if( val.trim().length >= 1 ){
            setAuthUser({...authUser, userID:val, isActive:true});
        }
            
        else setAuthUser({...authUser, userID:val, isActive:false});
    }

    const sendAuthCode = () => {
        reqAuthCode(authUser.userID)
        .then(
            response =>{
                console.log(response);
            }
        )
        .catch(error=>console.log("sendAuthCode error", error));

        setShowCheckModal(false);
        setShowIdentifyModal(true);
    } 
    
    const authentication = (val) => {
        setEmail(authUser.userID);

        accountDupCheck(authUser.userID)
        .then(
            response=>{
                if(response.data.aboolean){
                    console.log('valid user!');
                    navigation.navigate('LoginScreen');
                }
                else{
                    console.log('없는 계정');
                    setShowCheckModal(true);
                }
            }
        )
        .catch(error=>console.log("accountDupCheckError", error));
    }
    
    return (
        <SafeAreaView style={{flex:1, backgroundColor: '#ffffff'}}>
            <Header
                title={"회원가입"}
                noIcon={false}
                leftIcon={<AntDesign name='left' size={17} />}
                leftIconPress={() => { console.log('LeftIcon pressed!') }}
            />
            <Text style={styles.title}>재학생 인증을 위해{'\n'}학교 이메일을 입력해주세요</Text>
            <View style={{flex:1, justifyContent: 'space-between'}}>
                <View>
                    <CustomInput
                        style={styles.idInput}
                        placeholder={'ID'}
                        onChangeText={changeID}
                        rightSpace={true}
                        editable={showCheckModal | showIdentifyModal ? false : true}
                        autoCorrect={false}
                        autoCapitalize={'none'}
                    />  
                    <Text style={{alignSelf:'center', marginTop: 10, color: '#D7533E'}}>학교 이메일을 다시 확인해주세요.</Text>
                </View>
                <CustomButton
                    text={'이메일 인증하기'}
                    color={authUser.isActive ? '#1249FC' : null}
                    textColor={authUser.isActive ? '#FFFFFF' : null}
                    style={{bottom: windowHeight*0.04, alignSelf: 'center'}}
                    onPress={authentication}
                    disabled={authUser.isActive ? false : true}
                />
            </View>
            {showCheckModal ?
                <CheckDuplicateModal showBottomSheet={showCheckModal} hide={hideCheckModal} showNext={sendAuthCode} userID={authUser.userID}/>
                /*<IdentificationModal showBottomSheet={showIdentifyModal} hide={hideIdentifyModal}/>*/
                : null
            }
            {showIdentifyModal ?
                <IdentificationModal showBottomSheet={showIdentifyModal} hide={hideIdentifyModal} showBehind={()=>{if(authUser.isValideUser) setAuthUser({...authUser, isValideUser: false}); setShowIdentifyModal(false); setShowCheckModal(true)}} makeUser={goToRegister}/>
                : null
            }
            {/*
                authUser.isValideUser ? navigation.navigate('RegisterScreen') : null
            */}
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