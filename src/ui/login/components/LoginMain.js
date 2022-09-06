import React, {useEffect, useState} from 'react';
import { SafeAreaView, Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CheckButton from '../../../common/CheckButton';
import CustomButton from '../../../common/CustomButton';
import { BasicModal } from '../../../common/BasicModal';

const LoginMain = ()=>{
    const navigation = useNavigation();

    const WelcomeImg = '../../../assets/image/login/welcome.png'

    const [isPress, setIsPress] = useState(false);
    const [showBottomSheet, setShowBottomSheet] = useState(false)
    

    const hide = () => {
      setShowBottomSheet(false)
    }
  

    return(
        <SafeAreaView style={styles.container}>
            <Image source={require(WelcomeImg)} style={{ height: 140, width: 190 }} />

            <TouchableOpacity style={styles.button}
                onPress={() => { setShowBottomSheet(true) }}>
                <Text style={styles.text}>학교계정으로 계속하기</Text>
            </TouchableOpacity>

            {showBottomSheet?
                <BasicModal show={showBottomSheet} height={290} onOuterClick={hide}>
                    <View style={styles.bottomSheetContent}>
                        <Text style={styles.bottomSheetText}>약관 동의</Text>

                        <TouchableOpacity onPress={() => { setIsPress(!isPress) }}>
                            <View style={{ flexDirection: 'row' }}>
                                <CheckButton checkStyle={{ width: 9, height: 6, }} isPress={isPress} />
                                <Text style={styles.text}>전체 동의</Text>
                            </View>
                        </TouchableOpacity>

                        <CustomButton text="확인" onPress={()=>{navigation.navigate('AuthScreen2')}}/>
                    </View>
                </BasicModal>
            :
                <View style={{ flexDirection: 'row' }}>
                    <Text style={[styles.text, { color: 'grey' }]}>이미 계정이 있나요? </Text>
                    <TouchableOpacity>
                        <Text style={[styles.text, { fontWeight: '900' }]}>로그인</Text>
                    </TouchableOpacity>
                </View>
            }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
        borderColor: '#EAEAEA',
        borderWidth: 1,
        borderRadius: 40,
        padding: 18,
        paddingHorizontal: 70,
        marginTop: 70,
        marginBottom: 15,
    },
    text: {
        fontSize: 14,
        color: 'black',
    },
    buttonText: {
        fontSize: 20,
    },
    bottomSheetContent: {
        padding: 40,
        alignItems: 'center',
        zIndex: 1,
    },
    bottomSheetText: {
        fontSize: 24,
        marginBottom: 80,
    },
    bottomSheetCloseButton: {
        padding: 16,
        backgroundColor: 'deeppink',
        borderRadius: 8,
    },
})

export default LoginMain;