import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather"

const Line = ({ title, onPress }) => {
    const LineOnPress = () => {
        console.log('pressed!')
    }

    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 6, }}>
            <MaterialCommunityIcons
                name="star-circle"
                size={16}
                color={'#8DD600'}
                style={{ marginRight: 3 }} />
                
            <TouchableOpacity onPress={LineOnPress}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.line}>{title}</Text>
                    <Feather
                        name="chevron-right"
                        size={17}
                        style={{ color: '#CDCDCD' }}
                    />
                </View>
            </TouchableOpacity>
        </View>
    )
}

const Notice = () => {
    return (
        <View style={styles.container}>
            <View style={{ marginHorizontal: 14 }}>
                <Text style={styles.title}>공지사항</Text>
                <Line title={'가입 인사 작성 방법'} />
                <Line title={'모임 간 지켜야할 수칙'} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingVertical: 10
    },
    title: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#1A1A1A',
        marginVertical: 5,
    },
    line: {
        fontSize: 14,
        fontWeight: '400',
        color: '#1A1A1A'
    }
})

export default Notice;