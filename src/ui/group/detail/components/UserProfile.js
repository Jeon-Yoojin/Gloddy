import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";

import Feather from "react-native-vector-icons/Feather";
import GalleryIcon from '../../../../assets/image/galleryIcon.svg';

const UserProfileIcon = ({ imgSrc, user }) => {
    const defaultImg = <GalleryIcon/>

    return (
        <TouchableOpacity>
            <View style={icon.container}>
                {imgSrc? <Image source={imgSrc} style={icon.img} /> : defaultImg}
                <Text style={icon.text}>{user}</Text>
            </View>
        </TouchableOpacity>
    )
}

const UserProfile = ({User}) => {
    //[TODO]: 이미지 소스 받아오는 코드 추가
    const navigation = useNavigation();

    return (
        <View style={styles.subContainer}>
            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 12, alignItems: 'flex-end'}} onPress={()=>navigation.navigate('GroupMembers')}>
                <Text style={styles.title}>모임멤버</Text>
                <Feather
                    name="chevron-right"
                    size={20}
                    style={{ color: '#1A1A1A' }}
                />
            </TouchableOpacity>

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {User && User.map((item, index)=>{
                    return(
                        <UserProfileIcon key={index} imgSrc={item.imgSrc? item.imgSrc : ''} user={item.user}/>
                    )
                })}
            </ScrollView>
        </View>
    )
}

const icon = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 14,
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
        justifyContent: 'center',
        marginHorizontal: 20,
        //paddingVertical: 15,
    },
    title:{
        fontSize: 14,
        fontWeight: '700',
        color: '#1A1A1A',
        marginLeft: 10
    },
})

export default UserProfile;