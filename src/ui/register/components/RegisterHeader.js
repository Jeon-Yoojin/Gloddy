import React from "react";
import { View, StyleSheet, Image } from "react-native";

import Header from "../../../common/Header";

const RegisterHeader = () => {
    const BackarrowImg = '../../../assets/image/backarrow.png'

    return (
        < Header
            title={'회원가입'}
            noIcon={false}
            leftIcon={< Image source={require(BackarrowImg)} style={styles.backarrow} />}
            leftIconPress={() => { console.log('pressed!') }}
        />
    )
}

const styles = StyleSheet.create({
    backarrow:{
        width: 14,
        height: 13,
    },
})

export default RegisterHeader;