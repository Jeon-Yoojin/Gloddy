import React from "react";
import { View, StyleSheet, Text } from "react-native";

const ReviewCircle = () => {
    return(
        <View style={{backgroundColor: '#F7F7F7', width: 47, height: 47, borderRadius: 23.5, marginRight: 15}}/>
    )
}

const Rating = ({ compliment, review }) => {
    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <ReviewCircle/>
                <View>
                    <Text style={styles.text}>받은 칭찬</Text>
                    <Text style={[styles.text, styles.bold]}>{compliment}개</Text>
                </View>
            </View>
            {/* 오른쪽 borderline */}
            <View style={{borderRightColor: '#E5E5E5', borderRightWidth: 1}}/>
            <View style={styles.subContainer}>
                <ReviewCircle/>
                <View>
                    <Text style={styles.text}>모임 후기</Text>
                    <Text style={[styles.text, styles.bold]}>{review}개</Text>
                </View>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        paddingVertical: 25,
    },
    subContainer:{
        width: '50%',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    bold:{
        fontSize: 20,
        fontWeight: 'bold'
    }
})

export default Rating;