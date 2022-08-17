import React, { useState } from "react";
import { View, Text, StyleSheet, Image, SafeAreaView, TextInput, Touchable, TouchableOpacity } from "react-native";

import CreateGroupHeader from "../components/CreateGroupHeader";
import TimePicker from "../components/TimePicker";
import DatePicker from '../../../../common/DatePicker'
import GroupInfoInput from "../components/GroupInfoInput";
import SettingInput from "../components/SettingInput";

const CreateGroupScreen = () => {
    const [data, setData] = useState({
        date: '',
        startTime: '',
        endTime: ''
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

            <GroupInfoInput />

            <View style={styles.bottomContainer}>
            {/* 모임 날짜 설정 */}
            <View style={styles.subContainer}>
                <Text style={styles.titleText}>모임 날짜 설정</Text>
                <DatePicker
                    placeholder={'날짜 설정하기'}
                    setDateValue={dateChange}
                    style={styles.datePicker}
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

            {/* 모임 위치 설정 */}
            <View style={styles.subContainer}>
                <Text style={styles.titleText}>모임 위치</Text>
                <SettingInput placeholder={'위치 설정하기'} />
            </View>

            {/* 인원 설정 */}
            <View style={styles.subContainer}>
                <Text style={styles.titleText}>최대 가능 인원</Text>
                <SettingInput placeholder={'인원 설정하기'} />
            </View>

            <View style={{flex:1, backgroundColor: '#F7F7F7'}}>
            </View>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bottomContainer:{
        alignSelf: 'baseline',
        backgroundColor: 'white'
    },
    subContainer: {
        flex: 0.18,
        borderBottomColor: '#EAEAEA',
        borderBottomWidth: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        marginHorizontal: 14,
    },
    backarrow: {
        width: 14,
        height: 13,
    },
    titleText: {
        fontSize: 12,
        fontWeight: '700',
        color: 'black',
        //marginTop: 5,
        marginBottom: 10,
    },
    text: {
        backgroundColor: 'red',
        fontSize: 16,
        textAlignVertical: 'top'
    },
    timeInputContainer: {
        flexDirection: 'row',
    },
    datePicker: {
        fontSize: 14,
        color: 'black',
        padding: 0
    }
})

export default CreateGroupScreen;