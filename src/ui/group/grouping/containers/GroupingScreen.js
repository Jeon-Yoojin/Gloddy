import React, { useMemo } from "react";
import { SafeAreaView, View, StyleSheet, ScrollView, Image, Pressable, TouchableOpacity, Text, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Entypo from "react-native-vector-icons/Entypo";
import useUser from "../../../../redux/hooks/useUser";
import { getGroupDetail, getGroups } from "../../../../api/group";
import GroupInfo from "../components/GroupInfo";

import Header from "../../../../common/Header";
import { useInfiniteQuery } from "react-query";


const GroupingScreen = () => {
    const user = useUser();

    const navigation = useNavigation();
    const PlusIcon = '../../../../assets/image/register/plus.png'

    const {
        data,
        isFetchingNextPage,
        fetchNextPage,
        refetch,
        isFetching
    } = useInfiniteQuery(
        'groups',
        ({ pageParam = 0 }) => getGroups({ page: pageParam, size: 6, userId: 1 }),
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

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: '#FFFFFF' }]}>
            {/* Header */}
            <Header
                title={'그루핑'}
                noIcon={false}
                rightIcon={<Entypo name="magnifying-glass" size={25} />}
                rightIconPress={() => { console.log('pressed!') }}
            />

            <GroupInfo
                groups={groups}
                isFetchingNextPage={isFetchingNextPage}
                fetchNextPage={fetchNextPage}
                refresh={refetch}
                isRefreshing={isFetching && !isFetchingNextPage}
            />
            
            {/* 추가버튼 */}
            <Pressable onPress={() => { navigation.navigate('CreateGroupScreen') }}>
                <View style={styles.plus}>
                    <Entypo
                        name="plus"
                        size={30}
                        style={{ color: 'white' }}
                    />
                </View>
            </Pressable>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    plus: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#586ef3',
        alignItems: 'center',
        justifyContent: 'center',

        position: 'absolute',
        right: 20,
        bottom: 50,
    }
})

export default GroupingScreen;