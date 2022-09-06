import React, { useState } from 'react';
import { SafeAreaView, Text, View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import CheckDuplicateModal from '../components/CheckDuplicateModal';
import IdentificationModal from '../components/IdentificationModal';

const ModalTestScreen = () => {
    const navigation = useNavigation();
    const [showBottomSheet, setShowBottomSheet] = useState(false)


    const hide = () => {
        setShowBottomSheet(false)
    }


    return (
        <SafeAreaView style={styles.container}>

            <TouchableOpacity style={styles.button}
                onPress={() => { setShowBottomSheet(true) }}>
                <Text>Click to Open</Text>
            </TouchableOpacity>

            {showBottomSheet ?
                /*<CheckDuplicateModal showBottomSheet={showBottomSheet} hide={hide} memID={'sample@email.com'}/>*/
                <IdentificationModal showBottomSheet={showBottomSheet} hide={hide}/>
                :
                <></>
            }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})

export default ModalTestScreen;