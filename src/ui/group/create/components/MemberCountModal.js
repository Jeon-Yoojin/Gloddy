import React, { useRef, useState } from "react";
import { View, StyleSheet, Text, Animated, Dimensions} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Modal from 'react-native-modal';

import CustomButton from "../../../../common/CustomButton";
import ModalHeader from "./ModalHeader";

const items = [' ', 2, 3, 4, 5, 6, 7, 8, 9, 10, ' '];
const WINDOW_WIDTH = Dimensions.get("window").width;
const BUTTON_WIDTH = 130;

const NumberPicker = ()=> {
    const [count, setCount] = useState(2);
    const refCount = useRef(null);

    const animatedValue = React.useRef(new Animated.Value(0)).current;

    const getCenterPositionFromIndex = (index) => {
        return index * BUTTON_WIDTH - WINDOW_WIDTH / 2 + BUTTON_WIDTH / 2;
    };

    const handleNumberOnScroll = (e) => {
        const nextCount = Math.round((e.nativeEvent.contentOffset.x + WINDOW_WIDTH / 2 - BUTTON_WIDTH / 2) / BUTTON_WIDTH);

        if (nextCount < 0) {
            return;
        }
        setCount(items[nextCount]);
        refCount.current.scrollTo({ x: nextCount * BUTTON_WIDTH - WINDOW_WIDTH / 2 + BUTTON_WIDTH / 2, animated: true })
    }

    return (
        <View>
            <OverlayView />
            <ScrollView
                ref={refCount}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                onScroll={
                    Animated.event(
                        [{ nativeEvent: { contentOffset: { x: animatedValue } } }],
                        { useNativeDriver: false }
                    )
                }
                onScrollEndDrag={handleNumberOnScroll}
                scrollEventThrottle={0}

            >
                {items.map((item, index) => {
                    const position = getCenterPositionFromIndex(items.indexOf(item));

                    const opacity = animatedValue.interpolate({
                        inputRange: [
                            position - BUTTON_WIDTH,
                            position,
                            position + BUTTON_WIDTH,
                        ],
                        outputRange: [0.3, 1, 0.3],
                        extrapolate: 'clamp',
                    });

                    const scale = animatedValue.interpolate({
                        inputRange: [
                            position - 2 * BUTTON_WIDTH,
                            position - BUTTON_WIDTH,
                            position,
                            position + BUTTON_WIDTH,
                            position + 2 * BUTTON_WIDTH
                        ],
                        outputRange: [0.5, 0.7, 1, 0.7, 0.5],
                        extrapolate: 'clamp',
                    });

                    return (
                        <Animated.View key={index} style={{ width: BUTTON_WIDTH, justifyContent: 'center', opacity, transform: [{ scale }] }}>
                            <Text style={styles.numberPicker} key={index}>{item}</Text>
                        </Animated.View>
                    )
                })}
            </ScrollView>
        </View>
    )
}

const OverlayView = ()=>{

    return (
        <View
            pointerEvents={'none'}
            style={[StyleSheet.absoluteFill, {justifyContent: 'center', alignitems: 'center'}]}
        >
            <View style={{width: 150, height: 150, borderRadius: 75, backgroundColor: '#F8F8F8', alignSelf: 'center'}}/>
        </View>
    )
}

const MemberCountModal = ({ showBottomSheet, hide , setMemberCount}) => {
    

    return (
        <Modal
            isVisible={showBottomSheet}
            useNativeDriver={true}
            onBackdropPress={hide}
            transparent={true}
            style={{ justifyContent: 'flex-end', margin: 0, }}
        >
            <View style={styles.backDrop}>
                <ModalHeader title={'모임인원'} />
                <NumberPicker setMemberCount={setMemberCount} />
                <CustomButton
                    text={'완료'}
                    color={'#1249FC'}
                    textColor={'#FFFFFF'}
                    onPress={() => { console.log('pressed') }}
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
        height: 340,
        width: '100%'
    },
    numberPicker:{
        fontSize: 85,
        fontWeight: '600',
        color: '#010101',
        alignSelf: 'center',
    }
})

export default MemberCountModal;