import React from "react";
import { SafeAreaView, View, Text, StyleSheet, TextInput, Image } from "react-native";

import CustomButton from "../../../common/CustomButton";
import Header from "../../../common/Header";

const ApplicationScreen = ()=>{
    const BackarrowImg = '../../../assets/image/backarrow.png'

    return(
        <SafeAreaView style={styles.container}>
            < Header
                title={'지원서 작성'}
                noIcon={false}
                leftIcon={< Image source={require(BackarrowImg)} style={styles.backarrow} />}
                leftIconPress={() => { console.log('pressed!') }}
            />

            <View style={{marginHorizontal: 14,}}>
                <Text style={styles.description}>모임에 가입하려면{'\n'}지원서를 작성해 주세요!📝</Text>

                <View style={styles.subContainer}>
                    <Text style={styles.text}>나는 이런 사람이에요!</Text>
                    <TextInput
                        style={styles.textInput}
                        underlineColorAndroid='transparent'
                        multiline={true}
                        placeholder='나에 대해 소개해주세요.'
                        numberOfLines={5}
                    />
                </View>

                <View style={styles.subContainer}>
                    <Text style={styles.text}>모임에 함께 하고 싶은 이유</Text>
                    <TextInput
                        style={styles.textInput}
                        underlineColorAndroid='transparent'
                        multiline={true}
                        placeholder='함께 하고 싶은 이유를 적어주세요.'
                        numberOfLines={5}
                    />
                </View>

                <View style={styles.button}>
                    <CustomButton text={'지원하기'} />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    subContainer:{
        //borderBottomColor: '#EAEAEA',
        //borderBottomWidth: 1,
    },
    button:{
        alignItems: 'center',
        marginTop: 40,
    },
    backarrow:{
        width: 14,
        height: 13
    },
    description:{
        fontSize: 18,
        fontWeight: 'bold',
        lineHeight: 22,
        color: '#1A1A1A',
        marginVertical: 17,
    },
    text:{
        fontWeight: 'bold',
        color: '#1A1A1A',
        marginTop: 22,
        marginBottom: 11,
    },
    textInput:{
        height: 100,
        flexShrink: 1,
        fontSize: 14,
        textAlignVertical: 'top',
        color: '#1A1A1A',
        backgroundColor: '#F6F6F6',
        borderRadius: 10,
    },
})

export default ApplicationScreen;