import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, Text, Dimensions, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RegisterHeader from '../components/RegisterHeader';
import CustomInput from '../../../common/CustomInput';
import CustomButton from '../../../common/CustomButton';
import AgreementModal from '../components/AgreementModal';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SelectSchoolScreen = () => {
    const navigation = useNavigation();
    const [showBottomSheet, setShowBottomSheet] = useState(true);
    const [isAgree, setIsAgree] = useState({
        firstAgreement: false,
        secondAgreement: false
    });
    const [schoolName, setSchoolName] = useState('');
    /*
    const changeSchoolName = (val) => {
        if(val.trim().length >= 1)
            setSchoolName(val.trim());
        else setSchoolName('');
    }
    */

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#ffffff'}}>
            <RegisterHeader/>
            <Text style={styles.title}>재학중인 학교를{'\n'}선택해주세요</Text>
            <View style={{flex: 1, justifyContent: 'space-between'}}>
                <View>
                    <CustomInput
                        style={styles.input}
                        placeholder={'학교'}
                    />
                    {/* 
                    <CustomInput
                        style={styles.input}
                        placeholder={'학교'}
                        onChangeText={changeSchoolName}
                    />
                    */}
                </View>
                <CustomButton
                    text={'완료'}
                    color={'#1249FC'}
                    textColor={'#FFFFFF'}
                    onPress={()=>navigation.navigate('AuthScreen')}
                    disabled={false}
                />
                {/* 
                <CustomButton
                    text={'완료'}
                    color={'수정' ? '#1249FC' : null}
                    textColor={'수정' ? '#FFFFFF' : null}
                    style={{bottom: windowHeight*0.04, alignSelf: 'center'}}
                    onPress={navigation.navigate('AuthScreen')}
                    disabled={'수정' ? false : true}
                />
                */}
            </View>
            <AgreementModal showBottomSheet={showBottomSheet} setShowBottomSheet={setShowBottomSheet} isAgree={isAgree} setIsAgree={setIsAgree} />
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
    input:{
        marginTop: windowHeight*0.037,
        marginLeft: windowWidth*0.053
    },
})

export default SelectSchoolScreen;