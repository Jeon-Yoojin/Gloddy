import React from "react";
import { View, Text, StyleSheet } from "react-native";

import ProgressBar from "./ProgressBar";

//ProgressBar 길이, 높이
const fullWidth = 320;
const height = 21;

const Classes = () => {
    return (
        <View style={styles.classContainer}>
            <Text style={styles.reliability}>HOOD</Text>
            <Text style={styles.reliability}>MATE</Text>
            <Text style={styles.reliability}>SOULMATE</Text>
            <Text style={styles.reliability}>GLODDY</Text>
        </View>
    )
}

const Reliability = ({ widthPct }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.description}>신뢰도 지표</Text>
            {/* soulmate까지 width percent, 길이, 높이 의미*/}
            <ProgressBar widthPct={widthPct} fullWidth={fullWidth} Height={height} />
            <Classes />
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        paddingVertical: 20
    },
    description: {
        fontSize: 12,
        color: '#000000',
        marginBottom: 12
    },
    classContainer: {
        width: fullWidth,
        flexDirection: 'row',
        marginVertical: 8,
        alignSelf: 'center',
        justifyContent: 'space-between'
    },
    reliability: {
        fontSize: 12,
        color: '#000000',
    },
})

export default Reliability;