import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";

import Feather from "react-native-vector-icons/Feather";

const UserProfileIcon = ({ imgSrc, user }) => {
    return (
        <TouchableOpacity>
            <View style={icon.container}>
                <Image source={imgSrc} style={icon.img} />
                <Text style={icon.text}>{user}</Text>
            </View>
        </TouchableOpacity>
    )
}

const UserProfile = () => {
    return (
        <View style={styles.subContainer}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 12, alignItems: 'flex-end'}}>
                <Text style={styles.title}>참여 인원 6명</Text>
                <TouchableOpacity onPress={()=>{}}>
                    <Feather
                        name="chevron-right"
                        size={23}
                        style={{ color: '#1A1A1A' }}
                    />
                </TouchableOpacity>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <UserProfileIcon imgSrc={require('../../../../assets/image/sample/John.jpg')} user={'John'}/>
                <UserProfileIcon imgSrc={require('../../../../assets/image/sample/Maria.png')} user={'Maria'}/>
                <UserProfileIcon imgSrc={require('../../../../assets/image/sample/Sam.png')} user={'Ki hyeon'}/>
                <UserProfileIcon imgSrc={require('../../../../assets/image/sample/WillJones.png')} user={'Yujin'}/>
                <UserProfileIcon imgSrc={require('../../../../assets/image/sample/Tom.png')} user={'Tom'}/>
                <UserProfileIcon imgSrc={require('../../../../assets/image/sample/Lucy.png')} user={'Lucy'}/>
                <UserProfileIcon imgSrc={require('../../../../assets/image/sample/John.jpg')} user={'1'}/>
            </ScrollView>
        </View>
    )
}

const icon = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        marginVertical: 14,
        marginHorizontal: 11,
    },
    img: {
        width: 41,
        height: 41,
        borderRadius: 20.5,
    },
    text: {
        fontWeight: '400',
        fontSize: 10,
        marginTop: 2,
        color: '#7F7F7F'
    },
})

const styles = StyleSheet.create({
    subContainer:{
        borderBottomColor: '#EAEAEA',
        borderBottomWidth: 1,
        justifyContent: 'center',
        marginHorizontal: 14,
        //paddingVertical: 15,
    },
    title:{
        fontSize: 12,
        fontWeight: 'bold',
        color: '#1A1A1A',
    },
})

export default UserProfile;