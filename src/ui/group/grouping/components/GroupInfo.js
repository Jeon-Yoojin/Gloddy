import React from 'react';
import { FlatList, RefreshControl, View, Text } from 'react-native'
import GroupElement from './GroupElement';

const GroupInfo = ({ groups, isFetchingNextPage, fetchNextPage, refresh, isRefreshing }) => {
    return (
        
        <FlatList
            data={groups}
            renderItem={({item, index})=>{
                return (
                    <GroupElement
                        key={index}
                        title={item.title}
                        introduction={item.content}
                        maxNum={item.memberCount}
                        place={item.place}
                        date={item.meetDate}
                    />
                )
            }}
            keyExtractor={(item, index)=>index.toString()}
            onEndReachThreshold={0.5}
            onEndReached={fetchNextPage}
            refreshControl={
                <RefreshControl onRefresh={refresh} refreshing={isRefreshing}/>
            }
            
        />
    )
    
}

export default GroupInfo;