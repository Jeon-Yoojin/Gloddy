import React from "react";
import { View, StyleSheet, Dimensions, Text, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import RegisterHeader from "../components/RegisterHeader";
import CustomButton from "../../../common/CustomButton";
import PersonalityButton from "../components/PersonalityButton";

const PersonalityScreen = ()=>{
    const navigation = useNavigation();
    const BackarrowImg = '../../../assets/image/backarrow.png'

    return(
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <RegisterHeader />

            <View style={{ justifyContent: 'center' , marginVertical: 20,}}>
                <Text style={styles.text}>드디어 마지막이에요!{'\n'}사용자님의 성격을 알려주세요!</Text>
            </View>

            <View style={{marginVertical: 20}}>
                <Text style={styles.littleText}>3개 이상 선택해주세요.</Text>
            </View>

            <View style={{}}>
                {/* 성격 아이콘 */}
                <View style={styles.rowContainer}>
                    <PersonalityButton text='외향적인' />
                    <PersonalityButton text='내향적인' />
                </View>
                <View style={styles.rowContainer}>
                    <PersonalityButton text='신중한' />
                    <PersonalityButton text='친절한' />
                </View>
                <View style={styles.rowContainer}>
                    <PersonalityButton text='유머러스한' />
                    <PersonalityButton text='낙천적인' />
                </View>
                <View style={styles.rowContainer}>
                    <PersonalityButton text='사교적인' />
                    <PersonalityButton text='솔직한' />
                </View>
                <View style={styles.rowContainer}>
                    <PersonalityButton text='책임감 있는' />
                    <PersonalityButton text='이야기하기 좋아하는' />
                </View>
                <View style={styles.rowContainer}>
                    <PersonalityButton text='활동적인' />
                    <PersonalityButton text='센스있는' />
                </View>
                <View style={styles.rowContainer}>
                    <PersonalityButton text='엉뚱한' />
                    <PersonalityButton text='리더십 있는' />
                </View>
            </View>

            {/* Button */}
            <View style={styles.button}>
                <CustomButton text='다음' onPress={()=>{navigation.navigate('GroupingScreen')}}/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    rowContainer:{
        flexDirection: 'row',
        justifyContent: 'space-evenly'

    },
    text:{
        fontSize: 18,
        fontWeight: '900',
        color: 'black',
        marginLeft: Dimensions.get('window').width * 0.05
    },
    littleText:{
        fontSize: 14,
        color: '#7F7F7F',
        marginLeft: Dimensions.get('window').width * 0.05,
    },
    button:{
        alignItems: 'center',
        marginTop: 35,
    }
})

export default PersonalityScreen;