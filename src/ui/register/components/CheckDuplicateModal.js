import React from "react";
import {SafeAreaView, Text, View, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { BasicModal } from "../../../common/BasicModal";
import CustomButton from "../../../common/CustomButton";
import CustomTextBox from "./CustomTextBox";

const CheckDuplicateModal = ({memID, showBottomSheet, hide}) => {
    return(
        <BasicModal show={showBottomSheet} height={390} onOuterClick={hide}>
            <View style={styles.modalContainer}>
                <AntDesign name='closecircle' size={28} style={{ position: 'absolute', left: Dimensions.get('window').width * 0.85, top: 26 }} />
                <AntDesign name='closecircle' size={59} style={{ marginTop: 46, margin: 20, }} />

                <View style={styles.bottomSheetContent}>
                    <Text style={styles.bottomSheetText}>회원이 아니에요.</Text>
                    <CustomTextBox style={styles.customTextBox} title={'ID'} content={memID} />
                    <Text style={styles.bottomSheetSubText}>해당 아이디로 회원가입을 진행할까요?</Text>
                </View>
            </View>

            <View style={styles.customButton}>
                <CustomButton text={'회원가입'} onPress={()=>{}} />
            </View>
        </BasicModal>   
    )
}

const styles = StyleSheet.create({
    bottomSheetContent: {
        marginHorizontal: 20,
        zIndex: 1,
    },
    bottomSheetText:{
        fontSize: 20,
        fontWeight: '700',
        color: '#1A1A1A'
    },
    bottomSheetSubText:{
        fontSize: 14,
        color: '#CDCDCD',
        marginVertical: 10,
    },
    customButton:{
        alignItems: 'center',
        marginVertical: 10,
    },
    customTextBox:{
        alignItems: 'center',
        marginTop: 23,
        marginBottom: 5, 
    },
    icon:{
        alignItems: 'flex-end',
        margin: 20
    },
    modalContainer:{
        flexGrow: 1,
    },
})

export default CheckDuplicateModal;