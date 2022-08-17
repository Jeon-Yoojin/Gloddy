import React from "react";
import { SafeAreaView, StyleSheet, Image, Text, ScrollView, View } from "react-native";

import Header from "../../../common/Header";
import Card from "../components/Card";


const User = [
    {
        imgSrc: require('../../../assets/image/sample/John.jpg'),
        name: 'John',
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
        imgSrc: require('../../../assets/image/group/userSample.png'),
        name: 'Homes',
    },
]

const ComplimentScreen = () => {
    const BackarrowImg = '../../../assets/image/backarrow.png';

    return (
        <SafeAreaView style={styles.container}>
            <Header
                title={'칭찬합니다'}
                noIcon={false}
                leftIcon={< Image source={require(BackarrowImg)} style={styles.backarrow} />}
                leftIconPress={() => { console.log('pressed!') }}
                rightIcon={<Text style={styles.rightBtn}>다음</Text>}
                rightIconPress={() => { console.log('pressed!') }}
            />

            <ScrollView style={styles.scrollView}>
                {User.map((data, index) => {
                    return (
                        <Card
                            key={index}
                            imgSrc={data.imgSrc}
                            name={data.name}
                        />

                    )
                })}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    scrollView:{
        marginTop: 14,
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

export default ComplimentScreen;