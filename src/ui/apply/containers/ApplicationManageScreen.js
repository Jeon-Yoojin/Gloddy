import React from "react";
import { SafeAreaView, View, Text, StyleSheet, TextInput, Image, ScrollView } from "react-native";
import CustomButton from "../../../common/CustomButton";

import UserProfile from "../../../common/UserProfile";
import Header from "../../../common/Header";

const ApplicationManageScreen = () => {
    const SampleUser = '../../../assets/image/sample/Me.png';
    const BackarrowImg = '../../../assets/image/backarrow.png';

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            < Header
                title={'지원서 관리'}
                noIcon={false}
                leftIcon={< Image source={require(BackarrowImg)} style={styles.backarrow} />}
                leftIconPress={() => { console.log('pressed!') }}
            />

            <View style={{ marginHorizontal: 14, flex: 1 }}>
                {/* 설명 */}
                <Text style={styles.description}>모임에 가입하고 싶은 멤버의{'\n'}지원서를 확인해 주세요!👀</Text>

                {/* 프로필 */}
                <UserProfile imgSrc={require(SampleUser)} name={'Will Jones'} imgSize={52} textSize={12}/>

                <ScrollView>
                    {/* 자기소개 */}
                    <View style={styles.subContainer}>
                        <Text style={styles.text}>나는 이런 사람이에요!</Text>
                        <Text style={styles.textInput}>I like sports, especially soccer. {'\n'}I played soccer for about 5 years.</Text>
                    </View>

                    {/* 모임 참여 이유 */}
                    <View style={[styles.subContainer]}>
                        <Text style={styles.text}>모임에 함께 하고 싶은 이유</Text>
                        <Text style={styles.textInput}>I didn’t have many opportunities to play soccer in South Korea. I want to have fun with my teammates Through this group.</Text>
                    </View>
                </ScrollView>
            </View>

            {/* 승인/거절 버튼 */}
            <View style={styles.buttonContainer}>
                <CustomButton text={'승인'} />
                <CustomButton text={'거절'} color={'#CDCDCD'} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    subContainer: {
        borderBottomColor: '#EAEAEA',
        borderBottomWidth: 1,
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'space-evenly',
        height: 138,
    },
    description: {
        fontSize: 18,
        fontWeight: 'bold',
        lineHeight: 22,
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
        flexShrink: 1,
        fontSize: 14,
        textAlignVertical: 'top',
        color: '#1A1A1A',
        marginBottom: 20,
    },
    backarrow:{
        width: 14,
        height: 13
    },
})

export default ApplicationManageScreen;