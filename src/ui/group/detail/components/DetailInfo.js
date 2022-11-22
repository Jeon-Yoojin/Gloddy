import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const DateInfo = ({ date, startTime, endTime }) => {

    return (
        <View style={[styles.subContainer]}>
            <View style={styles.row}>
                <Text style={styles.title}>모임 일시</Text>

                <View style={styles.box}>
                    <Text style={styles.subText}>{date} {startTime}-{endTime}</Text>
                </View>
            </View>
        </View>
    )
}

const Marker = ({markerTitle, markerType, markerInfo}) => {
    return (
        <View style={{ alignItems: 'center' }}>            
            <View style={styles.box}>
                {/* TODO: 지도 마커 표시 컴포넌트 */}
                <Image source={require('../../../../assets/image/group/googlemap.png')} />
                <View style={{ marginTop: 16, }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.markerTitle}>{markerTitle}</Text>
                        <Text style={styles.markerType}>{markerType}</Text>
                    </View>
                    <Text style={styles.markerInfo}>{markerInfo}</Text>
                </View>
            </View>
        </View>
    )
}

const DetailInfo = ({attendees, date, startTime, endTime, place}) => {
    return (
        <View style={styles.container}>
            {/* 참여 인원 */}

            {/* 모임 날짜/시간 */}
            <DateInfo date={date} startTime={startTime} endTime={endTime}/>

            {/* 모임 위치 */}
            <View style={styles.subContainer}>
                <View style={styles.row}>
                    <Text style={styles.title}>모임 위치</Text>
                </View>
                {/* 지도 마커 */}
                <Marker markerTitle={place} markerType={'호프, 요리주점'} markerInfo={'서울 동대문구 경희대로3길 11 지하 1층 (회기동)'}/>
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
        justifyContent: 'center',
        marginHorizontal: 20,
        paddingVertical: 6,
    },
    row:{
        //flexDirection: 'row',
        //alignItems: 'center',
        alignContent: 'center',
        //backgroundColor: 'orange'
    },
    title:{
        fontSize: 14,
        fontWeight: 'bold',
        color: '#1A1A1A',
        marginVertical: 10,
    },
    subText:{
        fontSize: 14,
        color: '#1A1A1A',
        marginLeft: 14,
        fontWeight: '600'
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
    },
    box:{
        backgroundColor: '#F6F6F6',
        borderRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 13,
    },
    markerTitle:{
        fontSize: 14,
        fontWeight: 'bold',
        color: '#1A1A1A',
        marginRight: 5,
    },
    markerType:{
        fontSize: 10,
        textAlignVertical: 'bottom'
    },
    markerInfo:{
        fontSize: 12,
        marginVertical: 2,
    }
})

export default DetailInfo;