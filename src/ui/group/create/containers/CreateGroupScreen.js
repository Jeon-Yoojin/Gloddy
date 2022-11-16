import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, TextInput, Touchable, TouchableOpacity, Dimensions, ScrollView } from "react-native";

import CreateGroupHeader from "../components/CreateGroupHeader";
import TimePicker from "../components/TimePicker";
import DatePicker from '../../../../common/DatePicker'
import GroupInfoInput from "../components/GroupInfoInput";
import SettingInput from "../components/SettingInput";
import CustomButton from "../../../../common/CustomButton";

const windowHeight = Dimensions.get('window').height;

const CreateGroupScreen = () => {
    const [data, setData] = useState({
        date: '',
        startTime: '',
        endTime: '',
        isValid: true,
    });

    const startTimeChange = (val) => {
        setData({
            ...data,
            startTime: val,
        });
    }

    const endTimeChange = (val) => {
        setData({
            ...data,
            endTime: val,
        });
    }

    const dateChange = (val) => {
        setData({
            ...data,
            date: val,
        })
    }

    return (
        <SafeAreaView style={styles.container}>
            <CreateGroupHeader />
            
            <ScrollView>
                {/* 이미지 */}
                <View style={{backgroundColor: '#F5F5F5', alignSelf: 'center', marginTop: 25, width: 92, height: 92, borderRadius: 10}}></View>

                {/* 방제목 */}
                <View style={styles.subContainer}>
                    <Text style={styles.titleText}>
                        <Text>방제목</Text>
                        <Text style={{color: '#D7533E'}}> *</Text>
                    </Text>
                    <TextInput
                        style={styles.inputBox}
                        placeholder="제목을 입력해주세요"
                    />
                </View>

                {/* 활동 소개글 */}
                <View style={styles.subContainer}>
                    <View style={{flex: 1}}>
                        <Text style={styles.titleText}>
                            <Text>활동 소개글</Text>
                            <Text style={{color: '#D7533E'}}> *</Text>
                            <Text style={{color: '#AAAAAA', fontSize: 12, textAlign: 'right'}}>0/30</Text>
                        </Text>
                    </View>
                    <TextInput
                        style={[styles.inputBox, {paddingTop: 15, height: 110, textAlignVertical: 'top',}]}
                        multiline={true}
                        maxLength={30}
                        placeholder="내용을 입력해주세요"
                    />
                </View>

                <View style={{backgroundColor: '#F7F7F7', height: 14, marginTop: 18}}></View>

                {/* 모임 날짜 설정 */}
                <View style={styles.subContainer}>
                    <Text style={styles.titleText}>모임 일시</Text>
                    <View style={styles.inputBox}>
                        <DatePicker
                            placeholder={'모임 일시를 설정해주세요.'}
                            setDateValue={dateChange}
                            style={styles.datePicker}
                        />
                    </View>
                </View>

                {/* 모임 위치 설정 */}
                <View style={styles.subContainer}>
                    <Text style={styles.titleText}>모임 위치</Text>
                    <TextInput
                        style={styles.inputBox}
                        placeholder={'모임 위치를 설정해주세요.'}
                    />
                </View>

                {/* 모임 인원 설정 */}
                <View style={styles.subContainer}>
                    <Text style={styles.titleText}>모임 인원</Text>
                    <TextInput
                        style={styles.inputBox}
                        placeholder={'모임 인원을 설정해주세요.'}
                    />
                </View>

                <View style={styles.subContainer}>
                    <View style={styles.timeInputContainer}>
                        {/* 시작 시간 */}
                        <View style={{ width: '50%' }}>
                            <Text style={styles.titleText}>시작 시간</Text>
                            <TimePicker setTimeValue={startTimeChange} placeholder={'오전 10:00'} />
                        </View>
                        {/* 마감 시간 */}
                        <View style={{ width: '50%' }}>
                            <Text style={styles.titleText}>마감 시간</Text>
                            <TimePicker setTimeValue={endTimeChange} placeholder={'오후 5:00'} />
                        </View>
                    </View>
                </View>

            </ScrollView>
            
            <View style={{alignItems: 'center', justifyContent: 'center', bottom: windowHeight*0.01}}>
                <CustomButton
                    text={'완료'}
                    color={data.isValid ? '#1249FC' : null}
                    textColor={data.isValid ? '#FFFFFF' : null}
                    onPress={() => { }}
                    disabled={data.isValid ? false : true}
                />
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    bottomContainer: {
        //alignSelf: 'baseline',
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: 'black'
    },
    subContainer: {
        backgroundColor: 'white',
        justifyContent: 'center',
        marginHorizontal: 14,
        marginTop: 10
    },
    backarrow: {
        width: 14,
        height: 13,
    },
    titleText: {
        fontSize: 14,
        fontWeight: '500',
        color: '#1A1A1A',
        marginTop: 5,
        marginBottom: 10,
    },
    timeInputContainer: {
        flexDirection: 'row',
    },
    datePicker: {
        fontSize: 14,
        color: 'black',
        padding: 0,
    },
    inputBox: {
        backgroundColor: '#F5F5F5',
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 13,
    }
})

export default CreateGroupScreen;