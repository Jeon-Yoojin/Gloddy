import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, Text, Dimensions, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RegisterHeader from '../components/RegisterHeader';
import CustomInput from '../../../common/CustomInput';
import CustomButton from '../../../common/CustomButton';
import { BasicModal } from '../../../common/BasicModal';
import CheckButton from '../../../common/CheckButton';
import FrontArrow from '../../../assets/image/frontarrow.svg';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SelectSchool = () => {
    const navigation = useNavigation();
    const [showBottomSheet, setShowBottomSheet] = useState(true);
    const [isAgree, setIsAgree] = useState({
        firstAgreement: false,
        secondAgreement: false
    });
    {/*
    const [schoolName, setSchoolName] = useState('');
    
    const changeName = (val) => {
        if(val.trim().length >= 1)
    }
    */}
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#ffffff'}}>
            <RegisterHeader/>
            <Text style={styles.title}>재학중인 학교를{'\n'}선택해주세요</Text>
            <View style={{flex: 1, justifyContent: 'space-between'}}>
                <View>
                    <CustomInput
                        style={styles.input}
                        placeholder={'학교'}
                        rightSpace={true}
                    />
                    {/* 
                    <CustomInput
                        style={styles.input}
                        placeholder={'학교'}
                        onChangeText={'수정'}
                        rightSpace={true}
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
            {showBottomSheet?
                <BasicModal show={showBottomSheet} height={290}>
                    <Text style={styles.bottomSheetText}>약관 동의</Text>
                    <View style={{justifyContent: 'space-between'}}>
                        <View style={styles.bottomSheetContent}>
                            <TouchableOpacity style={{marginTop: 35, flexDirection: 'row'}} onPress={() => { isAgree.firstAgreement && isAgree.secondAgreement ? setIsAgree({firstAgreement: false, secondAgreement: false}) : setIsAgree({firstAgreement: true, secondAgreement: true}); }}>
                                <CheckButton checkStyle={{width: 18, height: 18, marginRight: 10}} isPress={isAgree.firstAgreement && isAgree.secondAgreement} />
                                <Text style={styles.text}>전체 동의</Text>                  
                            </TouchableOpacity>
                            <View style={{height: 20, width: windowWidth*0.87, borderBottomWidth: 1, borderBottomColor: '#EAEAEA', marginBottom: 20}}></View>
                            <View style={{flexDirection: 'row'}}>
                                <TouchableOpacity onPress={()=>{setIsAgree({...isAgree, firstAgreement: !isAgree.firstAgreement});}}>
                                    <CheckButton checkStyle={{height: 18, width: 18, marginRight: 10}} isPress={isAgree.firstAgreement} />
                                </TouchableOpacity>
                                <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-between', flex: 1}} onPress={()=>{/* 약관 상세 조회 */}}>
                                    <View style={{flexDirection: 'row'}}>
                                        <Text style={{fontSize: 12, fontWeight: '400', color:'#CDCDCD', }}>(필수) </Text>
                                        <Text style={{fontSize: 12, fontWeight: '400', color: '#1A1A1A'}}>서비스 이용약관 동의</Text>
                                    </View>
                                    <View>
                                        <FrontArrow/>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{flexDirection: 'row', marginTop: 16}}>
                                <TouchableOpacity onPress={()=>{setIsAgree({...isAgree, secondAgreement: !isAgree.secondAgreement});}}>
                                    <CheckButton checkStyle={{height: 18, width: 18, marginRight: 10}} isPress={isAgree.secondAgreement} />
                                </TouchableOpacity>
                                <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-between', flex: 1}} onPress={()=>{/* 약관 상세 조회 */}}>
                                    <View style={{flexDirection: 'row'}}>
                                        <Text style={{fontSize: 12, fontWeight: '400', color:'#CDCDCD', }}>(필수) </Text>
                                        <Text style={{fontSize: 12, fontWeight: '400', color: '#1A1A1A'}}>개인정보 취급방침 동의</Text>
                                    </View>
                                    <View>
                                        <FrontArrow/>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <CustomButton
                            text='완료'
                            color={isAgree.firstAgreement && isAgree.secondAgreement ? '#1249FC' : null}
                            textColor={isAgree.firstAgreement && isAgree.secondAgreement ? '#FFFFFF' : null}
                            disabled={isAgree.firstAgreement && isAgree.secondAgreement ? false : true}
                            onPress={()=>{setShowBottomSheet(false); /* 약관 동의 서버에 저장 */}}/>
                    </View>
                </BasicModal>
            :
                <></>
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
    input:{
        marginTop: windowHeight*0.037,
        marginLeft: windowWidth*0.053
    },
    text: {
        fontSize: 14,
        fontWeight: '700',
        color: '#1A1A1A',
    },
    bottomSheetContent: {
        marginHorizontal: 25,
        marginBottom: 30
    },
    bottomSheetText: {
        fontSize: 16,
        fontWeight: '700',
        marginTop: 20,
        alignSelf: 'center'
    },
    bottomSheetCloseButton: {
        padding: 16,
        backgroundColor: 'deeppink',
        borderRadius: 8,
    },
})

export default SelectSchool;