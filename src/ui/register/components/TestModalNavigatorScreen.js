import React from "react";
import { View, Pressable, Text, Animated, StyleSheet, Dimensions } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import CustomButton from "../../../common/CustomButton";
import CustomInput from "../../../common/CustomInput";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function TestModalNavigatorScreen ({route, navigation}){
    return (
        <View style={{flex:1, justifyContent: 'flex-end', flexDirection:'column'}}>
            {/*
            <Pressable
                onPress={navigation.goBack}
                style={{
                    backgroundColor: 'black',
                    opacity: 0.4,
                }}
            />
            */}
            <Animated.View style={{backgroundColor: 'white', borderTopLeftRadius: 30, borderTopRightRadius: 30}}
            >
                <View style={styles.modalContainer}>
                    <AntDesign name='closecircle' size={28} style={{ position: 'absolute', left: windowWidth * 0.85, top: 26 }} onPress={navigation.goBack} />
                    <AntDesign name='closecircle' size={59} color='#D7533E' style={{ marginTop: 46, margin: 20}} />

                    <View style={styles.bottomSheetContent}>
                        <Text style={styles.bottomSheetText}>회원이 아니에요.</Text>
                        <CustomInput style={styles.customId} placeholder='ID' value={route.params.userID} editable={false} rightSpace={true}/>
                        <Text style={styles.bottomSheetSubText}>해당 아이디로 회원가입을 진행할까요?</Text>
                    </View>
                    <CustomButton
                        text={'회원가입'}
                        color='#1249FC'
                        textColor='#FFFFFF'
                        style={{bottom: windowHeight*0.04, alignSelf: 'center'}}
                        onPress={()=>{navigation.navigate('IdentifyModal')}}
                    />
                </View>
            </Animated.View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    bottomSheetContent: {
        marginHorizontal: 20,
        zIndex: 1,
    },
    bottomSheetText:{
        fontSize: 20,
        fontWeight: '700',
        color: '#1A1A1A'
    },
    bottomSheetSubText:{
        fontSize: 14,
        color: '#CDCDCD',
        marginTop: 10,
        marginBottom: 60,
    },
    customId:{
        marginTop: 15,
        marginBottom: 5, 
    },
    icon:{
        alignItems: 'flex-end',
        margin: 20
    },
    modalContainer:{
        flexGrow: 1,
    },
})

export default TestModalNavigatorScreen;