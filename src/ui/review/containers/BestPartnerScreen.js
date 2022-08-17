import React from "react";
import { SafeAreaView, StyleSheet, Image, Text, ScrollView, View } from "react-native";

import Header from "../../../common/Header";
import PartnerReason from "../components/PartnerReason";
import PartnerSelection from "../components/PartnerSelection";
import CustomButton from "../../../common/CustomButton";

const User = [
    {
        imgSrc: require('../../../assets/image/sample/WillJones.png'),
        name: 'Yujin',
    },
    {
        imgSrc: require('../../../assets/image/sample/Sam.png'),
        name: 'Ki hyeon',
    },
    {
        imgSrc: require('../../../assets/image/sample/Maria.png'),
        name: 'Maria',
    },
    {
        imgSrc: require('../../../assets/image/sample/Lucy.png'),
        name: 'Lucy',
    },
    {
        imgSrc: require('../../../assets/image/sample/John.jpg'),
        name: 'John',
    },
    {
        imgSrc: require('../../../assets/image/group/userSample.png'),
        name: 'Tom',
    },
    {
        imgSrc: require('../../../assets/image/group/userSample.png'),
        name: 'Tom',
    },
]

const BestPartnerScreen = () => {
    const BackarrowImg = '../../../assets/image/backarrow.png';

    return (
        <SafeAreaView style={styles.container}>
            <Header
                title={'최고의 짝꿍'}
                noIcon={false}
                leftIcon={< Image source={require(BackarrowImg)} style={styles.backarrow} />}
                leftIconPress={() => { console.log('pressed!') }}
            />

            <View>
                <Text style={styles.description}>
                    <Text>모임에서 사용자님이 생각한{'\n'}</Text>
                    <Text style={{color: '#1249FC'}}>최고의 짝꿍</Text>
                    <Text>을 선정해주세요!</Text>
                </Text>

                <View style={styles.scrollContainer}>
                <ScrollView style={styles.scrollView}>
                    {User.map((data, index) => {
                        return (
                            <PartnerSelection
                                key={index}
                                imgSrc={data.imgSrc}
                                name={data.name}
                                imgSize={47}
                                textSize={14}
                            />
                        )
                    })}
                </ScrollView>
                </View>
            </View>

            {/* 선정이유 */}
            <View style={{paddingVertical: 10}}>
            <PartnerReason/>
            </View>

            {/* 제출버튼 */}
            <View style={{alignItems: 'center', justifyContent: 'center', flex: 1, }}>
                <CustomButton text={'제출하기'} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    scrollContainer:{
        maxHeight: 330,
    },
    scrollView:{
        marginTop: 14,
        flexGrow: 0,
        //height: 330,
    },
    description:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1A1A1A',
        marginHorizontal: 14,
        marginTop: 23,
        marginBottom: 10,
    },
    rightBtn: {
        fontSize: 16,
        color: '#1249FC',
    },
    backarrow: {
        width: 14,
        height: 13,
    }
})

export default BestPartnerScreen;