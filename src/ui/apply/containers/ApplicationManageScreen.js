import React from "react";
import { SafeAreaView, View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../../../common/CustomButton";

import BackArrow from '../../../assets/image/backarrow.svg';
import UserProfile from "../../../common/UserProfile";
import Header from "../../../common/Header";

const ApplicantCard = () => {
    const SampleUser = '../../../assets/image/sample/Me.png';

    return (
        <View style={styles.cardContainer}>
            <View style={{paddingTop: 25, paddingHorizontal: 22}}>
                {/* 프로필 */}
                <UserProfile imgSrc={require(SampleUser)} name={'Will Jones'} imgSize={52} textSize={12} />
            </View>

            {/* 자기소개 */}
            <View style={styles.subContainer}>
                <Text style={styles.text}>나는 이런 사람이에요!</Text>
                <ScrollView style={styles.textInput}>
                    <Text style={styles.subText}>I like sports, especially soccer. {'\n'}I played soccer for about 5 years.</Text>
                </ScrollView>
            </View>

            {/* 모임 참여 이유 */}
            <View style={[styles.subContainer]}>
                <Text style={styles.text}>모임에 함께 하고 싶은 이유</Text>
                <ScrollView contentContainerStyle={{padding: 10}} style={styles.textInput}>
                    <Text style={styles.subText}>I didn’t have many opportunities to play soccer in South Korea. I want to have fun with my teammates Through this group.I didn’t have many opportunities to play soccer in South Korea. I want to have fun with my teammates Through this group.I want to have fun with my teammates Through this group.I want to have fun with my teammates Through this group.</Text>
                </ScrollView>
            </View>
            
            {/* 승인/거절 버튼 */}
            <View style={styles.buttonContainer}>
                <CustomButton text={'승인'} />
                <CustomButton text={'거절'} color={'#CDCDCD'} />
            </View>
        </View>
    )
}

const ApplicationManageScreen = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            {/* TODO: 뒤로가기 버튼 작동 확인 */}
            < Header
                title={'지원서 관리'}
                noIcon={false}
                leftIcon={<BackArrow width={8} height={15} />}
                leftIconPress={() => { navigation.goBack() }}
            />

            <View style={{ marginHorizontal: 14, flex: 1 }}>
                {/* 설명 */}
                <Text style={styles.description}>모임에 가입하고 싶은 멤버의{'\n'}지원서를 확인해주세요</Text>

                { /* 자기소개 카드 */}
                <ApplicantCard />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    subContainer: {
        margin: 10
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'space-evenly',
        height: 138,
    },
    cardContainer: {
        height: 560,
        backgroundColor: '#F5F5F5',
        borderRadius: 9
    },
    description: {
        fontSize: 20,
        fontWeight: '700',
        lineHeight: 36,
        color: '#1A1A1A',
        marginVertical: 17,
        letterSpacing: -0.8,
    },
    textInput: {
        height: 121,
        paddingHorizontal: 13,
        paddingVertical: 15,
        backgroundColor: 'white',
        borderRadius: 9,
    },
    text: {
        fontWeight: 'bold',
        color: '#1A1A1A',
        marginTop: 3,
        marginBottom: 11,
    },
    subText:{
        fontSize: 14,
        textAlignVertical: 'top',
        color: '#1A1A1A',
    },
})

export default ApplicationManageScreen;