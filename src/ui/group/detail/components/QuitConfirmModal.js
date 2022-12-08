import React from "react";
import { View, StyleSheet, Text, Dimensions } from 'react-native';

import Modal from 'react-native-modal';
import WarningIcon from '../../../../assets/image/group/detail/warning.svg'
import CustomButton from "../../../../common/CustomButton";

const width = Dimensions.get('window').width;
const modalWidth = width * 0.85;

const QuitConfirmModal = ({showBottomSheet, hide}) => {
    return (
        <View style={styles.modalContainer}>
            <Modal
                isVisible={showBottomSheet}
                useNativeDriver={true}
                onBackdropPress={hide}
                style={{ alignSelf: 'center' }}
            >
                <View style={styles.backDrop}>
                    <View style={styles.content}>
                        <WarningIcon />

                        <Text style={styles.alertTitle}>모임에서 나가시겠어요?{'\n'}</Text>
                        <Text style={styles.alertText}>모임방에서 나갈 시</Text>
                        <Text style={styles.alertText}><Text style={[styles.alertText, { color: '#1249FC', fontWeight: 'bold' }]}>신뢰도 포인트</Text>가 차감돼요.</Text>
                    </View>

                    <View style={styles.twoButtons}>
                        <CustomButton text="네" onPress={hide} color={'#1249FC'} textColor={'#FFFFFF'} style={styles.customButtonStyle} />
                        <CustomButton text="아니요" onPress={hide} color={'#CDCDCD'} textColor={'#FFFFFF'} style={styles.customButtonStyle} />
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        alignContent: 'center',
        justifyContent: 'center'
    },
    backDrop:{
        backgroundColor: 'white', 
        borderRadius: 10,
        height: 350,
        width: modalWidth
    },
    content:{
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    alertTitle:{
        fontSize: 16,
        color: '#1A1A1A',
        fontWeight: '600'
    },
    alertText:{
        fontSize: 14,
        color: '#7F7F7F',
    },
    customButtonStyle: {
        width: modalWidth * 0.9
    },
    twoButtons:{
        alignItems: 'center', 
        marginBottom: 10,
        flexGrow: 1,
        justifyContent: 'space-evenly'
    }
})

export default QuitConfirmModal;