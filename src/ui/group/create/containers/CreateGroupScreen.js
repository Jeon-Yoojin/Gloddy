import React, { useCallback, useEffect, useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, TextInput, Touchable, TouchableOpacity, Dimensions, ScrollView } from "react-native";
import Modal from 'react-native-modal';

import CreateGroupHeader from "../components/CreateGroupHeader";
import TimePicker from "../components/TimePicker";
import DatePicker from '../../../../common/DatePicker'
import CustomButton from "../../../../common/CustomButton";
import { useMutation, useQueryClient, InfiniteData } from "react-query";
import { createGroup } from "../../../../api/group";
import { useNavigation } from "@react-navigation/native";
import CreateGroupModal from "../components/CreateGroupModal";
import CreateConfirmModal from "../components/CreateConfirmModal";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const CreateGroupScreen = () => {
    const navigation = useNavigation();
    const queryClient = useQueryClient();

    const [confirm, setConfirm] = useState(false);
    const [showBottomSheet, setShowBottomSheet] = useState(false);
    const [showCreateConfirmModal, setShowCreateConfirmModal] = useState(false);
    const toggleModal = ()=>{
        setShowBottomSheet(!showBottomSheet)
    }

    const [data, setData] = useState({
        title: '',
        content: '',
        maxUser: 0,
        place: '',
        place_latitude: '100',
        place_longitude: '2',
        meetDate: '',
        startTime: '',
        endTime: '',
        fileUrl: '',
    });
    const [isValid, setIsValid] = useState({
        title: false,
        content: false,
        maxUser: false,
        place: false,
        meetDate: false,
        startTime: false,
        endTime: false,
    })
    const [disableButton, setDisableButton] = useState(false);
    const [confirmNan, setConfirmNan] = useState(false);

    useEffect(()=>{
        setDisableButton(()=>isValid.title && isValid.content && isValid.maxUser && isValid.place && isValid.meetDate && isValid.startTime && isValid.endTime);
        //console.log(disableButton);
    }, [isValid.title, isValid.content, isValid.maxUser, isValid.place, isValid.meetDate, isValid.startTime, isValid.endTime]);

    const onChangeInput = (event, name) => {
        const {text} = event.nativeEvent;

        if(name === 'title'){
            if(text.trim().length > 0) {
                setData({...data, title: text.trim()});
                setIsValid({...isValid, title: true});
            }
            else {
                setData({...data, title: text.trim()});
                setIsValid({...isValid, title: false});
            }
        }
        else if(name === 'content'){
            if(text.length > 0 && text.length < 30) {
                setData({...data, content: text});
                setIsValid({...isValid, content: true});
            }
            else if(text.length >= 30) {
                setData({...data, content: text});
            }
            else {
                setData({...data, content: text});
                setIsValid({...isValid, content: false});
            }
        }
        else if(name === 'place'){
            if(text.trim().length > 0) {
                setData({...data, place: text.trim()});
                setIsValid({...isValid, place: true});
            }
            else {
                setData({...data, place: text.trim()});
                setIsValid({...isValid, place: false});
            }
        }
        else if(name === 'maxUser'){
            if(isNaN(text)){
                setData({...data, maxUser: 0});
                setIsValid({...isValid, maxUser: false});
                setConfirmNan(true);
                return;
            }
            setConfirmNan(false);
            if(text.trim().length > 0) {
                setData({...data, maxUser: Number(text)});
                setIsValid({...isValid, maxUser: true});
            }
            else {
                setData({...data, maxUser: Number(text)});
                setIsValid({...isValid, maxUser: false});
            }
        }
    }

    const startTimeChange = (val) => {
        setData({
            ...data,
            startTime: val,
        });
        setIsValid({...isValid, startTime: true});
    }

    const endTimeChange = (val) => {
        setData({
            ...data,
            endTime: val,
        });
        setIsValid({...isValid, endTime: true});
    }

    const meetDateChange = (val) => {
        setData({
            ...data,
            meetDate: val,
        });
        setIsValid({...isValid, meetDate: true});
    }

    const {mutate: create} = useMutation(createGroup, {
        onSuccess: group => {
            queryClient.refetchQueries({queryKey: ['groups']});
            navigation.goBack();
        },
    });

    const handleOnpress = () => {
        setShowCreateConfirmModal(true);
        submit(confirm);
    }

    const submit = useCallback((confirm)=>{
        if (confirm===true) {
            create({
                content: data.content,
                endTime: data.endTime,
                fileUrl: data.fileUrl,
                maxUser: data.maxUser,
                meetDate: data.meetDate,
                place: data.place,
                place_latitude: data.place_latitude,
                place_longitude: data.place_longitude,
                startTime: data.startTime,
                title: data.title
            });
        }
    }, [create, data]);

    return (
        <SafeAreaView style={styles.container}>
            <CreateGroupHeader />
            
            <ScrollView style={{marginVertical: 18}}>
                {/* 이미지 */}
                <View style={{backgroundColor: '#F5F5F5', alignSelf: 'center', marginTop: 25, width: 92, height: 92, borderRadius: 10}}></View>

                {/* 방제목 */}
                <View style={styles.subContainer}>
                    <Text style={styles.titleText}>방제목</Text>
                    <TextInput
                        style={styles.inputBox}
                        placeholder="제목을 입력해주세요"
                        onChange={event => onChangeInput(event, 'title')}
                        autoCorrect={false}
                        autoCapitalize={'none'}
                    />
                </View>

                {/* 활동 소개글 */}
                <View style={styles.subContainer}>
                    <View style={{flex: 1}}>
                        <Text style={styles.titleText}>
                            <Text>활동 소개글</Text>
                            <Text style={{color: '#AAAAAA', fontSize: 12, textAlign: 'right'}}>0/30</Text>
                        </Text>
                    </View>
                    <TextInput
                        style={[styles.inputBox, {paddingTop: 15, height: 110, textAlignVertical: 'top',}]}
                        multiline={true}
                        maxLength={30}
                        placeholder="내용을 입력해주세요"
                        onChange={event => onChangeInput(event, 'content')}
                        autoCorrect={false}
                        autoCapitalize={'none'}
                    />
                </View>

                <View style={{backgroundColor: '#F7F7F7', height: 14, marginTop: 18}}></View>

                {/* 모임 날짜 설정 */}
                <View style={styles.subContainer}>
                    <Text style={styles.titleText}>모임 일시</Text>
                    <View style={styles.inputBox}>
                        <DatePicker
                            placeholder={'모임 일시를 설정해주세요.'}
                            setDateValue={meetDateChange}
                            style={styles.datePicker}
                        />
                    </View>
                </View>

                {/* 모임 위치 설정 */}
                <TextInput
                    placeholder={"모임 위치 설정"}
                    onChange={event => onChangeInput(event, 'place')}
                />
                <View style={styles.subContainer}>
                    <Text style={styles.titleText}>모임 위치</Text>
                    <CustomButton
                        text={'모임 위치를 설정해주세요.'}
                        onPress={() => { setShowBottomSheet(true) }}
                    />

                    <Modal
                        isVisible={showBottomSheet}
                        deviceHeight={windowHeight}
                        deviceWidth={windowWidth}
                        useNativeDriver={true}
                        onBackdropPress={() => setShowBottomSheet(false)}
                        transparent={true}
                        style={{ justifyContent: 'center', margin: 0, marginTop: 30,}}
                    >
                        <View style={{ flex: 1, backgroundColor: "white", borderTopStartRadius: 36, borderTopEndRadius: 36, }}>
                            <View style={{ justifyContent: 'space-between', flex: 1 }}>
                                <CreateGroupModal />
                                <View style={{ alignItems: 'center' }}>
                                    <CustomButton
                                        text={'닫기'}
                                        onPress={toggleModal}
                                        color={'#1249FC'}
                                        textColor={'#FFFFFF'}
                                    />
                                </View>
                            </View>
                        </View>
                    </Modal>
                </View>

                {/* 모임 인원 설정 */}
                <View style={styles.subContainer}>
                    <Text style={styles.titleText}>
                        <Text>모임 인원</Text>
                        { confirmNan
                            ? <Text style={{color: '#D7533E'}}>&nbsp;*숫자만 입력해주세요</Text>
                            : <></>
                        }
                    </Text>
                    
                    <TextInput
                        style={styles.inputBox}
                        placeholder={'모임 인원을 설정해주세요.'}
                        onChange={event => onChangeInput(event, 'maxUser')}
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

                <CustomButton
                    text={'완료'}
                    color={disableButton ? '#1249FC' : null}
                    textColor={disableButton ? '#FFFFFF' : null}
                    style={{marginTop: 10}}
                    onPress={handleOnpress}
                    disabled={disableButton ? false : true}
                />
            </ScrollView>

        {/* 모임 나가기 경고 Modal */}
        <CreateConfirmModal setConfirm={setConfirm} showBottomSheet={showCreateConfirmModal} hide={()=>{setShowCreateConfirmModal(false)}}/>
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