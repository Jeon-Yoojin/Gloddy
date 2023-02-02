import React, { useRef, useState } from "react";
import { StyleSheet, Animated, View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Modal from 'react-native-modal';
import ModalHeader from "../../group/create/components/ModalHeader";

import CustomButton from "../../../common/CustomButton";

const items = ['남성', '여성', ''];
const BUTTON_HEIGHT = 60;

const GenderPicker = () => {
    const [gender, setGender] = useState('');
    const ref = useRef(null);

    const animatedValue = useRef(new Animated.Value(0)).current;

    const getCenterPositionFromIndex = (index) => {
        return index * BUTTON_HEIGHT;
    }

    const handleOnScroll = (e) => {
        const nextCount = Math.round(e.nativeEvent.contentOffset.y / BUTTON_HEIGHT);
        console.log('nextCount', nextCount);
        if(nextCount < 0){
            return;
        }
        //setGender(items[nextCount]);
        ref.current.scrollTo({y: nextCount * BUTTON_HEIGHT})
    }

    return(
        <View>
            <OverlayView/>
            <ScrollView
                ref={ref}
                showsVerticalScrollIndicator={false}
                onScroll={
                    Animated.event(
                        [{ nativeEvent: { contentOffset: { y: animatedValue } } }],
                        { useNativeDriver: false }
                    )
                }
                onScrollEndDrag={handleOnScroll}
                scrollEventThrottle={0}
                contentContainerStyle={{paddingVertical: BUTTON_HEIGHT/2, alignSelf: 'center'}}
                style={{height: 150}}
            >
                {items.map((item, index)=>{
                    const position = getCenterPositionFromIndex(items.indexOf(item))
                    //position 기준으로 앞, 뒤 버튼을 input range로 지정
                    const inputRange = [position - BUTTON_HEIGHT, position, position + BUTTON_HEIGHT];

                    const opacity = animatedValue.interpolate({
                        inputRange: inputRange,
                        outputRange: [0.3, 1, 0.3],
                        extrapolate: 'clamp'
                    });

                    const scale = animatedValue.interpolate({
                        inputRange: inputRange,
                        outputRange: [0.9, 1, 0.9],
                        extrapolate: 'clamp',
                    });

                    return(
                        <Animated.View key={index} style={{ height: BUTTON_HEIGHT, opacity, transform: [{ scale }], justifyContent: 'center' }}>
                            <Text style={styles.genderPicker} key={index}>{item}</Text>
                        </Animated.View>
                    )
                })}
            </ScrollView>
        </View>
    )
}

const OverlayView = () => {

    return(
        <View
            pointerEvents={'none'}
            style={[StyleSheet.absoluteFill, {paddingTop: BUTTON_HEIGHT/2}]}
        >
            <View style={styles.overlayView}/>
        </View>
    )
}

const GenderSelectionModal = ({showBottomSheet, hide}) => {

    return (
        <Modal
            isVisible={showBottomSheet}
            useNativeDriver={true}
            onBackdropPress={hide}
            transparent={true}
            style={{ justifyContent: 'flex-end', margin: 0}}
        >
            {/* 모달 내부 내용 */}
            <View style={styles.backDrop}>
                <View style={{paddingVertical: 10}}>
                    <ModalHeader title={'성별'} />
                </View>
                <GenderPicker/>
                <CustomButton
                    text={'완료'}
                    color={'#1249FC'}
                    textColor={'#FFFFFF'}
                    onPress={hide}
                    style={{alignItem: 'center'}}
                />
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    backDrop:{
        justifyContent: 'space-between',
        backgroundColor: 'white', 
        borderTopStartRadius: 36,
        borderTopEndRadius: 36,
        //height: 300,
        width: '100%',
    },
    genderPicker:{
        fontSize: 25,
        fontWeight: '600',
        color: '#010101',
        alignSelf: 'center',
    },
    overlayView:{
        width: '85%', 
        height: BUTTON_HEIGHT,
        backgroundColor: '#F8F8F8',
        alignSelf: 'center'
    }
})

export default GenderSelectionModal;