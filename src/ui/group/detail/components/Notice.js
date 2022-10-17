import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import StarIcon from '../../../../assets/image/staricon.svg';
import FrontArrow from '../../../../assets/image/frontarrow.svg'

const Line = ({ title, onPress }) => {
    const LineOnPress = () => {
        console.log('pressed!')
    }

    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 6, }}>
            <StarIcon/>
                
            <TouchableOpacity onPress={LineOnPress}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.line}>{title}</Text>
                    <FrontArrow/>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const Notice = () => {
    return (
        <View style={styles.container}>
            <View style={{ marginHorizontal: 14, marginVertical: 15 }}>
                <Text style={styles.title}>공지사항</Text>
                <Line title={'가입 인사 작성 방법'} />
                <Line title={'모임 간 지켜야할 수칙'} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F6F6F6',
        borderRadius: 8,
        marginHorizontal: 21,
        marginTop: 18
    },
    title: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#1A1A1A',
        marginVertical: 8,
    },
    line: {
        fontSize: 12,
        fontWeight: '400',
        color: '#3A3A3A',
        marginRight: 10,
        marginLeft: 8,
    }
})

export default Notice;