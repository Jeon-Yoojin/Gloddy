import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, Text, Dimensions, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Header from '../../../common/Header';
import CustomInput from '../../../common/CustomInput';
import CustomButton from '../../../common/CustomButton';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SelectSchool = () => {
    const navigation = useNavigation();
    {/*
    const [schoolName, setSchoolName] = useState('');
    
    const changeName = (val) => {
        if(val.trim().length >= 1)
    }
    */}
    return (
        <SafeAreaView style={{flex:1, backgroundColor: '#ffffff'}}>
            <Header
                title={"시작하기"}
                noIcon={false}
                leftIcon={<AntDesign name='left' size={17} />}
                leftIconPress={() => { console.log('LeftIcon pressed!') }}
            />
            <Text style={styles.title}>재학중인 학교를{'\n'}선택해주세요</Text>
            <View style={{flex:1, justifyContent: 'space-between'}}>
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
                    text={'시작하기'}
                    color={'#1249FC'}
                    textColor={'#FFFFFF'}
                    style={{bottom: windowHeight*0.04, alignSelf: 'center'}}
                    onPress={()=>navigation.navigate('AuthScreen2')}
                    disabled={false}
                />
                {/* 
                <CustomButton
                    text={'시작하기'}
                    color={'수정' ? '#1249FC' : null}
                    textColor={'수정' ? '#FFFFFF' : null}
                    style={{bottom: windowHeight*0.04, alignSelf: 'center'}}
                    onPress={navigation.navigate('AuthScreen2')}
                    disabled={'수정' ? false : true}
                />
                */}
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
    input:{
        marginTop: windowHeight*0.037,
        marginLeft: windowWidth*0.053
    }
})

export default SelectSchool;