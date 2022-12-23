import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, Text, Dimensions, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { accountDupCheck, reqAuthCode } from '../../../api/auth';
import CustomInput from '../../../common/CustomInput';
import CustomButton from '../../../common/CustomButton';
import RegisterHeader from '../components/RegisterHeader';
import IdentificationModal from '../components/IdentificationModal';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const EmailAuthScreen = () => {
    const navigation = useNavigation();
    
    const [authUser, setAuthUser] = useState({
        userID:'',
        isActive: false,
        isValideUser: false
    });

    const [showIdentifyModal, setShowIdentifyModal] = useState(false);
    const [confirmMessage, setConfirmMessage] = useState(false);
    
    const hideIdentifyModal = () => {
        if(authUser.isValideUser) setAuthUser({...authUser, isValideUser: false});
        setShowIdentifyModal(false);
    }
    const completeVerify = () => {
        setAuthUser({...authUser, isValideUser: true});
        setShowIdentifyModal(false);
    }
    
    const changeID = (val) => {
        if( val.trim().length >= 1 ){
            setAuthUser({...authUser, userID:val.trim(), isActive:true});
        }
        else setAuthUser({...authUser, userID:val.trim(), isActive:false});
    }

    const authentication = () => {
        accountDupCheck(authUser.userID)
        .then(response=>{
            if(response.data.aboolean){
                console.log('existing user');
                navigation.navigate('LoginScreen');
            }
            else{
                console.log('없는 계정');
                setShowIdentifyModal(true);
                return reqAuthCode(authUser.userID);
            }
        })
        .catch(error=>{
            setShowIdentifyModal(false);
            console.log("authentication error", error);
        })
    }
    
    return (
        <SafeAreaView style={{flex:1, backgroundColor: '#ffffff'}}>
            <RegisterHeader/>
            <Text style={styles.title}>재학생 인증을 위해{'\n'}학교 이메일을 입력해주세요</Text>
            <View style={{flex:1, justifyContent: 'space-between'}}>
                <View>
                    <CustomInput
                        style={styles.idInput}
                        placeholder={'ID'}
                        onChangeText={changeID}
                        rightSpace={true}
                        editable={showIdentifyModal ? false : true}
                        autoCorrect={false}
                        autoCapitalize={'none'}
                    />
                    <View style={styles.alertContainer}>
                        <View style={styles.alertTriangle}></View>
                        <Text style={styles.alertText}>학교 이메일을 다시 확인해주세요.</Text>
                    </View>
                </View>
                <CustomButton
                    text={'인증하기'}
                    color={authUser.isActive ? '#1249FC' : null}
                    textColor={authUser.isActive ? '#FFFFFF' : null}
                    style={{alignSelf: 'center'}}
                    onPress={authentication}
                    disabled={authUser.isActive ? false : true}
                />
            </View>
            {showIdentifyModal ?
                <IdentificationModal showBottomSheet={showIdentifyModal} hide={hideIdentifyModal} completeVerify={completeVerify} userID={authUser.userID}/>
                : null
            }
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
})

export default EmailAuthScreen;