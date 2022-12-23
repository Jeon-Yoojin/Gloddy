import React, { useState } from "react";
import { View, StyleSheet, Dimensions, Text, SafeAreaView } from "react-native";

import RegisterHeader from "../components/RegisterHeader";
import CustomButton from "../../../common/CustomButton";
import PersonalityButton from "../components/PersonalityButton";
import useUser from "../../../redux/hooks/useUser";
import { register } from "../../../api/auth";
import useAuthActions from "../../../redux/hooks/useAuthAction";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const PersonalityScreen = ({navigation: {navigate}, route})=>{
    const user = useUser();
    const {authorize} = useAuthActions();
    const [selectedPersonalities, setSelectedPersonalities] = useState([]);

    const registration = () => {
        /* 회원가입 api 호출 */
        /* 가입 성공시, redux user 세팅 후 LoginScreen으로 이동 */
        console.log(selectedPersonalities);
        const reqBody = {
            birth: route.params.birthday,
            email: user.email,
            gender: route.params.gender,
            name: route.params.name,
            password: route.params.userPW,
            personalities: selectedPersonalities,
            school: '',
            profileImage: route.params.profileImage
        };
        console.log("register reqBody", reqBody);
        
        register(reqBody)
        .then(response=>{
            console.log("register response", response);
            authorize(reqBody);
            navigate('LoginScreen');
        })
        .catch(error=>{
            console.log("registration error", error);
        });
    }

    const onSelect = (isPress, text) => {
        if(isPress)
            setSelectedPersonalities(selectedPersonalities.filter(personality => personality != text));
        else setSelectedPersonalities([...selectedPersonalities, text]);
    }

    return(
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <RegisterHeader />

            <Text style={styles.title}>사용자님의 성격을{'\n'}선택해주세요!</Text>
            <Text style={styles.littleTitle}>3개 이상 선택해주세요.</Text>

            <View style={{flex:1, justifyContent: 'space-between'}}>
                <View style={{}}>
                    {/* 성격 아이콘 */}
                    <View style={styles.rowContainer}>
                        <PersonalityButton text='외향적인' onSelect={onSelect}/>
                        <PersonalityButton text='내향적인' onSelect={onSelect}/>
                    </View>
                    <View style={styles.rowContainer}>
                        <PersonalityButton text='신중한' onSelect={onSelect}/>
                        <PersonalityButton text='친절한' onSelect={onSelect}/>
                    </View>
                    <View style={styles.rowContainer}>
                        <PersonalityButton text='유머러스한' onSelect={onSelect}/>
                        <PersonalityButton text='낙천적인' onSelect={onSelect}/>
                    </View>
                    <View style={styles.rowContainer}>
                        <PersonalityButton text='사교적인' onSelect={onSelect}/>
                        <PersonalityButton text='솔직한' onSelect={onSelect}/>
                    </View>
                    <View style={styles.rowContainer}>
                        <PersonalityButton text='책임감 있는' onSelect={onSelect}/>
                        <PersonalityButton text='차분한' onSelect={onSelect}/>
                    </View>
                    <View style={styles.rowContainer}>
                        <PersonalityButton text='활동적인' onSelect={onSelect}/>
                        <PersonalityButton text='센스있는' onSelect={onSelect}/>
                    </View>
                    <View style={styles.rowContainer}>
                        <PersonalityButton text='엉뚱한' onSelect={onSelect}/>
                        <PersonalityButton text='리더십 있는' onSelect={onSelect}/>
                    </View>
                </View>

                {/* Button */}
                <View style={styles.button}>
                    <CustomButton
                        text='다음'
                        color='#1249FC'
                        textColor='#FFFFFF'
                        onPress={registration}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    title:{
        fontWeight: 'bold',
        fontSize: 24,
        marginTop: windowHeight*0.04,
        marginLeft: windowWidth*0.056
    },
    littleTitle:{
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 37,
        color: '#AAAAAA',
        marginVertical: 10,
        marginLeft: windowWidth*0.056
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
    button:{
        alignItems: 'center',
        marginTop: 35,
    }
})

export default PersonalityScreen;