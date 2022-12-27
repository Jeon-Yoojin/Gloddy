import React from "react";
import { Text, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Header from "../../../../common/Header";
import BackArrow from '../../../../assets/image/backarrow.svg';

const CreateGroupHeader = () => {
    const navigation = useNavigation();

    return (
        < Header
            title={'모임 개설하기'}
            noIcon={false}
            leftIcon={<BackArrow width={8} height={15} />}
            leftIconPress={() => { navigation.goBack() }}
        />
    )
}

const styles = StyleSheet.create({
    backarrow:{
        width: 14,
        height: 13,
    },
})

export default CreateGroupHeader;