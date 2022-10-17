import React from "react";
import { SafeAreaView, StyleSheet, Image, Text, ScrollView, View, Dimensions } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Header from "../../../common/Header";
import PartnerReason from "../components/PartnerReason";
import PartnerSelection from "../components/PartnerSelection";
import CustomButton from "../../../common/CustomButton";
import { useNavigation } from "@react-navigation/native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

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
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <Header
                title={'최고의 짝꿍'}
                noIcon={false}
                leftIcon={<AntDesign name='left' size={17} />}
                leftIconPress={() => { console.log('LeftIcon pressed!') }}
            />
            
            <Text style={styles.description}>최고의 짝궁은 누구인가요?</Text>
            <View style={{flex:1, justifyContent: 'space-between'}}>
                <ScrollView style={styles.scrollView}>
                    {User.map((data, index) => {
                        return (
                            <PartnerSelection
                                key={index}
                                imgSrc={data.imgSrc}
                                name={data.name}
                                imgSize={47}
                                textSize={16}
                            />
                        )
                    })}
                </ScrollView>

                {/* 제출버튼 */}
                <CustomButton
                    text={'완료'}
                    color={'#1249FC'}
                    textColor={'#FFFFFF'}
                    style={{alignSelf: 'center'}}
                    onPress={()=>{navigation.navigate('MainScreen')}}
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
    scrollContainer:{
        maxHeight: 330,
    },
    scrollView:{
        marginTop: windowHeight*0.04,
        flexGrow: 0,
        //height: 330,
    },
    description:{
        fontSize: 24,
        fontWeight: '700',
        color: '#1A1A1A',
        marginHorizontal: 20,
        marginTop: 30,
    },
    rightBtn: {
        fontSize: 16,
        color: '#1249FC',
    }
})

export default BestPartnerScreen;