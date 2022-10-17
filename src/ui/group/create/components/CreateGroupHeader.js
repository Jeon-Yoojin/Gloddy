import React from "react";
import { Text, StyleSheet, Image } from "react-native";

import Header from "../../../../common/Header";

const CreateGroupHeader = () => {
    const BackarrowImg = '../../../../assets/image/backarrow.png'

    return (
        < Header
            title={'모임 개설하기'}
            noIcon={false}
            leftIcon={< Image source={require(BackarrowImg)} style={styles.backarrow} />}
            leftIconPress={() => { console.log('pressed!') }}
            rightIcon={<Text style={{fontSize: 16}}>개설</Text>}
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