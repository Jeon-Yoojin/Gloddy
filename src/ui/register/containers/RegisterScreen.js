import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { SafeAreaView, Text, StyleSheet, View, Dimensions, TouchableOpacity, Image, TextInput } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import DropDownPicker from 'react-native-dropdown-picker';
import CustomButton from "../../../common/CustomButton";
import CustomPicker from "../../../common/CustomPicker";
import DatePicker from "../../../common/DatePicker";
import ProfileIcon from "../components/ProfileIcon";
import RegisterHeader from "../components/RegisterHeader";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const RegisterScreen = ()=>{
    const navigation = useNavigation();
    const genderItem = [{ label: '남성', value: 'male' }, { label: '여성', value: 'female' }];

    const [data, setData] = useState({
        username: '',
        birthday: '',
        gender: '',
        check_textInputChange: false,
        
        isValidUser: true,
        isValidBday: false,
        isValidGender: false,
    });
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);

    {/* 이름 onchange */}
    const usernameChange = (val) => {
        if( val.trim().length >= 1 ) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false,
                isValidUser: false
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

    const handleValidUser = (val) => {
        if( val.trim().length >= 1 ) {
            setData({
                ...data,
                isValidUser: true
            });
        } else {
            setData({   
                ...data,
                isValidUser: false
            });
        }
    }

    return(
        <SafeAreaView style={{flex:1, backgroundColor:'#FFFFFF'}}>
            {/* Header */}
            <RegisterHeader/>

            {/* 프로필 아이콘 */}
            <View style={{justifyContent:'center', alignItems:'center', marginTop: 40, marginBottom: 10}}>
                <TouchableOpacity>
                    <ProfileIcon />
                </TouchableOpacity>
            </View>

            <View style={{flex:1, justifyContent: 'space-between'}}>
                <View>
                    {/* 이름 */}
                    <Text style={styles.text}>이름</Text>
                    <View style={styles.nameContainer}>
                        <TextInput
                            style={styles.input}
                            onChangeText={(val) => usernameChange(val)}
                            onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
                            placeholder='이름을 입력해주세요.'
                        />
                        {data.check_textInputChange ?
                                <Entypo
                                    name="check"
                                    color="green"
                                    size={20}
                                    style={{position:'absolute', top: 16, right: '10%'}}
                                />
                            : null}
                    </View>

                    {/* 생년월일 */}
                    <Text style={styles.text}>생년월일</Text>
                    <View style={{alignItems:'center'}}>
                        <DatePicker setDateValue={dateChange} placeholder={'생년월일을 선택해주세요.'}/>
                        {data.isValidBday ?
                                <Entypo
                                    name="check"
                                    color="green"
                                    size={20}
                                    style={{position:'absolute', top: 16, right: '10%'}}
                                />
                            : null}
                    </View>

                    {/* 성별 */}
                    <Text style={styles.text}>성별</Text>
                    <View style={{alignItems: 'center'}} zIndex={1}>
                        <DropDownPicker open={open} items={genderItem} value={value}
                            setOpen={setOpen} onSelectItem={selectChange} setValue={setValue}
                            showArrowIcon={false}
                            placeholder={'성별을 선택해주세요.'}
                            style={[styles.input, {
                                backgroundColor: 'transparent',
                                alignSelf: 'center',
                                marginBottom: 50
                            }]}
                            placeholderStyle={{color: '#B7B7B7'}}
                            dropDownContainerStyle={{backgroundColor: 'transparent', borderColor: '#B7B7B7', width: windowWidth * 0.9, alignSelf: 'center'}}
                        />
                        {data.isValidGender ?
                            <Entypo
                                name="check"
                                color="green"
                                size={20}
                                style={{ position: 'absolute', top: 16, right: '13%' }}
                            />
                            : null}
                    </View>
                </View>
                
                <CustomButton
                    text={'다음'}
                    color={data.isValidUser&&data.isValidBday&&data.isValidGender? '#1249FC' : null}
                    textColor={data.isValidUser&&data.isValidBday&&data.isValidGender? '#FFFFFF' : null}
                    style={{bottom: windowHeight*0.04, alignSelf: 'center'}}
                    onPress={()=>{navigation.navigate('PersonalityScreen')}}
                    disabled={data.isValidUser&&data.isValidBday&&data.isValidGender? false: false}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    text:{
        fontSize: 12,
        fontWeight: 'bold',
        color: 'black',
        lineHeight: 15,
        marginLeft: windowWidth*0.05,
        marginTop: 16,
        marginBottom: 7,
    },
    input: {
        height: 52,
        width: windowWidth * 0.9,
        borderWidth: 1,
        borderColor: '#B7B7B7',
        borderRadius: 10,
        padding: 15,
        fontSize: 16,
    },
    nameContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
})

export default RegisterScreen;