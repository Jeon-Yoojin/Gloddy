import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Image, Text, TouchableOpacity, View } from "react-native";

import UserProfile from "../../../common/UserProfile";
import CheckButton from "../../../common/CheckButton";

const PartnerSelection = ({ imgSrc, imgSize, name, textSize }) => {
    const [isPress, setIsPress] = useState(false);

    return (
        <TouchableOpacity onPress={() => { setIsPress(!isPress) }}>
            <View style={styles.container}>
                <UserProfile imgSrc={imgSrc} imgSize={imgSize} name={name} textSize={textSize} />
                <CheckButton circleSize={25} isPress={isPress} checkStyle={{width: 10.5, height: 7}}/>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        //backgroundColor: 'yellow',
        marginHorizontal: 12,
        paddingVertical: 9,
    },
})

export default PartnerSelection;