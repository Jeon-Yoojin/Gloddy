import React, { useMemo } from "react";
import { SafeAreaView, StyleSheet, Pressable, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useInfiniteQuery } from "react-query";
import useUser from "../../../../redux/hooks/useUser";
import { getGroups } from "../../../../api/group";

import MagnifyIcon from "../../../../assets/image/magnify.svg";
import GroupInfo from "../components/GroupInfo";
import PlusIcon from "../../../../assets/image/plusIcon.svg";


const GroupingScreen = () => {
    const user = useUser();

    const navigation = useNavigation();

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

    return (
        <SafeAreaView style={{flex: 1}}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={{
                    fontSize: 16,
                    fontWeight: '700',
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
            <Pressable
                style={{position: 'absolute', right: 20, bottom: 15}}
                onPress={() => { navigation.navigate('CreateGroupScreen') }}
            >
                <PlusIcon
                    width={50}
                    height={50}
                    fill={"#3A6DFC"}
                    preserveAspectRatio="none"
                />
            </Pressable>

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
        marginTop: 5
    }
})

export default GroupingScreen;