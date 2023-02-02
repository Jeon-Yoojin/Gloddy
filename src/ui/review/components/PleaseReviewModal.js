import React from "react";
import { View, StyleSheet, Text, Dimensions } from 'react-native';

import Modal from 'react-native-modal';
import CustomButton from "../../../common/CustomButton";
import PleaseReview from "../../../assets/image/review/please_review.svg";

const width = Dimensions.get('window').width;
const modalWidth = width * 0.85;

const PleaseReviewModal = ({showBottomSheet, hide}) => {
    return (
        <View style={styles.modalContainer}>
            <Modal
                isVisible={showBottomSheet}
                useNativeDriver={true}
                style={{ alignSelf: 'center' }}
            >
                <View style={styles.backDrop}>
                    <View style={styles.content}>
                        <PleaseReview/>
                        <Text style={styles.alertText}>멤버 평가는 앞으로의 그루핑에{'\n'}많은 도움이 됩니다 !</Text>
                        <Text style={styles.alertTitle}>정말 안 해주실 건가요? 💦</Text>
                    </View>

                    <View style={styles.twoButtons}>
                        <CustomButton text="이동하기" onPress={hide} color={'#1249FC'} textColor={'#FFFFFF'} style={styles.customButtonStyle} />
                        <CustomButton text="나가기" onPress={hide} color={'#D7533E'} textColor={'#FFFFFF'} style={styles.customButtonStyle} />
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        alignContent: 'center',
        justifyContent: 'center',
    },
    backDrop:{
        backgroundColor: 'white', 
        borderRadius: 10,
        width: modalWidth,
        paddingTop: 30,
    },
    content:{
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    alertTitle:{
        fontSize: 16,
        color: '#1A1A1A',
        fontWeight: '600',
        textAlign: 'center',
        marginVertical: 3,
    },
    alertText:{
        fontSize: 14,
        color: '#7F7F7F',
        textAlign: 'center',
        lineHeight: 21,
        marginTop: 15,
        marginBottom: 7,
    },
    customButtonStyle: {
        width: modalWidth * 0.9,
    },
    twoButtons:{
        alignItems: 'center', 
        marginBottom: 10,
        marginTop: 18,
        flexGrow: 1,
        justifyContent: 'space-evenly'
    }
})

export default PleaseReviewModal;