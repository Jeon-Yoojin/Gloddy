import React from "react";
import { SafeAreaView, StyleSheet, Image, Text, ScrollView, View, Dimensions } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Header from "../../../common/Header";
import Card from "../components/Card";
import CustomButton from "../../../common/CustomButton";
import { useNavigation } from "@react-navigation/native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

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
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <Header
                title={'칭찬합니다'}
                noIcon={false}
                leftIcon={<AntDesign name='left' size={17} />}
                leftIconPress={() => { console.log('LeftIcon pressed!') }}
            />
            <Text style={{fontWeight: '700', fontSize: 24, marginTop: 30, marginLeft: 20}}>모임에서 어땠나요?</Text>
            <View style={{flex:1, justifyContent: 'space-between'}}>
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
                
                <CustomButton
                    text={'다음'}
                    color={'#1249FC'}
                    textColor={'#FFFFFF'}
                    style={{alignSelf: 'center'}}
                    onPress={()=>{navigation.navigate('BestPartnerScreen')}}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    scrollView:{
        marginTop: windowHeight*0.04,
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