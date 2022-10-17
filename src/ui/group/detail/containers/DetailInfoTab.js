import React, {useState} from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
import { BasicModal } from '../../../../common/BasicModal';

import DetailInfo from '../components/DetailInfo';
import UserProfile from '../components/UserProfile';
import CustomButton from '../../../../common/CustomButton';
import { useNavigation } from '@react-navigation/native';

import WarningIcon from '../../../../assets/image/group/detail/warning.svg'

const DetailInfoTab = ()=>{
    const navigation = useNavigation();

    const [showBottomSheet, setShowBottomSheet] = useState(false)

    const hide = () => {
      setShowBottomSheet(false)
    }

    return(
        <ScrollView>
            {/* 모임 참여 인원 */}
            <UserProfile/>

            {/* 모임 상세 정보 */}
            <DetailInfo/>
            
            {/* 지원 버튼 */}
            <View style={styles.button}>
                <CustomButton
                    text={'지원하기'}
                    color='#1249FC'
                    textColor='#FFFFFF'
                    onPress={() => { navigation.navigate('PostingScreen') }}
                />
            </View>
            
            <View style={styles.button}>
                <CustomButton
                    text={'모임 나가기'}
                    color='#C85C46'
                    textColor='#FFFFFF'
                    onPress={() => {setShowBottomSheet(true)}}
                />
            </View>
            <View style={{alignContent: 'center', justifyContent: 'center'}}>
                <BasicModal show={showBottomSheet} height={295} width={347} onOuterClick={hide}>
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <WarningIcon />

                        <Text style={styles.alertTitle}>모임에서 나가시겠어요?{'\n'}</Text>
                        <Text style={styles.alertText}>모임방에서 나갈 시</Text>
                        <Text style={styles.alertText}><Text style={[styles.alertText,{color: '#1249FC', fontWeight: 'bold'}]}>신뢰도 포인트</Text>가 차감돼요.</Text>


                        <CustomButton text="네" onPress={hide} color={'#1249FC'} textColor={'#FFFFFF'} />
                        <CustomButton text="아니요" onPress={hide} color={'#CDCDCD'} textColor={'#FFFFFF'} />
                    </View>
                </BasicModal>
            </View>
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    subContainer:{
        borderBottomColor: '#EAEAEA',
        borderBottomWidth: 1,
        justifyContent: 'center',
        marginHorizontal: 14,
    },
    intro:{
        fontSize: 12,
        color: '#1A1A1A',
        marginVertical: 14
    },
    button:{
        alignItems: 'center',
        marginVertical: 10
    },
    alertTitle:{
        fontSize: 16,
        color: '#1A1A1A',
        fontWeight: '600'
    },
    alertText:{
        fontSize: 14,
        color: '#7F7F7F',
    }
})

export default DetailInfoTab;