import React, {useState, useRef} from "react";
import { SafeAreaView, View, Text, StyleSheet, Animated, ScrollView, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../../../common/CustomButton";

import BackArrow from '../../../assets/image/backarrow.svg';
import UserProfile from "../../../common/UserProfile";
import Header from "../../../common/Header";

const items = [1, 2, 3, 4, 5];
const windowWidth = Dimensions.get("window").width;
const CARD_WIDTH = windowWidth * 0.9;

const CardList = () => {
    const [idx, setIdx] = useState(1);
    const ref = useRef(null);
    const animatedValue = React.useRef(new Animated.Value(0)).current;
    const getCenterPositionFromIndex = (index) => {
        return index * CARD_WIDTH;
    }

    const handleOnScroll = (e) => {
        const nextIdx = Math.round((e.nativeEvent.contentOffset.x / CARD_WIDTH))
        console.log(nextIdx, 'nextIndex')
        if(nextIdx < 0){
            return;
        }
        ref.current.scrollTo({x: nextIdx * CARD_WIDTH})
    }

    return(
        <ScrollView
            ref={ref}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            onScrollEndDrag={handleOnScroll}
            onScroll={
                Animated.event(
                    [{ nativeEvent: { contentOffset: { x: animatedValue } } }],
                    { useNativeDriver: false }
                )
            }
            pagingEnabled={true}
            scrollEventThrottle={0}
            contentContainerStyle={{alignSelf: 'center', padding: 0, margin: 0}}
            style={{alignSelf: 'center'}}
        >
            {items.map((item, index)=>{
                 const position = getCenterPositionFromIndex(items.indexOf(item));

                 const opacity = animatedValue.interpolate({
                     inputRange: [
                        position-CARD_WIDTH,
                        position,
                        position + CARD_WIDTH,
                     ],
                     outputRange: [0.2, 1, 0.2],
                     extrapolate: 'clamp',
                 });

                 const scale = animatedValue.interpolate({
                     inputRange: [
                         position - CARD_WIDTH,
                         position,
                         position + CARD_WIDTH,
                     ],
                     outputRange: [0.95, 1, 0.95],
                     extrapolate: 'clamp',
                 });
                 return(
                    <Animated.View key={index} style={{ opacity, transform: [{ scale }], backgroundColor: 'black', margin: 0, padding: 0}}>
                        <ApplicantCard key={index} index={index}/>
                    </Animated.View>
                 )
            })}
        </ScrollView>
    )
}

const ApplicantCard = ({introduce, reason, index}) => {
    const SampleUser = '../../../assets/image/sample/Me.png';

    return (
        <View style={styles.cardContainer}>
            <View style={{paddingTop: 25, paddingHorizontal: 22}}>
                {/* 프로필 */}
                <UserProfile imgSrc={require(SampleUser)} name={index} imgSize={52} textSize={12} />
            </View>

            {/* 자기소개 */}
            <View style={styles.subContainer}>
                <Text style={styles.text}>나는 이런 사람이에요!</Text>
                <ScrollView contentContainerStyle={styles.contentContainer} style={styles.textInput} showsVerticalScrollIndicator={false}>
                    <Text style={styles.subText}>I like sports, especially soccer. {'\n'}I played soccer for about 5 years.</Text>
                </ScrollView>
            </View>

            {/* 모임 참여 이유 */}
            <View style={[styles.subContainer]}>
                <Text style={styles.text}>모임에 함께 하고 싶은 이유</Text>
                <ScrollView contentContainerStyle={styles.contentContainer} style={styles.textInput} showsVerticalScrollIndicator={false}>
                    <Text style={styles.subText}>I didn’t have many opportunities to play soccer in South Korea. I want to have fun with my teammates Through this group.I didn’t have many opportunities to play soccer in South Korea. I want to have fun with my teammates Through this group.I want to have fun with my teammates Through have fun wit.</Text>                    
                </ScrollView>
            </View>
            
            {/* 승인/거절 버튼 */}
            <View style={styles.buttonContainer}>
                <CustomButton text={'승인'} style={styles.customButtonStyle}/>
                <CustomButton text={'거절'} color={'#CDCDCD'} style={styles.customButtonStyle}/>
            </View>
        </View>
    )
}

const ApplicationManageScreen = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            {/* TODO: 뒤로가기 버튼 작동 확인 */}
            < Header
                title={'지원서 관리'}
                noIcon={false}
                leftIcon={<BackArrow width={8} height={15} />}
                leftIconPress={() => { navigation.goBack() }}
            />

            <View style={{ marginLeft: 14, flex: 1 }}>
                {/* 설명 */}
                <Text style={styles.description}>모임에 가입하고 싶은 멤버의{'\n'}지원서를 확인해주세요</Text>

                { /* 자기소개 카드 */}
                <CardList/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    subContainer: {
        margin: 15,
        marginBottom: 0
    },
    buttonContainer: {
        //alignItems: 'center',
        flex: 1,
        justifyContent: 'flex-end',
        alignSelf: 'center',
        //backgroundColor: 'green'
    },
    customButtonStyle:{
        width: windowWidth * 0.81
    },
    cardContainer: {
        height: 540,
        width: CARD_WIDTH,
        backgroundColor: 'red',
        borderRadius: 9,
    },
    description: {
        fontSize: 20,
        fontWeight: '700',
        lineHeight: 36,
        color: '#1A1A1A',
        marginVertical: 17,
        letterSpacing: -0.8,
    },
    textInput: {
        height: 121,
        backgroundColor: 'white',
        borderRadius: 9,
    },
    contentContainer:{
        paddingVertical: 10,
        paddingHorizontal: 15
    },
    text: {
        fontWeight: 'bold',
        color: '#1A1A1A',
        marginTop: 3,
        marginBottom: 11,
    },
    subText:{
        fontSize: 14,
        textAlignVertical: 'top',
        color: '#1A1A1A',
    },
})

export default ApplicationManageScreen;