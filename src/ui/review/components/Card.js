import React from "react";
import { View, StyleSheet, Text} from "react-native";
import UserProfile from "../../../common/UserProfile";

import Attend from "../components/Attend";
import Character from "../components/Character";

const Card = ({imgSrc, name}) => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <UserProfile imgSrc={imgSrc} name={name} imgSize={53} textSize={14}/>
                <Attend />
            </View>
            <Text style={styles.question}>Q. 모임에서 어땠나요?</Text>
            <Character />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        //ios의 경우 shadow 컬러 설정 필요
        borderColor: '#EAEAEA',
        borderWidth: 1,
        borderRadius: 11,
        //backgroundColor: 'white',
        marginHorizontal: 14,
        marginBottom: 14,
        paddingVertical: 14,
    },
    row:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 13,
        marginBottom: 14,
    },
    question:{
        fontSize: 12,
        color: '#7F7F7F',
        marginHorizontal: 14,
        marginBottom: 11,
    }
})

export default Card;