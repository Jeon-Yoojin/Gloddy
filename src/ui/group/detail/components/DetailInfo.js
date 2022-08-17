import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const TimeInfo = ({ title, time }) => {

    return (
        <View style={styles.timeInfo}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.time}>{time}</Text>
        </View>
    )
}

const DetailInfo = ({attendees, date, startTime, endTime, place}) => {
    return (
        <View style={styles.container}>
            {/* 참여 인원 */}

            {/* 모임 날짜/시간 */}
            <View style={[styles.subContainer]}>
                    <View style={[styles.row, {marginBottom: 10}]}>
                        <Text style={styles.title}>모임 날짜</Text>
                        <Text style={styles.colorText}>2022.04.27.FRI 19:00</Text>
                    </View>
                    <View style={styles.row}>
                        <TimeInfo title={'시작 시간'} time={'오후 07:00'} />
                        <TimeInfo title={'마감 시간'} time={'오후 08:00'} />
                    </View>
            </View>

            {/* 모임 위치 */}
            <View style={styles.subContainer}>
                <View style={styles.row}>
                    <Text style={styles.title}>모임 위치</Text>
                    <Text style={[styles.colorText, {flex:1, marginRight: 10}]}>서울특별시 동대문구 이문동 32-7 별별피자</Text>
                </View>
                <View style={{alignItems: 'center', marginTop: 10}}>
                    <Image source={require('../../../../assets/image/group/googlemap.png')} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white'
    },
    subContainer:{
        borderBottomColor: '#EAEAEA',
        borderBottomWidth: 1,
        justifyContent: 'center',
        marginHorizontal: 14,
        paddingVertical: 15,
    },
    row:{
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        //backgroundColor: 'orange'
    },
    title:{
        fontSize: 12,
        fontWeight: 'bold',
        color: '#1A1A1A',
    },
    colorText:{
        fontSize: 14,
        color: '#586ff3',
        marginLeft: 14
    },
    time:{
        fontSize: 14,
        color: '#7F7F7F',
        marginLeft: 6,
        textAlignVertical: 'top',
        padding: 0
    },
    timeInfo:{
        flexDirection: 'row',
        alignItems: 'baseline',
        marginRight:11
    }
})

export default DetailInfo;