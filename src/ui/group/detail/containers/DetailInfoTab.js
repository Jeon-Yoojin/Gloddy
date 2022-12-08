import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView, Dimensions } from 'react-native';
import DetailInfo from '../components/DetailInfo';
import UserProfile from '../components/UserProfile';
import CustomButton from '../../../../common/CustomButton';
import QuitConfirmModal from '../components/QuitConfirmModal';
import { useNavigation, useRoute } from '@react-navigation/native';

import { useQuery } from 'react-query';
import { getGroupDetail } from '../../../../api/group';

const DetailInfoTab = () => {
    const navigation = useNavigation();
    const [showBottomSheet, setShowBottomSheet] = useState(false)

    const route = useRoute();
    const groupId = route.params.groupId;
    const groupQuery = useQuery(['group', groupId], () => getGroupDetail(groupId))

    if (!groupQuery.data) {
        return (
            /* 로딩바 */
            <Text>Loading....</Text>
        )
    }
    const { participantNames, meetDate, startTime, endTime, place, place_latitude, place_longitude } = groupQuery.data;

    return (
        <>
            <ScrollView>
                {/* 모임 참여 인원 */}
                <UserProfile User={[{ 'imgSrc': '', 'user': '전유진' }]} />

                {/* 모임 상세 정보 */}
                <DetailInfo date={meetDate} startTime={startTime} endTime={endTime} place={place} />

                {/* 지원 버튼 */}
                <View style={styles.button}>
                    <CustomButton
                        text={'지원하기'}
                        color='#1249FC'
                        textColor='#FFFFFF'
                        onPress={() => {
                            navigation.navigate('ApplicationScreen', {
                                groupId: groupId
                            })
                        }}
                    />
                </View>

                {/* 모임 나가기 버튼 */}
                <View style={styles.button}>
                    <CustomButton
                        text={'모임 나가기'}
                        color='#C85C46'
                        textColor='#FFFFFF'
                        onPress={() => { setShowBottomSheet(true) }}
                    />
                </View>
            </ScrollView>

            {/* 모임 나가기 경고 Modal */}
            <QuitConfirmModal showBottomSheet={showBottomSheet} hide={() => { setShowBottomSheet(false) }} />
        </>
    )
}

const styles = StyleSheet.create({
    subContainer: {
        borderBottomColor: '#EAEAEA',
        borderBottomWidth: 1,
        justifyContent: 'center',
        marginHorizontal: 14,
    },
    intro: {
        fontSize: 12,
        color: '#1A1A1A',
        marginVertical: 14
    },
    button: {
        alignItems: 'center',
        marginVertical: 10
    }
})

export default DetailInfoTab;