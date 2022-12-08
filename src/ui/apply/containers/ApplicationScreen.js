import React, { useCallback, useState } from "react";
import { SafeAreaView, View, Text, StyleSheet, TextInput, Image } from "react-native";
import { ErrorMessage, Formik } from "formik";
import * as yup from 'yup'
import { applyGroup } from "../../../api/group";

import CustomButton from "../../../common/CustomButton";
import Header from "../../../common/Header";
import { useMutation } from "react-query";
import { useNavigation } from "@react-navigation/native";

const ApplicationScreen = ({route}) => {
    const navigation = useNavigation();
    const BackarrowImg = '../../../assets/image/backarrow.png'

    const { mutate: apply } = useMutation(applyGroup, {
        onSuccess: data=>{
            console.log('applyId: ', data)
        
        },
        onError: error => {
            console.log('group apply error', error)
        },
        onSettled: () => {
            navigation.goBack();
        }
    })

    const onSubmit = useCallback((values) => {
        apply({
            groupId: route.params.groupId,
            request: {
                introduce: values.introduce,
                reason: values.reason
            }
        })
    })

    return (
        <SafeAreaView style={styles.container}>
            < Header
                title={'지원서 작성'}
                noIcon={false}
                leftIcon={< Image source={require(BackarrowImg)} style={styles.backarrow} />}
                leftIconPress={() => { console.log('pressed!') }}
            />

            <View style={{ marginHorizontal: 14, }}>
                <Text style={styles.description}>모임에 가입하기 위해{'\n'}지원서를 작성해주세요</Text>

                <Formik
                    initialValues={{ introduce: '', reason: '' }}
                    validationSchema={yup.object({
                        introduce: yup.string()
                            .trim()
                            .required('필수 입력 항목입니다.'),
                        reason: yup.string()
                            .trim()
                            .required('필수 입력 항목입니다.'),
                    })}
                    validateOnMount={true}
                    onSubmit={onSubmit}
                >
                    {({ handleChange, handleSubmit, isValid, values, touched, errors }) => (
                        <>
                            <View style={styles.subContainer}>
                                <Text style={styles.text}>나는 이런 사람이에요!</Text>
                                <TextInput
                                    name="introduce"
                                    style={styles.textInput}
                                    underlineColorAndroid='transparent'
                                    multiline={true}
                                    placeholder='나에 대해 소개해주세요.'
                                    numberOfLines={7}
                                    value={values.introduce}
                                    onChangeText={handleChange('introduce')}
                                />
                                {(touched.introduce && errors.introduce) && (
                                    <Text>{errors.introduce}</Text>
                                )}
                            </View>

                            <View style={styles.subContainer}>
                                <Text style={styles.text}>모임에 함께 하고 싶은 이유</Text>
                                <TextInput
                                    name="reason"
                                    style={styles.textInput}
                                    underlineColorAndroid='transparent'
                                    multiline={true}
                                    placeholder='함께 하고 싶은 이유를 적어주세요.'
                                    numberOfLines={7}
                                    value={values.reason}
                                    onChangeText={handleChange('reason')}
                                />
                                {(touched.reason && errors.reason) && (
                                    <Text>{errors.reason}</Text>
                                )}
                            </View>

                            <View style={styles.button}>
                                <CustomButton
                                    text={'지원하기'}
                                    onPress={handleSubmit}
                                    color={isValid ? '#1249FC' : null}
                                    textColor={isValid ? '#FFFFFF' : null}
                                    disabled={isValid ? false : true}
                                />
                            </View>
                        </>
                    )}
                </Formik>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    subContainer: {
        //borderBottomColor: '#EAEAEA',
        //borderBottomWidth: 1,
    },
    button: {
        alignItems: 'center',
        marginTop: 40,
    },
    backarrow: {
        width: 14,
        height: 13
    },
    description: {
        fontSize: 24,
        fontWeight: '900',
        lineHeight: 40,
        letterSpacing: -1,
        color: '#1A1A1A',
        marginVertical: 17,
    },
    text: {
        fontWeight: 'bold',
        color: '#1A1A1A',
        marginTop: 22,
        marginBottom: 11,
    },
    textInput: {
        height: 135,
        flexShrink: 1,
        fontSize: 14,
        textAlignVertical: 'top',
        color: '#1A1A1A',
        paddingVertical: 18,
        paddingHorizontal: 20,
        backgroundColor: '#F6F6F6',
        borderRadius: 10,
    },
})

export default ApplicationScreen;