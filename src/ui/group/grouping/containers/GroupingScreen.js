import React, { useEffect, useMemo, useRef, useState } from "react";
import { SafeAreaView, StyleSheet, Pressable, View, Text, Animated } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useInfiniteQuery } from "react-query";
import useUser from "../../../../redux/hooks/useUser";
import { getGroups } from "../../../../api/group";

import MagnifyIcon from "../../../../assets/image/magnify.svg";
import GroupInfo from "../components/GroupInfo";
import PlusIcon from "../../../../assets/image/plusIcon.svg";

const AddButton = ({ onAdd }) => {
    const navigation = useNavigation();
    const [scaleValue] = useState(new Animated.Value(0));

    const onButtonClicked = () => {
        Animated.timing(scaleValue, {
            toValue: 2,
            useNativeDriver: true,
            duration: 2000,
        }).start(() => { scaleValue.setValue(0) })
        navigation.navigate('CreateGroupScreen');
    }
    const scaleValueInterpolation = scaleValue.interpolate({
        inputRange: [0, 0.25, 1],
        outputRange: [1, 20, 30],
      });
      

    return(
        <>
            <Animated.View style={[styles.objectStyle,
                {transform: [{scale: scaleValueInterpolation}]}
            ]} />
            <Pressable
                onPress={onButtonClicked}
                //onPressOut={()=>{navigation.navigate('CreateGroupScreen')}}
                style={styles.objectStyle}
            >
                <PlusIcon
                    width={50}
                    height={50}
                    fill={"#3A6DFC"}
                    preserveAspectRatio="none"
                />
            </Pressable>
        </>
    )
}

const GroupingScreen = () => {
    const user = useUser();
    const animation = new Animated.Value(1);

    const onAdd = () => {
        console.log('onAdd');
    }

    const {
        data,
        isFetchingNextPage,
        fetchNextPage,
        refetch,
        isFetching
    } = useInfiniteQuery(
        'groups',
        ({ pageParam = 0 }) => getGroups({ page: pageParam, size: 6, userId: user.userId }),
        {
            getNextPageParam: (lastPage) => {
                return lastPage?.currentCount === 6 ? lastPage.currentPage + 1 : undefined;
            },
        },
    );

    const groups = useMemo(() => {
        if (!data) {
            return null;
        }
        return data.pages.map((page) => { return (page.contents) }).flat();
    }, [data]);

    const start = ()=>{
        Animated.sequence([
            Animated.timing(
                animation,
                {
                    toValue: 15,
                    duration: 2000,
                    useNativeDriver: false,
                }
            ),
            Animated.timing(
                animation,
                {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: false,
                }
            )
            ]).start()
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    lineHeight: 36,

                }}>그루핑</Text>
                <MagnifyIcon />
            </View>
            

            <GroupInfo
                groups={groups}
                isFetchingNextPage={isFetchingNextPage}
                fetchNextPage={fetchNextPage}
                refresh={refetch}
                isRefreshing={isFetching && !isFetchingNextPage}
            />
            
            {/* 추가버튼 */}
            <AddButton/>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        marginBottom: 15,
        marginTop: 5,
    },
    animationStyle: animation => ({
        transform: [
            {scale: animation}
        ],
        backgroundColor: 'blue',
        width: 50,
        height: 50,
        borderRadius: 25,
    }),
    objectStyle:{
        position: 'absolute',
        right: 20,
        bottom: 15,
    }
})

export default GroupingScreen;