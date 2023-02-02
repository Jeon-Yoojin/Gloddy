import React, {useState} from "react";
import { View, StyleSheet, Text, Dimensions } from 'react-native';

import Modal from 'react-native-modal';
import CustomButton from "../../../common/CustomButton";
import DeriveReview from "../../../assets/image/review/derive_review1.svg";

import PleaseReviewModal from "./PleaseReviewModal";

const width = Dimensions.get('window').width;
const modalWidth = width * 0.85;

const DeriveReviewModal = ({showBottomSheet, hide}) => {
    const [showPleaseReviewModal, setShowPleaseReviewModal] = useState(false);

    return (
        <View style={styles.modalContainer}>
            <Modal
                isVisible={showBottomSheet}
                useNativeDriver={true}
                style={{ alignSelf: 'center' }}
            >
                <View style={styles.backDrop}>
                    <View style={styles.content}>
                        <DeriveReview/>
                        <Text style={styles.alertText}>모임은 즐거우셨나요?</Text>
                        <Text style={styles.alertTitle}>함께했던 <Text style={styles.pointText}>멤버</Text>들을 칭찬해주세요!</Text>
                    </View>

                    <View style={styles.twoButtons}>
                        <CustomButton text="이동하기" onPress={hide} color={'#1249FC'} textColor={'#FFFFFF'} style={styles.customButtonStyle} />
                        <CustomButton text="아니요" onPress={()=>{hide(); setShowPleaseReviewModal(true);}} color={'#CDCDCD'} textColor={'#FFFFFF'} style={styles.customButtonStyle} />
                    </View>
                </View>
            </Modal>
            <PleaseReviewModal showBottomSheet={showPleaseReviewModal} hide={()=>{setShowPleaseReviewModal(false)}}/>
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
        width: modalWidth,
        paddingTop: 30
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
        marginTop: 7,
        marginBottom: 7,
    },
    pointText:{
        color: '#1249FC',
        fontWeight: 'bold'
    },
    customButtonStyle: {
        width: modalWidth * 0.9
    },
    twoButtons:{
        alignItems: 'center', 
        marginBottom: 10,
        marginTop: 25,
        flexGrow: 1,
        justifyContent: 'space-evenly'
    }
})

export default DeriveReviewModal;