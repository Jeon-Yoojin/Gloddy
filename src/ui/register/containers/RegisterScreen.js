import React, { useState } from "react";
import { SafeAreaView, Text, StyleSheet, View, Dimensions, TouchableOpacity, Image, TextInput, Alert } from 'react-native';
import * as ImagePicker from "react-native-image-picker"

import DropDownPicker from 'react-native-dropdown-picker';
import CustomButton from "../../../common/CustomButton";
import CustomPicker from "../../../common/CustomPicker";
import DatePicker from "../../../common/DatePicker";

import RegisterHeader from "../components/RegisterHeader";
import GetPermission from "../../../common/GetPermission";
import PlusIcon from '../../../assets/image/plusIcon.svg';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const RegisterScreen = ({navigation: {navigate}, route})=>{
    const genderItem = [{ label: '남성', value: 'male' }, { label: '여성', value: 'female' }];

    const [data, setData] = useState({
        profileImage: null,
        name: '',
        birthday: '',
        gender: '',
        
        isValidName: true,
        isValidBday: false,
        isValidGender: false,
    });
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);

    {/* 닉네임 onchange */}
    const nameChange = (val) => {
        if( val.trim().length >= 1 ) {
            setData({
                ...data,
                name: val.trim(),
                isValidName: true
            });
        } else {
            setData({
                ...data,
                name: val.trim(),
                isValidName: false
            });
        }
    }

    {/* 성별 onchange */}
    const selectChange = (val)=>{
        setData({
            ...data,
            gender: val,
            isValidGender: true,
        });
    }

    {/* 생일 onchange */}
    const dateChange = (val)=>{
        setData({
            ...data,
            birthday: val,
            isValidBday: true,
        });
    }

    const handleValidName = (val) => {
        if( val.trim().length >= 1 ) {
            setData({
                ...data,
                isValidName: true
            });
        } else {
            setData({   
                ...data,
                isValidName: false
            });
        }
    }

    const getPhotoWithPermission = async () => {
        try{
            const hasPermission = await GetPermission();
            console.log("hasPermission", hasPermission);

            if(hasPermission){
                ImagePicker.launchImageLibrary(
                    {
                        mediaType: 'photo'
                    },
                    (res)=>{
                        if(res.didCancel) {
                            setData({...data, profileImage: null});
                            return;
                        }
                        console.log("selected photo", res);
                        setData({...data, profileImage: res.assets[0]?.uri});
                    }
                )
            }
            else{
                Alert.alert(
                    "권한이 없습니다",
                    "갤러리 접근 권한이 필요합니다"
                );
            }
        } catch (error){
            console.log("getPhotoWithPermission error", error);
        }
    }

    const photolibrary = () => {
        // no permission check
        ImagePicker.launchImageLibrary(
            {
                mediaType: 'photo'
            },
            (res)=>{
                if(res.didCancel){
                    setData({...data, profileImage: null});
                    return;
                }
                console.log("selected photo", res);
                setData({...data, profileImage: res.assets[0]?.uri});
            }
        )
    }

    return(
        <SafeAreaView style={{flex: 1, backgroundColor: '#FFFFFF'}}>
            {/* Header */}
            <RegisterHeader/>

            {/* 프로필 아이콘 */}
            <TouchableOpacity
                style={{alignSelf: 'center', width: 98, height:98, borderRadius: 98/2, backgroundColor: '#F5F5F5', marginTop: 25, marginBottom: 10}}
                onPress={getPhotoWithPermission}
            >
                <Image
                    style={{width: 98, height:98, borderRadius: 98/2}}
                    source={{uri: data.profileImage}}
                />
                <PlusIcon
                    fill={'#1249FC'}
                    style={{position: 'absolute', right:0, bottom: 0}}
                />
            </TouchableOpacity>

            <View style={{flex: 1, justifyContent: 'space-between'}}>
                <View>
                    {/* 닉네임 */}
                    <Text style={styles.text}>닉네임</Text>
                    <TextInput
                        style={[styles.input, styles.value]}
                        onChangeText={nameChange}
                        onEndEditing={(e) => handleValidName(e.nativeEvent.text)}
                        placeholder='닉네임을 입력해주세요.'
                        placeholderStyle={styles.placeholder}
                    />

                    {/* 생년월일 */}
                    <Text style={styles.text}>생년월일</Text>
                    <View style={{alignItems:'center'}}>
                        <DatePicker setDateValue={dateChange} style={[styles.input, styles.value]} placeholder={'생년월일을 선택해주세요.'} placeholderStyle={styles.placeholder}/>
                    </View>

                    {/* 성별 */}
                    <Text style={styles.text}>성별</Text>
                    <View zIndex={1}>
                        <DropDownPicker open={open} items={genderItem} value={value}
                            setOpen={setOpen} onSelectItem={selectChange} setValue={setValue}
                            showArrowIcon={false}
                            placeholder={'성별을 선택해주세요.'}
                            placeholderStyle={styles.placeholder}
                            textStyle={styles.value}
                            style={styles.input}
                            dropDownContainerStyle={styles.drop}                            
                        />
                    </View>
                </View>
                
                <CustomButton
                    text={'다음'}
                    color={data.isValidName&&data.isValidBday&&data.isValidGender? '#1249FC' : null}
                    textColor={data.isValidName&&data.isValidBday&&data.isValidGender? '#FFFFFF' : null}
                    onPress={()=>{navigate('PersonalityScreen', {userPW: route.params.userPW, profileImage: data.profileImage, name: data.name, birthday: data.birthday, gender: data.gender.value})}}
                    disabled={data.isValidName&&data.isValidBday&&data.isValidGender? false: false}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    text:{
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 36,
        color: '#1A1A1A',
        marginLeft: windowWidth*0.05,
        marginTop: 10,
    },
    input: {
        //height: 52,
        width: windowWidth * 0.9,
        borderWidth: 0.5,
        borderColor: '#F5F5F5',
        borderRadius: 10,
        backgroundColor: '#F5F5F5',
        paddingVertical: 15,
        paddingLeft: 20,
        alignSelf: 'center',
    },
    drop: {
        width: windowWidth * 0.9,
        borderWidth: 0.5,
        borderColor: '#1A1A1A',
        paddingVertical: 15,
        paddingLeft: 10,
        alignSelf: 'center',
    },
    placeholder: {
        color: '#B7B7B7',
        fontSize: 16,
        fontWeight: '400'
    },
    value:{
        color: '#1A1A1A',
        fontSize: 16,
        fontWeight: '500',
    }
})

export default RegisterScreen;