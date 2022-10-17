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
            <Character />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        //ios의 경우 shadow 컬러 설정 필요
        borderColor: '#F7F7F7',
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: '#F5F5F5',
        marginHorizontal: 20,
        marginBottom: 12,
        paddingVertical: 14,
    },
    row:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 13,
        marginBottom: 20,
    },
})

export default Card;