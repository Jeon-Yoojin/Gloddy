import React from "react";
import { SafeAreaView, View, StyleSheet, Text, Image } from "react-native";

import ProgressBar from "../components/ProgressBar";

const Reliability = () => {
    return (
        <View style={{marginHorizontal: 10}}>
            <Text style={{ fontSize: 12, color: '#000000', marginBottom: 12 }}>신뢰도 지표</Text>

            {/* soulmate까지 width 62.5%, 길이 328, 높이 12를 의미*/}
            <ProgressBar widthPct={6.25} fullWidth={328} Height={12} />
            <View style={{ flexDirection: 'row', marginVertical: 8 }}>
                <Text style={styles.reliability}>HOOD</Text>
                <Text style={styles.reliability}>MATE</Text>
                <Text style={styles.reliability}>SOUL{'\n'}MATE</Text>
                <Text style={styles.reliability}>GLODDY</Text>
            </View>
        </View>

    )
}

const Profile = ({ name, address, age }) => {
    return (
        <View style={[{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 25, }, styles.subContainer]}>
            <View style={{ alignItems: 'flex-start' }}>
                <Text>
                    <Text style={[styles.text, { fontSize: 26, fontWeight: 'bold' }]}>글로디관리자</Text>
                    <Text style={[styles.text, { fontSize: 26 }]}> 님</Text>
                </Text>
                <Text style={[styles.text, { margin: 2 }]}>하남시 23세</Text>
            </View>
            <Image source={require('../../../assets/image/group/userSample.png')} style={styles.img} />
        </View>
    )
}


const Rating = ({ compliment, review }) => {
    return (
        <View style={[{ flexDirection: 'row', paddingVertical: 10 }, styles.subContainer]}>
            <View style={{ width: '50%' }}>
                <Text style={styles.text}>받은 칭찬</Text>
                <Text style={[styles.text, { fontSize: 20, fontWeight: 'bold' }]}>15</Text>
            </View>
            <View style={{ width: '50%' }}>
                <Text style={styles.text}>모임 후기</Text>
                <Text style={[styles.text, { fontSize: 20, fontWeight: 'bold' }]}>3</Text>
            </View>
        </View >
    )
}

const Participation = ({ number, joinIn }) => {
    return (
        <View style={styles.whiteBox}>
            <Text style={{ fontSize: 14, color: '#1A1A1A' }}>
                <Text>모임참여 5회</Text>
                <Text> (최근 60일 이내)</Text>
            </Text>
            <Text style={{ fontSize: 14, color: '#1A1A1A' }}>2022년 01월 01일 가입</Text>
        </View>
    )
}

const MyProfileScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ backgroundColor: '#586ef3' }}>
                {/* 상단 이름, 나이, 거주지 */}
                <Profile />

                {/* 평가 - 칭찬과 모임 후기 */}
                <Rating />

                <View style={[styles.subContainer]}>
                    {/* 하단 참여 횟수, 가입일 */}
                    <Participation />
                    {/* 신뢰도 지표 */}
                    <View>
                        <Reliability />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    subContainer: {
        marginHorizontal: 18,
        borderBottomColor: '#8092ef',
        borderBottomWidth: 1
    },
    whiteBox: {
        backgroundColor: 'white',
        borderRadius: 5,
        alignItems: 'center',
        marginVertical: 14,
    },
    img: {
        width: 60,
        height: 60,
        borderRadius: 60,
    },
    reliability: {
        width: 82,
        textAlign: 'center',
        fontSize: 12,
        color: '#000000',
    },
    text: {
        color: 'white',
        fontSize: 12,
    }
})

export default MyProfileScreen;