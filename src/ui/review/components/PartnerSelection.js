import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Image, Text, TouchableOpacity, View, Dimensions } from "react-native";

import UserProfile from "../../../common/UserProfile";
import CheckButton from "../../../common/CheckButton";

const windowHeight = Dimensions.get('window').height;

const PartnerSelection = ({ imgSrc, imgSize, name, textSize }) => {
    const [isPress, setIsPress] = useState(false);

    return (
        <TouchableOpacity style={styles.container} onPress={() => { setIsPress(!isPress) }}>
                <UserProfile imgSrc={imgSrc} imgSize={imgSize} name={name} textSize={textSize} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
        width: '90%',
        height: windowHeight*0.08,
        backgroundColor: '#F5F5F5',
        borderColor: '#F7F7F7',
        borderRadius: 8,
        marginBottom: 12,
        paddingLeft: 17,
    },
})

export default PartnerSelection;